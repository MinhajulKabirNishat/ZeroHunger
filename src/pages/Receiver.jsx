import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/config";

const Receiver = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  
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

  useEffect(() => {
    fetchDonations();
  }, []);

  const claimDonation = async (id) => {
    try {
      const donationRef = doc(db, "donations", id);
      await updateDoc(donationRef, {
        status: "claimed",
        claimedAt: new Date(),
      });

      
      fetchDonations();
    } catch (error) {
      console.error("Error claiming donation:", error);
      alert("Failed to claim donation");
    }
  };

  
  const availableDonations = donations.filter(
    (item) => item.status === "available"
  );

  return (
    <div className="min-h-screen bg-orange-50 p-8">
      <h1 className="text-3xl font-bold text-orange-700 mb-6">
        Available Food
      </h1>

      {loading && <p>Loading donations...</p>}

      {!loading && availableDonations.length === 0 && (
        <p className="text-gray-600">
          No food available right now.
        </p>
      )}

      <div className="grid gap-4 max-w-xl">
        {availableDonations.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded shadow border"
          >
            <p className="font-semibold">
              Food: {item.foodItem}
            </p>
            <p>Quantity: {item.quantity}</p>

            <button
              onClick={() => claimDonation(item.id)}
              className="mt-3 bg-orange-600 text-white px-4 py-1 rounded hover:bg-orange-700 transition"
            >
              Claim
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Receiver;
