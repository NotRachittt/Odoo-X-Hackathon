<div align="center">

# 🌍 GlobeTrotter

### *Empowering Personalized Travel Planning*

**Dream it. Plan it. Share it.** ✈️

<br/>

![Status](https://img.shields.io/badge/status-in--development-orange?style=for-the-badge)
![Hackathon](https://img.shields.io/badge/Odoo%20x%20LDCE-Hackathon'26-8B2C6F?style=for-the-badge)
![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen?style=for-the-badge)

<br/>

*A personalized, intelligent, and collaborative platform that transforms the way you plan and experience travel.*

</div>

---

## 📖 About The Project

**GlobeTrotter** is an end-to-end travel planning web application that makes organizing multi-city trips as exciting as the trip itself. 🎒

Users can explore global destinations, build structured day-wise itineraries, estimate trip budgets automatically, visualize their journey on a timeline, and share their plans with a community — all in one place.

> Built for the **Odoo x LDCE Ahmedabad Hackathon '26** 🏆

---

## ✨ Key Features

| 🎯 Core Features | 📝 Description |
|------------------|----------------|
| 🔐 **Auth** | Secure login / signup to manage personal travel plans |
| 🏠 **Dashboard** | Central hub with upcoming trips, popular cities & quick actions |
| ➕ **Create Trip** | Start a new trip with name, dates & description |
| 🧳 **My Trips** | Manage all your trips in one clean list |
| 🗺️ **Itinerary Builder** | Add cities, dates & activities for each stop |
| 👁️ **Itinerary View** | Review the full plan, day-wise, grouped by city |
| 💰 **Budget & Cost Breakdown** | Auto cost estimate with charts & over-budget alerts |

| ➕ Extra Features | 📝 Description |
|-------------------|----------------|
| 🔎 **City Search** | Discover & add cities with country, cost index & popularity |
| 🎡 **Activity Search** | Browse things to do, filtered by type / cost / duration |
| 📅 **Calendar / Timeline** | Visualize the journey with a calendar view |
| 🔗 **Public Share** | Share a read-only itinerary via public URL + "Copy Trip" |
| 👤 **Profile / Settings** | Update profile, preferences & saved destinations |
| 📊 **Admin Analytics** *(optional)* | Track trends, top cities & user engagement |

---

## 🛠️ Tech Stack

> 🔧 *Team, update this once finalized.*

| Layer | Technology |
|-------|------------|
| 🎨 **Frontend** | `🔧 e.g. React + Tailwind CSS` |
| ⚙️ **Backend** | `🔧 e.g. Node.js + Express  /  Django` |
| 🗄️ **Database** | `PostgreSQL` *(relational)* |
| 📈 **Charts** | `🔧 e.g. Chart.js / Recharts` |
| 🔧 **Version Control** | `Git + GitHub` |

---

## 🗄️ Database Overview

GlobeTrotter is powered by a well-designed **relational database**. Core entities:

- **Users** — account & profile info
- **Trips** — a user's trip (name, dates, description)
- **Stops / Cities** — cities added to a trip, with order & dates
- **Activities** — things to do at each stop (type, cost, duration)
- **Expenses** — cost items used for the budget breakdown

```
User ──< Trip ──< Stop ──< Activity
                    │
                    └──< Expense
```

*( ──< means "one to many" )*

---

## 🚀 Getting Started

> 🔧 *Steps will finalize with the chosen stack. General flow below.*

**1. Clone the repo**
```bash
git clone https://github.com/NotRachittt/Odoo-X-Hackathon.git
cd Odoo-X-Hackathon
```

**2. Install dependencies**
```bash
# 🔧 e.g.  npm install   /   pip install -r requirements.txt
```

**3. Set up the database & environment**
```bash
# 🔧 configure your .env (DB URL, secret keys) and run migrations
```

**4. Run the app**
```bash
# 🔧 e.g.  npm run dev   /   python manage.py runserver
```

App runs on `http://localhost:3000` *(or your configured port)* 🚀

---

## 👥 Meet The Team

> 🔧 *Roles are suggestions — adjust as you like. Add each member's GitHub handle.*

| 👤 Name | 🧩 Role | 🔗 GitHub |
|---------|---------|-----------|
| **Rachit Shrirame** | Team Lead & Backend | [@NotRachittt](https://github.com/NotRachittt) |
| **Rakesh Chaudhary** | Backend & Database | `🔧 @username` |
| **Manashree Chandak** | Frontend & UI/UX | `🔧 @username` |
| **Moksha Zambad** | Frontend & Integration | `🔧 @username` |

---

## 🤝 Contribution Guidelines

To keep our work synced and every contribution visible 💪

- 🔄 **Pull first:** always `git pull` before you start and before you push
- ⏱️ **Commit hourly:** push to `main` at least once every hour
- 🏷️ **Clear messages:** e.g. `Add trip model`, `Fix budget chart` — not `update` / `final`
- 🙋 **Own your work:** every member commits their own code with their own GitHub identity

```bash
git pull
git add .
git commit -m "Clear message about what you did"
git push
```

---

## 📹 Demo

> 🔧 *Add your demo video link here after coding ends.*

🎥 **[Watch the Demo →](#)**

---

## 🙏 Acknowledgements

- **Odoo x LDCE Ahmedabad** for hosting Hackathon '26
- Everyone who dreams of their next adventure 🌏

<div align="center">

<br/>

**Made with ❤️ & ☕ by Team GlobeTrotter**

</div>
