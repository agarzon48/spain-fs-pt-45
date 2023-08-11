export default function Buttons({ text, color }) {
  return (
    <button type="button" className={`rounded btn btn-${color}`}>
      {text}
    </button>
  );
}
