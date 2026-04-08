import { useState } from "react";

export default function Login({ setPage }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please signup first!");
      return;
    }

    if (email !== user.email || pass !== user.password) {
      alert("Invalid email or password");
      return;
    }

    alert("Login success!");
    setPage("home");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>🔐 Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>

        <p onClick={() => setPage("signup")} className="link">
          Create Account
        </p>
      </div>
    </div>
  );
}