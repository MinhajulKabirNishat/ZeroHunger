import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";

const Donor = () => {
  const [foodItem, setFoodItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [expiryTime, setExpiryTime] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!foodItem || !quantity || !expiryTime) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, "donations"), {
        foodItem: foodItem,
        quantity: Number(quantity),
        expiryTime: expiryTime,
        status: "available",
        createdAt: serverTimestamp(),
      });

      alert("Donation added successfully!");

      setFoodItem("");
      setQuantity("");
      setExpiryTime("");
    } catch (error) {
      console.error("Error adding donation:", error);
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-green-700 mb-6 text-center">
          Donor Dashboard 
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Food Item</label>
            <input
              type="text"
              value={foodItem}
              onChange={(e) => setFoodItem(e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="Rice, Bread, Cake..."
            />
          </div>

          <div>
            <label className="block font-medium">Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="5"
            />
          </div>

          <div>
            <label className="block font-medium">Expiry Time</label>
            <input
              type="datetime-local"
              value={expiryTime}
              onChange={(e) => setExpiryTime(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            {loading ? "Adding..." : "Add Donation"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Donor;
