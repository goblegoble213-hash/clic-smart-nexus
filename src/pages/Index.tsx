import { useState } from "react";
import { Dashboard } from "@/components/Dashboard";
import Login from "@/components/Login";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userPersona, setUserPersona] = useState("");

  const handleLogin = (persona: string) => {
    setUserPersona(persona);
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return <Dashboard />;
};

export default Index;
