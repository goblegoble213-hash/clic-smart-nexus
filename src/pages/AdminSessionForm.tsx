import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminSessionForm() {
  const [form, setForm] = useState({
    date: "",
    title: "",
    instructor: "",
    time: "",
    timezone: "",
    location: "",
    attendees: 0,
    maxAttendees: 0,
    type: "virtual",
    status: "confirmed",
    difficulty: "Beginner"
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const token = localStorage.getItem("adminToken");
      const res = await fetch("http://localhost:4000/api/sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          ...form,
          attendees: Number(form.attendees),
          maxAttendees: Number(form.maxAttendees)
        })
      });
      if (res.ok) {
        setSuccess("Session added successfully!");
        setTimeout(() => navigate("/admin/sessions"), 1000);
      } else {
        const data = await res.json();
        setError(data.message || "Failed to add session");
      }
    } catch {
      setError("Server error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form className="bg-white p-8 rounded shadow-md w-96" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Add Session</h2>
        <input className="border p-2 w-full mb-2" name="date" type="date" value={form.date} onChange={handleChange} required />
        <input className="border p-2 w-full mb-2" name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
        <input className="border p-2 w-full mb-2" name="instructor" placeholder="Instructor" value={form.instructor} onChange={handleChange} required />
        <input className="border p-2 w-full mb-2" name="time" placeholder="Time (e.g. 09:00 - 11:00)" value={form.time} onChange={handleChange} required />
        <input className="border p-2 w-full mb-2" name="timezone" placeholder="Timezone (e.g. IST)" value={form.timezone} onChange={handleChange} required />
        <input className="border p-2 w-full mb-2" name="location" placeholder="Location" value={form.location} onChange={handleChange} required />
        <input className="border p-2 w-full mb-2" name="attendees" type="number" placeholder="Attendees" value={form.attendees} onChange={handleChange} required />
        <input className="border p-2 w-full mb-2" name="maxAttendees" type="number" placeholder="Max Attendees" value={form.maxAttendees} onChange={handleChange} required />
        <select className="border p-2 w-full mb-2" name="type" value={form.type} onChange={handleChange} required>
          <option value="virtual">Virtual</option>
          <option value="in-person">In-Person</option>
          <option value="hybrid">Hybrid</option>
        </select>
        <select className="border p-2 w-full mb-2" name="status" value={form.status} onChange={handleChange} required>
          <option value="confirmed">Confirmed</option>
          <option value="waitlist">Waitlist</option>
        </select>
        <select className="border p-2 w-full mb-2" name="difficulty" value={form.difficulty} onChange={handleChange} required>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
        {error && <div className="text-red-500 mb-2">{error}</div>}
        {success && <div className="text-green-600 mb-2">{success}</div>}
        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full" type="submit">
          Add Session
        </button>
      </form>
    </div>
  );
}
