import { useState } from "react";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Assign from "./pages/Assign";
import Tracking from "./pages/Tracking";
import History from "./pages/History";

export default function App() {
  const [page, setPage] = useState("login");
  const [driver, setDriver] = useState(null);

  return (
    <>
      {page === "login" && <Login setPage={setPage} />}
      {page === "signup" && <Signup setPage={setPage} />}
      {page === "home" && <Home setPage={setPage} setDriver={setDriver} />}
      {page === "assign" && <Assign driver={driver} setPage={setPage} />}
      {page === "tracking" && <Tracking driver={driver} setPage={setPage} />}
      {page === "history" && <History />}
    </>
  );
}