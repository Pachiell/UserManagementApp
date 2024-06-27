export default function StandardButton({ text }: { text: string }) {
  return (
    <button
      type="button"
      className="h-full w-full rounded-lg border-2 border-[#223A70] bg-white px-2 text-xl text-[#223A70]"
    >
      {text}
    </button>
  );
}
