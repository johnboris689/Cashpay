"use client";

import { useState } from "react";
import { setUser, getUser } from "@/lib/user";

export default function SettingsPage() {
  const current = getUser();

  const [name, setName] = useState(current.fullName);
  const [email, setEmail] = useState(current.email);

  const save = () => {
    setUser({
      fullName: name,
      email: email,
    });

    alert("Settings updated successfully");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>⚙️ Settings</h1>

      <h2>Update Profile</h2>

      <input
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <button onClick={save}>Save Changes</button>
    </div>
  );
}
