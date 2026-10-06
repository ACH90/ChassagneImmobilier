"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export function LeadForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setError(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      propertyType: formData.get("propertyType"),
      address: formData.get("address"),
      city: formData.get("city"),
      timing: formData.get("timing"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/achassagne@immosens.fr",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...data,
            _subject: "Nouvelle demande d'estimation immobilière",
            _template: "table",
            _replyto: data.email,
          }),
        },
      );

      const result = await response.json();

      console.log("Réponse FormSubmit :", result);

      if (!response.ok || !result.success) {
        throw new Error("Erreur lors de l'envoi du formulaire");
      }

      setSent(true);
    } catch (error) {
      console.error("Erreur formulaire :", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="success">
        <CheckCircle size={36} />

        <h3>Merci pour votre demande.</h3>

        <p>
          Alexandre Chassagne vous recontactera afin d'échanger sur votre projet
          et, si vous le souhaitez, convenir d'un rendez-vous directement sur
          place.
        </p>
      </div>
    );
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Prénom
          <input required name="firstName" />
        </label>

        <label>
          Nom
          <input required name="lastName" />
        </label>
      </div>

      <div className="form-row">
        <label>
          Téléphone
          <input required type="tel" name="phone" />
        </label>

        <label>
          E-mail
          <input required type="email" name="email" />
        </label>
      </div>

      <label>
        Type de bien
        <select required name="propertyType">
          <option value="">Sélectionner</option>
          <option>Maison</option>
          <option>Appartement</option>
          <option>Immeuble</option>
          <option>Terrain</option>
          <option>Autre</option>
        </select>
      </label>

      <div className="form-row">
        <label>
          Adresse du bien
          <input required name="address" />
        </label>

        <label>
          Ville
          <input required defaultValue="Tourcoing" name="city" />
        </label>
      </div>

      <label>
        Votre projet
        <select required name="timing">
          <option value="">Sélectionner</option>
          <option>Prochainement</option>
          <option>Dans les prochains mois</option>
          <option>Dans l'année</option>
          <option>Je souhaite simplement connaître la valeur</option>
          <option>Je ne sais pas encore</option>
        </select>
      </label>

      <label>
        Message <span className="optional">(facultatif)</span>
        <textarea
          name="message"
          rows={4}
          placeholder="Quelques mots sur votre projet..."
        />
      </label>

      {error && (
        <p className="form-error">
          Une erreur est survenue lors de l'envoi. Veuillez réessayer.
        </p>
      )}

      <button className="btn primary" type="submit" disabled={loading}>
        {loading ? (
          "Envoi en cours..."
        ) : (
          <>
            Demander à être contacté <ArrowRight size={18} />
          </>
        )}
      </button>
    </form>
  );
}
