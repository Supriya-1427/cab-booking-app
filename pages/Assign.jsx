import { useEffect, useState } from "react";

export default function Assign({ driver, setPage }) {
  const [found, setFound] = useState(false);

  useEffect(() => {
    setTimeout(() => setFound(true), 2000);
  }, []);

  return (
    <div className="page">
      {!found ? (
        <h2>🔄 Finding Driver...</h2>
      ) : (
        <>
          <h2>✅ Driver Found</h2>
          <p>{driver?.name}</p>
          <p>{driver?.car}</p>
          <button onClick={() => setPage("tracking")}>
            Track Ride
          </button>
        </>
      )}
    </div>
  );
}