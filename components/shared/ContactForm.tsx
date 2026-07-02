"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { PrimaryButton } from "@/components/ui/Button";
import { contactoContent } from "@/content/pages";

const inputClasses =
  "w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-neutral-800 placeholder:text-neutral-400 transition-colors focus:border-primary-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300";

/**
 * Formulario de contacto. No está conectado a un backend todavía —
 * simula el envío y muestra confirmación, listo para conectarse a un
 * endpoint (API route, email service, etc.) en una fase posterior.
 */
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { fields } = contactoContent.form;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-border bg-white p-10 text-center shadow-soft">
        <CheckCircle2 className="h-10 w-10 text-success-500" strokeWidth={1.5} />
        <h3 className="mt-4 text-lg font-semibold text-neutral-900">
          ¡Gracias por escribirnos!
        </h3>
        <p className="mt-2 text-sm text-neutral-500">
          Recibimos tu mensaje. Un asesor se pondrá en contacto contigo pronto.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-border bg-white p-8 shadow-soft"
    >
      <h3 className="text-lg font-semibold text-neutral-900">{contactoContent.form.title}</h3>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-neutral-700">
            {fields.name}
          </label>
          <input id="name" name="name" type="text" required className={inputClasses} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-neutral-700">
            {fields.email}
          </label>
          <input id="email" name="email" type="email" required className={inputClasses} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-neutral-700">
            {fields.phone}
          </label>
          <input id="phone" name="phone" type="tel" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="profile" className="mb-1.5 block text-sm font-medium text-neutral-700">
            {fields.profile}
          </label>
          <select id="profile" name="profile" className={inputClasses}>
            {fields.profileOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-neutral-700">
          {fields.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className={inputClasses}
        />
      </div>

      <PrimaryButton type="submit" className="w-full sm:w-auto">
        {fields.submit}
      </PrimaryButton>
    </form>
  );
}
