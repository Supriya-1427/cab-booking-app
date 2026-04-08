export default function RideCard({ ride, onSelect, selected }) {
  return (
    <div
      className={`ride-type-card ${selected ? "selected" : ""}`}
      onClick={onSelect}
    >
      <h4>{ride.icon} {ride.name}</h4>
      <p>₹{ride.price}</p>
      <p>{ride.time} away</p>
    </div>
  );
}