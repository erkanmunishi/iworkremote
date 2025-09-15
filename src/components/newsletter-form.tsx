"use client";
import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");

  return (
    <form
      id="subscribe"
      className="flex gap-2 justify-center"
      action="#"
      method="post"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Subscribed (we'll wire Beehiiv soon).");
      }}
    >
      <input
        required
        type="email"
        name="email"
        placeholder="Enter your email"
        className="max-w-sm w-full border rounded-lg px-3 py-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" className="border rounded-lg px-4">
        Join the list
      </button>
    </form>
  );
}
