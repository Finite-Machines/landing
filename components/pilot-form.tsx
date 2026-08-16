"use client";

import { FormEvent, useState } from "react";
import { Icon } from "./icon";

export function PilotForm() {
  const [message, setMessage] = useState("");
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@finitemachines.com";

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const lab = String(form.get("lab") ?? "").trim();
    const fleet = String(form.get("fleet") ?? "").trim();
    const notes = String(form.get("notes") ?? "").trim();

    const subject = encodeURIComponent(`Pilot request — ${lab || name}`);
    const body = encodeURIComponent([
      `Name: ${name}`,
      `Email: ${email}`,
      `Organization / lab: ${lab}`,
      `Approximate fleet size: ${fleet || "Not provided"}`,
      "",
      "What they would like to understand:",
      notes || "Not provided",
    ].join("\n"));

    setMessage(`Opening a prepared email to ${contactEmail}…`);
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="pilot-form" onSubmit={submit}>
      <div className="form-row">
        <label>Name<input name="name" type="text" autoComplete="name" placeholder="Your name" required /></label>
        <label>Work email<input name="email" type="email" autoComplete="email" placeholder="you@organization.edu" required /></label>
      </div>
      <div className="form-row">
        <label>Organization or lab<input name="lab" type="text" autoComplete="organization" placeholder="Engineering Fabrication Lab" required /></label>
        <label>Approximate fleet size<input name="fleet" type="text" inputMode="numeric" placeholder="20–100 machines" /></label>
      </div>
      <label>What would you like to understand?<textarea name="notes" rows={3} placeholder="Utilization, downtime, maintenance, reporting…" /></label>
      <button className="button" type="submit">Start a conversation <Icon name="arrow" size={17} /></button>
      <p className="form-note" aria-live="polite">{message || "No mailing list. Just a focused conversation about your lab."}</p>
    </form>
  );
}
