export default function Input({ textarea, label, ...props }) {
  textarea = textarea || false;
  return (
    <p>
      <label>{label}</label>
      {textarea ? <textarea {...props} /> : <input {...props} />}
    </p>
  );
}
