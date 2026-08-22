const SUPABASE_URL = 'https://swtrckoomvtrhkraxhce.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_W7yLXagaQYuyDuPY9bokFA__hCdth9Y';
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function adminApp() {
    return {
        isAdmin: false,
        adminEmail: '',
        form: { email: 'shriramerachit@gmail.com', password: 'admin007' },
        error: '',
        tab: 'users',

        users: [],
        userSearch: '',
        selectedUser: null,
        userTrips: [],

        feed: [],
        _channel: null,

        async init() {
            const { data: { session } } = await sb.auth.getSession();
            if (session) await this.checkAdmin(session.user);
        },
        async login() {
            this.error = '';
            const { data, error } = await sb.auth.signInWithPassword({ email: this.form.email, password: this.form.password });
            if (error) { this.error = error.message; return; }
            await this.checkAdmin(data.user);
            if (!this.isAdmin) { this.error = 'This account does not have admin access.'; await sb.auth.signOut(); }
        },
        async checkAdmin(authUser) {
            const { data: profile } = await sb.from('profiles').select('*').eq('id', authUser.id).single();
            if (profile && profile.role === 'admin') {
                this.isAdmin = true;
                this.adminEmail = authUser.email;
                await this.loadUsers();
            }
        },
        async logout() {
            await sb.auth.signOut();
            this.isAdmin = false;
            this.selectedUser = null;
            this.userTrips = [];
            if (this._channel) sb.removeChannel(this._channel);
        },

        /* ---------- users ---------- */
        get filteredUsers() {
            const q = this.userSearch.trim().toLowerCase();
            if (!q) return this.users;
            return this.users.filter(u => (u.name || '').toLowerCase().includes(q) || (u.email || '').toLowerCase().includes(q));
        },
        async loadUsers() {
            const { data, error } = await sb.from('profiles').select('*').order('created_at', { ascending: false });
            if (!error) this.users = data || [];
        },
        async selectUser(u) {
            this.selectedUser = u;
            const { data } = await sb.from('trips').select('*, stops(*, items(*))').eq('user_id', u.id).order('updated_at', { ascending: false });
            this.userTrips = data || [];
        },
        tripTotal(trip) {
            let total = 0;
            (trip.stops || []).forEach(s => (s.items || []).forEach(it => total += Number(it.cost)));
            return total;
        },
        async toggleAdmin(u) {
            const newRole = u.role === 'admin' ? 'user' : 'admin';
            await sb.from('profiles').update({ role: newRole }).eq('id', u.id);
            u.role = newRole;
        },

        /* ---------- terminal / activity feed ---------- */
        async loadFeed() {
            const { data, error } = await sb.from('activity_log').select('*').order('created_at', { ascending: false }).limit(200);
            if (!error) {
                this.feed = (data || []).slice().reverse().map(this._formatLine);
                this._scrollFeed();
            }
            this._subscribeFeed();
        },
        _formatLine(row) {
            return {
                time: new Date(row.created_at).toLocaleTimeString(),
                user: row.user_email || 'unknown',
                action: row.action,
                details: row.details || ''
            };
        },
        _subscribeFeed() {
            if (this._channel) return;
            this._channel = sb.channel('activity-feed')
                .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'activity_log' }, (payload) => {
                    this.feed.push(this._formatLine(payload.new));
                    this._scrollFeed();
                })
                .subscribe();
        },
        _scrollFeed() {
            this.$nextTick(() => {
                const box = document.getElementById('feedBox');
                if (box) box.scrollTop = box.scrollHeight;
            });
        }
    };
}
