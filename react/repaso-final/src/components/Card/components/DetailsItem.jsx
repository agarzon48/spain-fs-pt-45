export default function DetailsItem({ title, detail }) {
    if (!detail) return null;
    
  return (
    <p>
      <strong>{title}</strong>
      {detail}
    </p>
  );
}