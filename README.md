# Site Alexandre Chassagne — ImmoSens

Site immobilier local construit avec Next.js (App Router), TypeScript et CSS natif léger.

## Lancer

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:3000

## À personnaliser avant mise en ligne

- Remplacer `https://example.com` dans `app/layout.tsx`, `app/robots.ts` et `app/sitemap.ts` par le vrai domaine.
- Ajouter la vraie photo d'Alexandre dans `public/images/` et remplacer les placeholders.
- Ajouter téléphone/e-mail réels.
- Remplacer les recherches acquéreurs par des recherches réelles.
- Connecter `LeadForm` à un service d'envoi ou à une API/CRM.
- Ajouter le logo officiel ImmoSens si nécessaire.

## Principes

- Server Components par défaut.
- Client Components uniquement pour le menu mobile et le formulaire.
- Peu de dépendances.
- Pas de données inventées.
- SEO local structuré par intention de recherche.
- Pas d'estimation automatique : le formulaire sert à déclencher l'échange puis la visite.
