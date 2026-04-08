export default function Navbar({ setPage }) {
  return (
    <div className="navbar">
      <button onClick={() => setPage("home")}>🏠</button>
      <button onClick={() => setPage("tracking")}>📍</button>
      <button onClick={() => setPage("history")}>🕓</button>
      <button onClick={() => setPage("login")}>🚪</button>
    </div>
  );
}