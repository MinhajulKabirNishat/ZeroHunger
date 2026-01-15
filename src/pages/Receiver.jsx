import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

const Receiver = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "donations"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDonations(data);
      } catch (error) {
        console.error("Error fetching donations:", error);
      }
      setLoading(false);
    };

    fetchDonations();
  }, []);

  return (
    <div className="min-h-screen bg-orange-50 p-8">
      <h1 className="text-3xl font-bold text-orange-700 mb-6">
        Available Food 🍽️
      </h1>

      {loading && <p>Loading donations...</p>}

      {!loading && donations.length === 0 && (
        <p>No food available right now.</p>
      )}

      <div className="grid gap-4">
        {donations.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded shadow border"
          >
            <p className="font-semibold">
              Food: {item.foodItem}
            </p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Receiver;

