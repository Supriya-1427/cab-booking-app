import { useState } from "react";
import Navbar from "../components/Navbar";
import RideCard from "../components/RideCard";

const RIDES = [
  { id: "eco", name: "Eco Ride", icon: "🌿", price: 120, time: "5 min" },
  { id: "comfort", name: "Comfort", icon: "✨", price: 200, time: "3 min" },
  { id: "premium", name: "Premium", icon: "💎", price: 350, time: "6 min" }
];

const DRIVERS = [
  { name: "Arjun", car: "Swift", eta: "3 min" },
  { name: "Rahul", car: "i20", eta: "5 min" }
];

export default function Home({ setPage, setDriver }) {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [selected, setSelected] = useState("comfort");

  const bookRide = () => {
    if (!pickup || !drop) {
      alert("Enter pickup and drop location!");
      return;
    }

    const d = DRIVERS[Math.floor(Math.random() * DRIVERS.length)];
    setDriver(d);
    setPage("assign");
  };

  return (
    <div>
      <Navbar setPage={setPage} />

      <div className="page">
        {/* 📍 LOCATION INPUT */}
        <div className="card">
          <h3>📍 Enter Locations</h3>

          <input
            type="text"
            placeholder="Pickup location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
          />

          <input
            type="text"
            placeholder="Drop location"
            value={drop}
            onChange={(e) => setDrop(e.target.value)}
          />
        </div>

        {/* 🚗 RIDE SELECTION */}
        <div className="card">
          <h3>🚗 Choose Ride</h3>

          {RIDES.map((r) => (
            <RideCard
              key={r.id}
              ride={r}
              selected={selected === r.id}
              onSelect={() => setSelected(r.id)}
            />
          ))}
        </div>

        {/* 🚀 BOOK BUTTON */}
        <button onClick={bookRide}>Book Ride</button>
      </div>
    </div>
  );
}