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

```text
ZeroHunger/
├── src/
│   ├── pages/
│   │   ├── Home.jsx      # Landing page for the app
│   │   ├── Donor.jsx     # Dashboard for donating food
│   │   ├── Receiver.jsx  # Dashboard for finding food
│   │   └── MapView.jsx   # Visual map to locate food points
│   ├── firebase/
│   │   └── config.js     # Firebase connection and setup
│   ├── App.jsx           # Main application routing
│   └── main.jsx          # Entry point of the React app
├── public/               # Static assets (images, icons)
├── .env                  # Environment variables (HIDDEN)
├── package.json          # Project dependencies
└── README.md             # Project documentation

```

##  Installation & Setup (Beginner Friendly)

### Clone the repository

<h4>git clone https://github.com/MinhajulKabirNishat/ZeroHunger.git<br>
cd ZeroHunger</h4>

### Install dependencies

<b>npm install</b>

### Create .env file (IMPORTANT)
Create a file named .env in the root directory and add:

VITE_FIREBASE_API_KEY=your_firebase_key<br>
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain<br>
VITE_FIREBASE_PROJECT_ID=your_project_id<br>
VITE_FIREBASE_STORAGE_BUCKET=your_bucket<br>
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id<br>
VITE_FIREBASE_APP_ID=your_app_id<br>
VITE_GOOGLE_MAPS_KEY=your_google_maps_api_key


### Run the project

<h4>npm run dev<br></h4>
  <br>
Open in browser:
<h4>http://localhost:5173</h4>
<br>

### Firebase Setup Notes
-Firestore database is used

-Collection name: donations

-Each document contains:

-foodItem (string)

-quantity (number)

-lat (number)

-lng (number)

### Google Maps Setup Notes (Work ging on this)
<b>Billing must be enabled (Google gives $200 free/month)</b>

Required APIs:

-Maps JavaScript API

-Places API (optional but recommended)

-API key is loaded using environment variables

### Future Enhancements
-User authentication (Donor vs Receiver)

-Reservation / claim locking system

-Food expiry countdown timer

-NGO verification badges

-Mobile-first UI improvements

-Deployment (Firebase Hosting / Vercel)

### Learning Outcome
This project helped practice:

-Full-stack development

-React fundamentals

-Firebase & real-time databases

-Google Maps API integration

-Debugging real-world issues

-Writing professional GitHub documentation

## Contribution
This project is developed as a learning project.
Suggestions and improvements are welcome.

