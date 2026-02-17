import { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import StatusPanel from "./components/StatusPanel";

const App = () => {
  const [user, setUser] = useState({
    name: "Shaik Fayaz",
    role: "Frontend Developer",
    status: "Offline",
  });

  const toggleStatus = () => {
    setUser((prev) => ({
      ...prev,
      status: prev.status === "Online" ? "Offline" : "Online",
    }));
  };

  return (
    <div className="container">
      <h1>Profile Dashboard</h1>

      <ProfileCard
        name={user.name}
        role={user.role}
      />

      <StatusPanel
        status={user.status}
        onToggle={toggleStatus}
      />
    </div>
  );
};

export default App;
