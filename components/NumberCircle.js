export default function NumberCircle({ number }) {
  return (
    <div className="bg-blue-100 rounded-full w-6 h-6 flex justify-center items-center">
      <span className="text-sm">{number}</span>
    </div>
  );
}
