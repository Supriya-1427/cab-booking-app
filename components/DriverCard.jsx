export default function DriverCard({ driver }) {
  return (
    <div className="card">
      <h3>{driver?.name}</h3>
      <p>{driver?.car}</p>
      <p>ETA: {driver?.eta}</p>
    </div>
  );
}