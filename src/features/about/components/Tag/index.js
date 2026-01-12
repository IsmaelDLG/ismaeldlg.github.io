export default function Tag({ text }) {
  return (
    <span className="inline-block bg-gray-700 text-gray-100 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
      {text}
    </span>
  );
}