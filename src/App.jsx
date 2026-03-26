import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import Clock from "./Clock";

function App() {
  const [theme, setTheme] = useState("light");
  const [greeting, setGreeting] = useState("");

  // Load theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  // Apply theme
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Greeting logic
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning ☀️");
    else if (hour < 18) setGreeting("Good Afternoon 🌤️");
    else setGreeting("Good Evening 🌙");
  }, []);

  const today = new Date().toDateString();

  return (
    <div className="container">
      <h1>Smart Dashboard</h1>

      <div className="card">
        <h2>{greeting}</h2>
        <p>{today}</p>
        <Clock />
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </div>
    </div>
  );
}

export default App;