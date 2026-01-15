# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# 🍎 ZeroHunger

**ZeroHunger** is a full-stack, real-time web application that helps reduce food waste by connecting local food donors (restaurants, bakeries) with receivers (individuals or NGOs) through a live map-based system.

This project is built step by step as a beginner-friendly but professional-grade application using modern web technologies.

---

##  Problem Statement

Every day, large amounts of perfectly edible food are wasted by businesses, while many people nearby struggle with food insecurity.

**ZeroHunger solves this problem by:**
- Allowing donors to list surplus food
- Showing available food on a real-time map
- Letting receivers quickly find and claim food before it expires

---

##  Features Implemented

###  Donor Side
- Add food donations (food name, quantity, location)
- Data stored in Firebase Firestore
- Real-time updates

###  Receiver Side
- View all available food donations
- See food locations on Google Maps
- Live updates when new food is added

###  Map Features
- Google Maps JavaScript API integration
- Donation pins displayed dynamically from Firestore
- Location-based visualization

###  General
- React component-based architecture
- Clean UI using Tailwind CSS
- Environment variable protection for API keys
- Beginner-friendly, scalable project structure

---

##  Tech Stack

| Layer | Technology |
|-----|-----------|
| Frontend | React.js (Vite) |
| Styling | Tailwind CSS |
| Routing | React Router DOM |
| Backend | Firebase Firestore |
| Maps | Google Maps JavaScript API |
| Build Tool | Vite |
| Version Control | Git & GitHub |

---

##  Project Structure

ZeroHunger/
├── src/
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── Donor.jsx
│ │ ├── Receiver.jsx
│ │ └── MapView.jsx
│ ├── firebase/
│ │ └── config.js
│ ├── App.jsx
│ └── main.jsx
├── public/
├── .env
├── package.json
└── README.md


---

##  Installation & Setup 

### Clone the repository
```bash
git clone https://github.com/MinhajulKabirNishat/ZeroHunger.git
cd ZeroHunger
### Install dependencies
npm install
### Create .env file (IMPORTANT)
Create a file named .env in the root directory:

VITE_FIREBASE_API_KEY=your_firebase_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

VITE_GOOGLE_MAPS_KEY=your_google_maps_api_key


### Run the project
npm run dev
Open in browser:
http://localhost:5173

### Firebase Setup Notes
Firestore database used for donations

Collection name: donations

Each document contains:

foodItem (string)

quantity (number)

lat (number)

lng (number)

###Google Maps Setup Notes (Work going on this)
Billing must be enabled (free $200/month)

Required APIs:

Maps JavaScript API

Places API (optional but recommended)

API key loaded via environment variables

### Future Enhancements
User authentication (Donor vs Receiver login)

Reservation / claim locking system

Expiry countdown timer

NGO verification badges

Mobile-first UI improvements

Deployment (Firebase Hosting / Vercel)

### Learning Outcome
This project helped practice:

Full-stack thinking

React fundamentals

Real-time databases

Third-party API integration

Debugging real-world issues

Professional GitHub documentation

### Contribution
This project is currently developed as a learning project.
Suggestions and improvements are welcome.