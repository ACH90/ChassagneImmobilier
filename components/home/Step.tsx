export function Step({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="card lift">
      <b>{n}</b>

      <h3 className="serif">{title}</h3>

      <p>{children}</p>
    </article>
  );
}
