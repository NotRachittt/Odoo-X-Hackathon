function appData() {
    return {
        /* ---------- auth ---------- */
        isAuthenticated: false,
        authMode: 'login',
        authForm: { name: '', email: '', password: '' },
        authError: '',
        showPassword: false,
        user: { name: '', email: '' },

        /* ---------- ui ---------- */
        currentTab: 'dashboard',
        isShareView: false,
        showUserMenu: false,
        showFilters: false,
        toast: '',
        _toastTimer: null,

        /* ---------- search & filters ---------- */
        searchQuery: '',
        filters: { sortBy: 'popular', maxBudget: 4000, duration: 'any', region: 'all' },
        appliedFilters: { sortBy: 'popular', maxBudget: 4000, duration: 'any', region: 'all' },

        /* ---------- top nav trip search ---------- */
        travelFrom: '',
        travelTo: '',
        travelMonth: '',

        /* ---------- left sidebar trip type ---------- */
        tripType: 'all',
        tripTypeOptions: [
            { value: 'all', label: 'All trips', icon: 'fa-solid fa-globe' },
            { value: 'international', label: 'International', icon: 'fa-solid fa-plane' },
            { value: 'domestic', label: 'Domestic', icon: 'fa-solid fa-car' },
            { value: 'visaFree', label: 'Visa free', icon: 'fa-solid fa-passport' }
        ],

        /* ---------- data ---------- */
        cityQuery: '',
        chartInstance: null,
        cities: [
            { id: 1, name: 'Tokyo', country: 'Japan', costIndex: 'High' },
            { id: 2, name: 'Paris', country: 'France', costIndex: 'High' },
            { id: 3, name: 'Bali', country: 'Indonesia', costIndex: 'Low' },
            { id: 4, name: 'Prague', country: 'Czech Republic', costIndex: 'Medium' },
            { id: 5, name: 'Santorini', country: 'Greece', costIndex: 'High' },
            { id: 6, name: 'New York', country: 'USA', costIndex: 'High' },
            { id: 7, name: 'Dubai', country: 'UAE', costIndex: 'High' },
            { id: 8, name: 'Kyoto', country: 'Japan', costIndex: 'Medium' }
        ],
        famousTrips: [
            { id: 't1', title: 'Tokyo Neon Nights', country: 'Japan', region: 'Asia', cities: ['Tokyo'], days: 5, price: 1800, rating: 4.8, tags: ['Culture', 'City', 'Foodie'], gradient: 'linear-gradient(135deg,#f857a6,#ff5858)', icon: 'fa-solid fa-torii-gate', type: 'international', visaFree: false },
            { id: 't2', title: 'Parisian Romance', country: 'France', region: 'Europe', cities: ['Paris'], days: 4, price: 1500, rating: 4.7, tags: ['Romance', 'Iconic'], gradient: 'linear-gradient(135deg,#f6d365,#fda085)', icon: 'fa-solid fa-champagne-glasses', type: 'international', visaFree: false },
            { id: 't3', title: 'Bali Bliss Retreat', country: 'Indonesia', region: 'Asia', cities: ['Bali', 'Ubud'], days: 7, price: 1200, rating: 4.9, tags: ['Beach', 'Relax', 'Budget'], gradient: 'linear-gradient(135deg,#43e97b,#38f9d7)', icon: 'fa-solid fa-umbrella-beach', type: 'international', visaFree: true },
            { id: 't4', title: 'Prague Old Town', country: 'Czech Republic', region: 'Europe', cities: ['Prague'], days: 3, price: 800, rating: 4.5, tags: ['History', 'Budget'], gradient: 'linear-gradient(135deg,#a18cd1,#fbc2eb)', icon: 'fa-solid fa-landmark', type: 'international', visaFree: false },
            { id: 't5', title: 'Santorini Sunsets', country: 'Greece', region: 'Europe', cities: ['Santorini', 'Oia'], days: 5, price: 2200, rating: 4.9, tags: ['Beach', 'Luxury', 'Iconic'], gradient: 'linear-gradient(135deg,#4facfe,#00f2fe)', icon: 'fa-solid fa-water', type: 'international', visaFree: false },
            { id: 't6', title: 'New York City Pulse', country: 'USA', region: 'Americas', cities: ['New York'], days: 4, price: 2000, rating: 4.6, tags: ['City', 'Iconic'], gradient: 'linear-gradient(135deg,#667eea,#764ba2)', icon: 'fa-solid fa-city', type: 'international', visaFree: false },
            { id: 't7', title: 'Dubai Desert & Sky', country: 'UAE', region: 'Middle East', cities: ['Dubai'], days: 4, price: 2600, rating: 4.7, tags: ['Luxury', 'Desert'], gradient: 'linear-gradient(135deg,#f5a623,#f76b1c)', icon: 'fa-solid fa-hotel', type: 'international', visaFree: true },
            { id: 't8', title: 'Iceland Ring Road', country: 'Iceland', region: 'Europe', cities: ['Reykjavik'], days: 8, price: 3200, rating: 4.8, tags: ['Nature', 'Adventure'], gradient: 'linear-gradient(135deg,#7de2fc,#b9b6e5)', icon: 'fa-solid fa-mountain-sun', type: 'international', visaFree: false },
            { id: 't9', title: 'Kyoto Zen Journey', country: 'Japan', region: 'Asia', cities: ['Kyoto'], days: 6, price: 1900, rating: 4.8, tags: ['Culture', 'Nature'], gradient: 'linear-gradient(135deg,#f78ca0,#fe9a8b)', icon: 'fa-solid fa-spa', type: 'international', visaFree: true }
        ],
        activeTrip: {
            title: 'Euro-Asian Express Tour',
            description: 'A 10-day cultural exploration across key iconic destinations.',
            startDate: '2026-09-10',
            endDate: '2026-09-20',
            targetBudget: 2500,
            stops: [
                {
                    id: 101, cityName: 'Tokyo', items: [
                        { title: 'Shinjuku Hotel Stay', category: 'stay', cost: 450 },
                        { title: 'Senso-ji Temple Tour', category: 'activities', cost: 30 },
                        { title: 'Ramen Tasting Experience', category: 'meals', cost: 60 }]
                },
                {
                    id: 102, cityName: 'Paris', items: [
                        { title: 'Eiffel Tower Admission', category: 'activities', cost: 40 },
                        { title: 'Metro Transit Pass', category: 'transport', cost: 35 }]
                }
            ]
        },
        newItem: { title: '', category: 'activities', cost: '' },

        /* ---------- computed ---------- */
        get initials() {
            const n = (this.user.name || 'G').trim();
            const parts = n.split(' ');
            return ((parts[0][0] || '') + (parts[1] ? parts[1][0] : '')).toUpperCase();
        },
        get tripInitials() {
            return this.activeTrip.title.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();
        },
        get budgetPct() {
            if (!this.activeTrip.targetBudget) return 0;
            return Math.min(100, Math.round(this.calculateTotalCost() / this.activeTrip.targetBudget * 100));
        },
        get filteredCities() {
            if (!this.cityQuery) return this.cities;
            const q = this.cityQuery.toLowerCase();
            return this.cities.filter(c => c.name.toLowerCase().includes(q) || c.country.toLowerCase().includes(q));
        },
        get hasActiveFilters() {
            const f = this.appliedFilters;
            return f.sortBy !== 'popular' || f.maxBudget < 4000 || f.duration !== 'any' || f.region !== 'all' || this.searchQuery.trim() !== '' || this.tripType !== 'all';
        },
        get filteredTrips() {
            let list = this.famousTrips.slice();
            const q = this.searchQuery.trim().toLowerCase();
            if (q) {
                list = list.filter(t =>
                    t.title.toLowerCase().includes(q) ||
                    t.country.toLowerCase().includes(q) ||
                    t.region.toLowerCase().includes(q) ||
                    t.cities.join(' ').toLowerCase().includes(q) ||
                    t.tags.join(' ').toLowerCase().includes(q)
                );
            }
            if (this.tripType === 'visaFree') list = list.filter(t => t.visaFree);
            else if (this.tripType !== 'all') list = list.filter(t => t.type === this.tripType);
            const f = this.appliedFilters;
            list = list.filter(t => t.price <= f.maxBudget);
            if (f.region !== 'all') list = list.filter(t => t.region === f.region);
            if (f.duration === 'weekend') list = list.filter(t => t.days <= 3);
            else if (f.duration === 'short') list = list.filter(t => t.days >= 4 && t.days <= 6);
            else if (f.duration === 'long') list = list.filter(t => t.days >= 7);
            switch (f.sortBy) {
                case 'priceLow': list.sort((a, b) => a.price - b.price); break;
                case 'priceHigh': list.sort((a, b) => b.price - a.price); break;
                case 'durationShort': list.sort((a, b) => a.days - b.days); break;
                case 'durationLong': list.sort((a, b) => b.days - a.days); break;
                default: list.sort((a, b) => b.rating - a.rating);
            }
            return list;
        },

        /* ---------- auth methods ---------- */
        login() {
            if (!this.authForm.email || !this.authForm.password) { this.authError = 'Please enter your email and password.'; return; }
            this.user.name = this.deriveName(this.authForm.email);
            this.user.email = this.authForm.email;
            this.finishAuth('Welcome back, ' + this.user.name + '!');
        },
        signup() {
            if (!this.authForm.name || !this.authForm.email || !this.authForm.password) { this.authError = 'Please fill in all fields to sign up.'; return; }
            if (this.authForm.password.length < 4) { this.authError = 'Password should be at least 4 characters.'; return; }
            this.user.name = this.authForm.name;
            this.user.email = this.authForm.email;
            this.finishAuth('Account created — happy travels, ' + this.user.name + '!');
        },
        guestMode() {
            this.user.name = 'Guest';
            this.user.email = '';
            this.finishAuth('Exploring as guest — enjoy!');
        },
        finishAuth(msg) {
            this.authError = '';
            this.isAuthenticated = true;
            this.currentTab = 'dashboard';
            this.showToast(msg);
        },
        logout() {
            this.isAuthenticated = false;
            this.showUserMenu = false;
            this.authForm = { name: '', email: '', password: '' };
            this.authMode = 'login';
            this.currentTab = 'dashboard';
        },
        deriveName(email) {
            const base = email.split('@')[0].replace(/[._-]+/g, ' ');
            return base.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        },

        /* ---------- filter methods ---------- */
        applyFilters() {
            this.appliedFilters = Object.assign({}, this.filters);
            this.showFilters = false;
            if (this.currentTab !== 'dashboard') this.currentTab = 'dashboard';
            this.showToast('Filters applied');
        },
        resetFilters() {
            this.filters = { sortBy: 'popular', maxBudget: 4000, duration: 'any', region: 'all' };
            this.appliedFilters = Object.assign({}, this.filters);
        },
        clearAll() {
            this.searchQuery = '';
            this.resetFilters();
            this.tripType = 'all';
        },
        toggleTripType(value) {
            this.tripType = value;
        },

        /* ---------- trip methods ---------- */
        newTrip() {
            this.activeTrip = { title: 'Untitled Adventure', description: 'Start adding cities and activities to build your plan.', startDate: '2026-10-01', endDate: '2026-10-07', targetBudget: 2000, stops: [] };
            this.currentTab = 'planner';
            this.updateChart();
            this.showToast('New trip created — start adding stops!');
        },
        startTripFromFamous(trip) {
            const stops = trip.cities.map((c, i) => ({
                id: Date.now() + i,
                cityName: c,
                items: i === 0 ? [
                    { title: c + ' Boutique Stay', category: 'stay', cost: Math.round(trip.price * 0.4) },
                    { title: c + ' Highlights Tour', category: 'activities', cost: Math.round(trip.price * 0.15) }
                ] : []
            }));
            this.activeTrip = {
                title: trip.title,
                description: trip.days + '-day ' + trip.region + ' journey • ' + trip.cities.join(' → '),
                startDate: '2026-10-01',
                endDate: '2026-10-' + String(Math.min(1 + trip.days, 28)).padStart(2, '0'),
                targetBudget: trip.price,
                stops: stops
            };
            this.currentTab = 'planner';
            this.updateChart();
            this.showToast('Loaded "' + trip.title + '" into the planner ✈');
        },
        addStop(city) {
            this.activeTrip.stops.push({ id: Date.now(), cityName: city.name, items: [] });
            this.updateChart();
            this.showToast(city.name + ' added as a stop');
        },
        removeStop(index) {
            this.activeTrip.stops.splice(index, 1);
            this.updateChart();
        },
        addItem() {
            if (!this.newItem.title || !this.newItem.cost || this.activeTrip.stops.length === 0) return;
            this.activeTrip.stops[0].items.push({ title: this.newItem.title, category: this.newItem.category, cost: parseFloat(this.newItem.cost) });
            this.newItem.title = '';
            this.newItem.cost = '';
            this.updateChart();
        },
        calculateTotalCost() {
            let total = 0;
            this.activeTrip.stops.forEach(stop => stop.items.forEach(item => total += item.cost));
            return total;
        },
        calculateCategoryTotals() {
            const totals = { activities: 0, stay: 0, transport: 0, meals: 0 };
            this.activeTrip.stops.forEach(stop => stop.items.forEach(item => {
                if (totals[item.category] !== undefined) totals[item.category] += item.cost;
            }));
            return totals;
        },
        toggleShareMode() {
            this.isShareView = !this.isShareView;
            if (this.isShareView) this.showFilters = false;
        },

        /* ---------- chart ---------- */
        renderBudgetChart() {
            this.$nextTick(() => {
                const ctx = document.getElementById('budgetChart');
                if (!ctx) return;
                const t = this.calculateCategoryTotals();
                const data = [t.activities, t.stay, t.transport, t.meals];
                if (this.chartInstance) {
                    this.chartInstance.data.datasets[0].data = data;
                    this.chartInstance.resize();
                    this.chartInstance.update();
                    return;
                }
                this.chartInstance = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: ['Activities', 'Stay', 'Transport', 'Meals'],
                        datasets: [{ data: data, backgroundColor: ['#0ea5e9', '#0d9488', '#ff6b5c', '#f59e0b'], borderWidth: 2, borderColor: '#ffffff' }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        cutout: '62%',
                        plugins: { legend: { position: 'bottom', labels: { color: '#0f2942', padding: 16, usePointStyle: true, font: { family: 'Poppins' } } } }
                    }
                });
            });
        },
        updateChart() {
            if (!this.chartInstance) return;
            const t = this.calculateCategoryTotals();
            this.chartInstance.data.datasets[0].data = [t.activities, t.stay, t.transport, t.meals];
            this.chartInstance.update();
        },

        /* ---------- toast ---------- */
        showToast(msg) {
            this.toast = msg;
            clearTimeout(this._toastTimer);
            this._toastTimer = setTimeout(() => { this.toast = ''; }, 2600);
        }
    }
}