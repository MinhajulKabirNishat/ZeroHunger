import { useState, useEffect } from "react";

function Donor() {
  
  const [foodName, setFoodName] = useState("");
  const [expiryTime, setExpiryTime] = useState("");

  
  const [timeLeft, setTimeLeft] = useState(null);

  
  useEffect(() => {
    if (!expiryTime) return;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const expiry = new Date(expiryTime).getTime();
      const difference = expiry - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft("Expired");
        return;
      }

      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    
    return () => clearInterval(interval);
  }, [expiryTime]);

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2> Donor Dashboard</h2>
      <p>Add surplus food before it goes to waste.</p>

      {/* Food Form */}
      <form>
        <div>
          <label>Food Name:</label><br />
          <input
            type="text"
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
            placeholder="e.g. Bread, Rice"
          />
        </div>

        <br />

        <div>
          <label>Expiry Time:</label><br />
          <input
            type="datetime-local"
            value={expiryTime}
            onChange={(e) => setExpiryTime(e.target.value)}
          />
        </div>

        <br />

        <button type="submit">Add Food</button>
      </form>

      {/* Countdown Display */}
      {timeLeft && (
        <p style={{ marginTop: "20px", fontWeight: "bold" }}>
          ⏰ Time left: {timeLeft}
        </p>
      )}
    </div>
  );
}

export default Donor;
