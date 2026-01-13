#  ZeroHunger: Hyper-Local Food Redistribution Portal

**ZeroHunger** is a real-time web application designed to bridge the gap between food waste and food insecurity. It allows local businesses (restaurants, bakeries) to list surplus food for NGOs and individuals to claim before it goes to waste.

---

##  The Problem & Solution
- **The Problem:** Perfectly good food is discarded by businesses at closing time while local communities face hunger.
- **The Solution:** A "Last-Minute" marketplace that creates urgency through real-time maps and countdown timers.

##  Key Features
- **Dual-User Portals:** Unique dashboards for Food Donors (Businesses) and Receivers (NGOs/Individuals).
- **Real-Time Map:** Integration with Google Maps API to visualize food "pins" nearby.
- **"Time-to-Waste" Countdown:** A live logic-driven timer for every listing to encourage quick pickups.
- **Reservation Lock:** A backend system to prevent double-claiming of items.
- **Verification System:** Badges for verified NGO partners.

##  Tech Stack
- **Frontend:** React.js (Vite)
- **Styling:** Tailwind CSS (for unique, responsive designs)
- **Routing:** React Router Dom (for multi-page navigation)
- **Backend/Database:** Firebase (Firestore for real-time data & Auth)
- **Maps:** Google Maps JavaScript API

---

##  Project Structure
```text
src/
├── components/     # Reusable UI elements (Buttons, Cards, Nav)
├── pages/          # Landing, Donor Dashboard, Map View, Success Page
├── firebase/       # Database configuration and logic
└── hooks/          # Custom logic for the "Time-to-Waste" timer

