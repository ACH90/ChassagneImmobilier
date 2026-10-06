export function SearchCard({ title, info }: { title: string; info: string }) {
  return (
    <div className="search-card lift">
      <strong>{title}</strong>
      <span>{info}</span>
      <small>Recherche à compléter</small>
    </div>
  );
}
