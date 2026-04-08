import Navbar from "../components/Navbar";

export default function Tracking({ driver, setPage }) {
  return (
    <div>
      <Navbar setPage={setPage} />

      <div className="page">
        <h2>📍 Tracking</h2>

        <p>{driver?.name}</p>
        <p>{driver?.car}</p>
        <p>{driver?.eta}</p>
      </div>
    </div>
  );
}