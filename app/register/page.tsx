"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function RegisterPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [agreed, setAgreed] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    if (!agreed) {
      alert("You must accept the agreement");
      return;
    }

    await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(form),
    });

    alert("Account created successfully");
  };

  return (
    <div style={styles.page}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={styles.card}
      >
        <h1 style={styles.title}>Create your CashPay account</h1>
        <p style={styles.subtitle}>
          Secure fintech onboarding experience
        </p>

        <div style={styles.form}>
          <Input
            name="fullName"
            placeholder="Full name"
            onChange={handleChange}
          />

          <Input
            name="email"
            placeholder="Email address"
            onChange={handleChange}
          />

          <Input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <label style={styles.checkbox}>
            <input
              type="checkbox"
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <span>
              I agree that CashPay is used at my own financial risk
            </span>
          </label>

          <Button onClick={submit}>
            Create account
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

const styles: any = {
  page: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#0A0F1C",
  },
  card: {
    width: 420,
    padding: 28,
    borderRadius: 16,
    background: "#111827",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  title: {
    color: "white",
    fontSize: 22,
    marginBottom: 6,
  },
  subtitle: {
    color: "#9CA3AF",
    fontSize: 13,
    marginBottom: 20,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  checkbox: {
    display: "flex",
    gap: 8,
    fontSize: 12,
    color: "#9CA3AF",
    marginTop: 6,
    marginBottom: 6,
  },
};
