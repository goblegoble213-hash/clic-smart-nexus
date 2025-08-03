import { useState } from "react";
import { Dashboard } from "@/components/Dashboard";
import Login from "@/components/Login";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userPersona, setUserPersona] = useState("");
  const navigate = useNavigate();

  const handleLogin = (persona: string) => {
    setUserPersona(persona);
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
      <>
        <Login onLogin={handleLogin} />
        <div className="flex justify-center mt-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() => navigate("/admin/login")}
          >
            Admin Login
          </button>
        </div>
      </>
    );
  }

  return <Dashboard />;
};

export default Index;
