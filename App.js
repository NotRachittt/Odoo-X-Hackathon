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
        toast: '',
        _toastTimer: null,

        /* ---------- search & filters ---------- */
        searchQuery: '',
        filters: { tripType: 'all', sortBy: 'popular', maxBudget: 3000, maxDays: 8, weatherTags: [], region: 'all' },
        appliedFilters: { tripType: 'all', sortBy: 'popular', maxBudget: 3000, maxDays: 8, weatherTags: [], region: 'all' },
        weatherOptions: ['Rain', 'No rain', 'Snow', 'Pollution free', 'Colder', 'Warmer'],

        /* ---------- top nav trip search ---------- */
        travelTo: '',
        travelMonth: '',

        /* ---------- left sidebar trip type ---------- */
        tripTypeOptions: [
            { value: 'all', label: 'All trips', icon: 'fa-solid fa-globe' },
            { value: 'international', label: 'International', icon: 'fa-solid fa-plane' },
            { value: 'domestic', label: 'Domestic', icon: 'fa-solid fa-car' }
        ],

        /* ---------- data ---------- */
        cityQuery: '',
        chartInstance: null,
        cities: [
            { id: 1, name: 'Agra', country: 'India', costIndex: 'Low' },
            { id: 2, name: 'Jaipur', country: 'India', costIndex: 'Low' },
            { id: 3, name: 'Varanasi', country: 'India', costIndex: 'Low' },
            { id: 4, name: 'Udaipur', country: 'India', costIndex: 'Medium' },
            { id: 5, name: 'Mumbai', country: 'India', costIndex: 'Medium' },
            { id: 6, name: 'Amritsar', country: 'India', costIndex: 'Low' },
            { id: 7, name: 'Bengaluru', country: 'India', costIndex: 'Medium' },
            { id: 8, name: 'Shimla', country: 'India', costIndex: 'Low' },
            { id: 9, name: 'Mysore', country: 'India', costIndex: 'Low' },
            { id: 10, name: 'Jodhpur', country: 'India', costIndex: 'Low' },
            { id: 11, name: 'Kochi', country: 'India', costIndex: 'Low' },
            { id: 12, name: 'Madurai', country: 'India', costIndex: 'Low' },
            { id: 13, name: 'Rishikesh', country: 'India', costIndex: 'Low' },
            { id: 14, name: 'Paris', country: 'France', costIndex: 'High' },
            { id: 15, name: 'London', country: 'United Kingdom', costIndex: 'High' },
            { id: 16, name: 'Tokyo', country: 'Japan', costIndex: 'High' },
            { id: 17, name: 'Rome', country: 'Italy', costIndex: 'Medium' },
            { id: 18, name: 'New York City', country: 'USA', costIndex: 'High' },
            { id: 19, name: 'Dubai', country: 'UAE', costIndex: 'High' },
            { id: 20, name: 'Bangkok', country: 'Thailand', costIndex: 'Low' },
            { id: 21, name: 'Istanbul', country: 'Turkey', costIndex: 'Medium' },
            { id: 22, name: 'Singapore', country: 'Singapore', costIndex: 'High' },
            { id: 23, name: 'Barcelona', country: 'Spain', costIndex: 'Medium' },
            { id: 24, name: 'Kyoto', country: 'Japan', costIndex: 'Medium' },
            { id: 25, name: 'Amsterdam', country: 'Netherlands', costIndex: 'High' },
            { id: 26, name: 'Prague', country: 'Czech Republic', costIndex: 'Medium' },
            { id: 27, name: 'Cairo', country: 'Egypt', costIndex: 'Low' },
            { id: 28, name: 'Sydney', country: 'Australia', costIndex: 'High' }
        ],
        famousTrips: [
            { id: 't1', title: 'Agra Taj Getaway', country: 'India', region: 'Asia', cities: ['Agra'], days: 2, price: 300, rating: 4.7, tags: ['Culture', 'Iconic'], weather: ['Warmer', 'No rain'], gradient: 'linear-gradient(135deg,#f6d365,#fda085)', icon: 'fa-solid fa-landmark', type: 'domestic', visaFree: true, image: 'https://i.postimg.cc/DZQkXVLZ/Agra.jpg' },
            { id: 't2', title: 'Jaipur Pink City Trail', country: 'India', region: 'Asia', cities: ['Jaipur'], days: 3, price: 450, rating: 4.7, tags: ['Culture', 'City'], weather: ['Warmer', 'Rain'], gradient: 'linear-gradient(135deg,#f857a6,#ff5858)', icon: 'fa-solid fa-chess-rook', type: 'domestic', visaFree: true, image: 'https://i.postimg.cc/9f7jcwft/jaipur.jpg' },
            { id: 't3', title: 'Varanasi Ganga Ghats', country: 'India', region: 'Asia', cities: ['Varanasi'], days: 3, price: 350, rating: 4.8, tags: ['Culture', 'Spiritual'], weather: ['Warmer', 'Rain'], gradient: 'linear-gradient(135deg,#fbc2eb,#a6c1ee)', icon: 'fa-solid fa-om', type: 'domestic', visaFree: true, image: 'https://i.postimg.cc/Vk58HVQ4/Varanasi.jpg' },
            { id: 't4', title: 'Udaipur Lake Romance', country: 'India', region: 'Asia', cities: ['Udaipur'], days: 3, price: 600, rating: 4.9, tags: ['Romance', 'Luxury'], weather: ['Warmer', 'Rain'], gradient: 'linear-gradient(135deg,#4facfe,#00f2fe)', icon: 'fa-solid fa-water', type: 'domestic', visaFree: true, image: 'https://i.postimg.cc/8PpDLCyF/Udaipur.jpg' },
            { id: 't5', title: 'Mumbai City Rush', country: 'India', region: 'Asia', cities: ['Mumbai'], days: 4, price: 500, rating: 4.5, tags: ['City', 'Foodie'], weather: ['Warmer', 'Rain'], gradient: 'linear-gradient(135deg,#667eea,#764ba2)', icon: 'fa-solid fa-city', type: 'domestic', visaFree: true, image: 'https://i.postimg.cc/634TJpkf/Mumbai.jpg' },
            { id: 't6', title: 'Amritsar Golden Temple', country: 'India', region: 'Asia', cities: ['Amritsar'], days: 2, price: 300, rating: 4.9, tags: ['Culture', 'Spiritual'], weather: ['Warmer', 'No rain'], gradient: 'linear-gradient(135deg,#f5a623,#f76b1c)', icon: 'fa-solid fa-place-of-worship', type: 'domestic', visaFree: true, image: 'https://i.postimg.cc/wMVpSKB6/Amritsar.jpg' },
            { id: 't7', title: 'Bengaluru Garden City', country: 'India', region: 'Asia', cities: ['Bengaluru'], days: 3, price: 400, rating: 4.4, tags: ['City', 'Foodie'], weather: ['Warmer', 'Rain', 'Pollution free'], gradient: 'linear-gradient(135deg,#43e97b,#38f9d7)', icon: 'fa-solid fa-city', type: 'domestic', visaFree: true, image: 'https://i.postimg.cc/FzmvWFNV/Bengaluru.jpg' },
            { id: 't8', title: 'Shimla Hill Escape', country: 'India', region: 'Asia', cities: ['Shimla'], days: 4, price: 450, rating: 4.6, tags: ['Nature', 'Adventure'], weather: ['Colder', 'Snow'], gradient: 'linear-gradient(135deg,#7de2fc,#b9b6e5)', icon: 'fa-solid fa-mountain-sun', type: 'domestic', visaFree: true, image: 'https://i.postimg.cc/vB5MtxFQ/Shimla.jpg' },
            { id: 't9', title: 'Mysore Palace Tour', country: 'India', region: 'Asia', cities: ['Mysore'], days: 2, price: 300, rating: 4.6, tags: ['Culture', 'Iconic'], weather: ['Warmer', 'No rain', 'Pollution free'], gradient: 'linear-gradient(135deg,#f78ca0,#fe9a8b)', icon: 'fa-solid fa-landmark', type: 'domestic', visaFree: true, image: 'https://i.postimg.cc/vmgGDS0x/Mysore.jpg' },
            { id: 't10', title: 'Jodhpur Blue City', country: 'India', region: 'Asia', cities: ['Jodhpur'], days: 3, price: 400, rating: 4.7, tags: ['Culture', 'City'], weather: ['Warmer', 'No rain'], gradient: 'linear-gradient(135deg,#a18cd1,#fbc2eb)', icon: 'fa-solid fa-fort-awesome', type: 'domestic', visaFree: true, image: 'https://i.postimg.cc/0yNk1NDR/Jodhpur.jpg' },
            { id: 't11', title: 'Kochi Backwater Calm', country: 'India', region: 'Asia', cities: ['Kochi'], days: 3, price: 380, rating: 4.7, tags: ['Beach', 'Relax'], weather: ['Warmer', 'Rain'], gradient: 'linear-gradient(135deg,#43e97b,#38f9d7)', icon: 'fa-solid fa-umbrella-beach', type: 'domestic', visaFree: true, image: 'https://i.postimg.cc/c1Q4Q20m/Kochi.jpg' },
            { id: 't12', title: 'Madurai Temple Trail', country: 'India', region: 'Asia', cities: ['Madurai'], days: 2, price: 280, rating: 4.6, tags: ['Culture', 'Spiritual'], weather: ['Warmer', 'No rain'], gradient: 'linear-gradient(135deg,#fbc2eb,#a6c1ee)', icon: 'fa-solid fa-place-of-worship', type: 'domestic', visaFree: true, image: 'https://i.postimg.cc/QCr82kkH/Madurai.jpg' },
            { id: 't13', title: 'Rishikesh Riverside Zen', country: 'India', region: 'Asia', cities: ['Rishikesh'], days: 4, price: 350, rating: 4.8, tags: ['Adventure', 'Nature'], weather: ['Colder', 'Rain'], gradient: 'linear-gradient(135deg,#7de2fc,#b9b6e5)', icon: 'fa-solid fa-person-hiking', type: 'domestic', visaFree: true, image: 'https://i.postimg.cc/7LdYVyC8/Rishikesh.jpg' },
            { id: 't14', title: 'Parisian Romance', country: 'France', region: 'Europe', cities: ['Paris'], days: 4, price: 1500, rating: 4.7, tags: ['Romance', 'Iconic'], weather: ['Colder', 'No rain'], gradient: 'linear-gradient(135deg,#f6d365,#fda085)', icon: 'fa-solid fa-champagne-glasses', type: 'international', visaFree: false, image: 'https://i.postimg.cc/4Nm2CkyQ/Paris.jpg' },
            { id: 't15', title: 'London City Lights', country: 'United Kingdom', region: 'Europe', cities: ['London'], days: 5, price: 2100, rating: 4.6, tags: ['City', 'Iconic'], weather: ['Colder', 'Rain'], gradient: 'linear-gradient(135deg,#667eea,#764ba2)', icon: 'fa-solid fa-landmark', type: 'international', visaFree: false, image: 'https://i.postimg.cc/BZh7wQSt/London.jpg' },
            { id: 't16', title: 'Tokyo Neon Nights', country: 'Japan', region: 'Asia', cities: ['Tokyo'], days: 5, price: 1800, rating: 4.8, tags: ['Culture', 'City', 'Foodie'], weather: ['Warmer', 'Rain'], gradient: 'linear-gradient(135deg,#f857a6,#ff5858)', icon: 'fa-solid fa-torii-gate', type: 'international', visaFree: false, image: 'https://i.postimg.cc/d3SW7nHR/Tokyo.jpg' },
            { id: 't17', title: 'Rome Ancient Wonders', country: 'Italy', region: 'Europe', cities: ['Rome'], days: 4, price: 1600, rating: 4.8, tags: ['History', 'Iconic'], weather: ['Warmer', 'No rain'], gradient: 'linear-gradient(135deg,#a18cd1,#fbc2eb)', icon: 'fa-solid fa-landmark', type: 'international', visaFree: false, image: 'https://i.postimg.cc/7hLsYjVv/Rome.jpg' },
            { id: 't18', title: 'New York City Pulse', country: 'USA', region: 'Americas', cities: ['New York City'], days: 4, price: 2000, rating: 4.6, tags: ['City', 'Iconic'], weather: ['Warmer', 'No rain'], gradient: 'linear-gradient(135deg,#667eea,#764ba2)', icon: 'fa-solid fa-city', type: 'international', visaFree: false, image: 'https://i.postimg.cc/ZR4sXWvJ/New-York-City.jpg' },
            { id: 't19', title: 'Dubai Desert & Sky', country: 'UAE', region: 'Middle East', cities: ['Dubai'], days: 4, price: 2600, rating: 4.7, tags: ['Luxury', 'Desert'], weather: ['Warmer', 'No rain'], gradient: 'linear-gradient(135deg,#f5a623,#f76b1c)', icon: 'fa-solid fa-hotel', type: 'international', visaFree: true, image: 'https://i.postimg.cc/6QsmLj9j/Dubai.jpg' },
            { id: 't20', title: 'Bangkok Street & Temple', country: 'Thailand', region: 'Asia', cities: ['Bangkok'], days: 4, price: 1000, rating: 4.6, tags: ['Culture', 'Foodie', 'Budget'], weather: ['Warmer', 'Rain'], gradient: 'linear-gradient(135deg,#f78ca0,#fe9a8b)', icon: 'fa-solid fa-place-of-worship', type: 'international', visaFree: true, image: 'https://i.postimg.cc/6p4PZJxS/Bangkok.jpg' },
            { id: 't21', title: 'Istanbul Two Continents', country: 'Turkey', region: 'Europe', cities: ['Istanbul'], days: 4, price: 1300, rating: 4.7, tags: ['Culture', 'Iconic'], weather: ['Warmer', 'No rain'], gradient: 'linear-gradient(135deg,#fbc2eb,#a6c1ee)', icon: 'fa-solid fa-mosque', type: 'international', visaFree: true, image: 'https://i.postimg.cc/15t29VCy/Istanbul.jpg' },
            { id: 't22', title: 'Singapore Skyline', country: 'Singapore', region: 'Asia', cities: ['Singapore'], days: 3, price: 1900, rating: 4.8, tags: ['City', 'Luxury'], weather: ['Warmer', 'Rain'], gradient: 'linear-gradient(135deg,#4facfe,#00f2fe)', icon: 'fa-solid fa-city', type: 'international', visaFree: false, image: 'https://i.postimg.cc/pVk3bJBs/Singapore.jpg' },
            { id: 't23', title: 'Barcelona Coastal Charm', country: 'Spain', region: 'Europe', cities: ['Barcelona'], days: 4, price: 1400, rating: 4.7, tags: ['Culture', 'Beach'], weather: ['Warmer', 'No rain', 'Pollution free'], gradient: 'linear-gradient(135deg,#43e97b,#38f9d7)', icon: 'fa-solid fa-water', type: 'international', visaFree: false, image: 'https://i.postimg.cc/7hPcJ5qV/Barcelona.jpg' },
            { id: 't24', title: 'Kyoto Zen Journey', country: 'Japan', region: 'Asia', cities: ['Kyoto'], days: 6, price: 1900, rating: 4.8, tags: ['Culture', 'Nature'], weather: ['Warmer', 'Rain'], gradient: 'linear-gradient(135deg,#f78ca0,#fe9a8b)', icon: 'fa-solid fa-spa', type: 'international', visaFree: false, image: 'https://i.postimg.cc/KYLC6X9t/Kyoto.jpg' },
            { id: 't25', title: 'Amsterdam Canal Days', country: 'Netherlands', region: 'Europe', cities: ['Amsterdam'], days: 3, price: 1550, rating: 4.6, tags: ['City', 'Culture'], weather: ['Colder', 'Rain', 'Pollution free'], gradient: 'linear-gradient(135deg,#667eea,#764ba2)', icon: 'fa-solid fa-city', type: 'international', visaFree: false, image: 'https://i.postimg.cc/CxR34nbS/Amsterdam.jpg' },
            { id: 't26', title: 'Prague Old Town', country: 'Czech Republic', region: 'Europe', cities: ['Prague'], days: 3, price: 800, rating: 4.5, tags: ['History', 'Budget'], weather: ['Colder', 'No rain', 'Pollution free'], gradient: 'linear-gradient(135deg,#a18cd1,#fbc2eb)', icon: 'fa-solid fa-landmark', type: 'international', visaFree: false, image: 'https://i.postimg.cc/nchbCPLy/Prague.jpg' },
            { id: 't27', title: 'Cairo Pyramids Trail', country: 'Egypt', region: 'Africa', cities: ['Cairo'], days: 4, price: 1100, rating: 4.6, tags: ['History', 'Iconic'], weather: ['Warmer', 'No rain'], gradient: 'linear-gradient(135deg,#f6d365,#fda085)', icon: 'fa-solid fa-monument', type: 'international', visaFree: true, image: 'https://i.postimg.cc/T1Qztrk5/Cairo.jpg' },
            { id: 't28', title: 'Sydney Harbour Views', country: 'Australia', region: 'Oceania', cities: ['Sydney'], days: 5, price: 2300, rating: 4.8, tags: ['City', 'Nature'], weather: ['Colder', 'No rain', 'Pollution free'], gradient: 'linear-gradient(135deg,#4facfe,#00f2fe)', icon: 'fa-solid fa-water', type: 'international', visaFree: false, image: 'https://i.postimg.cc/NFgh8NkP/Sydney.jpg' }
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
            return f.tripType !== 'all' || f.sortBy !== 'popular' || f.maxBudget < 3000 || f.maxDays < 8 || f.weatherTags.length > 0 || f.region !== 'all' || this.searchQuery.trim() !== '' || this.travelTo !== '';
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
            if (this.travelTo) {
                list = list.filter(t => t.cities.includes(this.travelTo));
            }
            const f = this.appliedFilters;
            if (f.tripType !== 'all') list = list.filter(t => t.type === f.tripType);
            list = list.filter(t => t.price <= f.maxBudget);
            list = list.filter(t => t.days <= f.maxDays);
            if (f.region !== 'all') list = list.filter(t => t.region === f.region);
            if (f.weatherTags.length > 0) list = list.filter(t => t.weather.some(w => f.weatherTags.includes(w)));
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
            this.appliedFilters = Object.assign({}, this.filters, { weatherTags: this.filters.weatherTags.slice() });
            this.showToast('Filters applied');
        },
        resetFilters() {
            this.filters = { tripType: 'all', sortBy: 'popular', maxBudget: 3000, maxDays: 8, weatherTags: [], region: 'all' };
            this.appliedFilters = Object.assign({}, this.filters, { weatherTags: [] });
        },
        clearAll() {
            this.searchQuery = '';
            this.travelTo = '';
            this.resetFilters();
        },
        toggleTripType(value) {
            this.filters.tripType = value;
        },
        toggleWeatherTag(tag) {
            const i = this.filters.weatherTags.indexOf(tag);
            if (i === -1) this.filters.weatherTags.push(tag);
            else this.filters.weatherTags.splice(i, 1);
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
