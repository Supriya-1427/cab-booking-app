import { useState } from "react";

export default function Signup({ setPage }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    const user = { name, email, password: pass };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup success!");
    setPage("login");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>📝 Signup</h2>

        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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

          <button type="submit">Signup</button>
        </form>

        <p onClick={() => setPage("login")} className="link">
          Already have account? Login
        </p>
      </div>
    </div>
  );
}