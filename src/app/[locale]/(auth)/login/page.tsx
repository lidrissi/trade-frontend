"use client";

import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function LoginPage(): React.ReactElement {
  const t = useTranslations("Auth");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setError("");

    const res = await signIn("credentials", {
      email: "superadmin@massarates.ma",
      password: "Fdgx9!kQ",
      redirect: false, // prevent automatic redirect
    });

    if (res?.error) {
      setError("Invalid credentials");
    } else {
      window.location.href = "/"; // redirect manually
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-80 space-y-4 rounded bg-white p-6 shadow-md"
      >
        <h1 className="text-xl font-bold">Login</h1>
        <input
          placeholder={t("Email")}
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          className="w-full rounded border p-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          className="w-full rounded border p-2"
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
        <button
          type="submit"
          className="w-full rounded bg-blue-500 p-2 text-white"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
