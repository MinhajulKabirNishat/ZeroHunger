import { useEffect, useState } from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

const containerStyle = {
  width: "100%",
  height: "80vh",
};

const center = {
  lat: 23.8103,
  lng: 90.4125, // Dhaka
};

const MapView = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchDonations = async () => {
      const snapshot = await getDocs(collection(db, "donations"));
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDonations(data);
    };

    fetchDonations();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-orange-700 mb-4">
        Food Locations 📍
      </h1>

      <LoadScript googleMapsApiKey="AIzaSyBsPg8hagKT1GpHb_vrgMF_JdByYr5OzfU">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
        >
          {donations
            .filter(
              (item) =>
                item.status === "available" && item.location
            )
            .map((item) => (
              <Marker
                key={item.id}
                position={{
                  lat: item.location.lat,
                  lng: item.location.lng,
                }}
                title={`${item.foodItem} (${item.quantity})`}
              />
            ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapView;
