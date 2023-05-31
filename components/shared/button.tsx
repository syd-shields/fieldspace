
interface ButtonProps {
  text: string;
  onClick: () => void;
  type?: "primary" | "secondary";
}

export default function Button({
  text,
  onClick,
  type = "primary",
}: ButtonProps) {
  return (
    <>
      {type === "primary" && (
        <button
          className="text-dark-grey rounded-full border border-dark-gray bg-white p-1.5 px-4 text-sm transition-all hover:bg-white hover:text-black"
          onClick={() => onClick()}
        >
          {text}
        </button>
      )}
      {type === "secondary" && (
        <button
          className="rounded-full border border-dark-gray bg-dark-gray p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
          onClick={() => onClick()}
        >
          {text}
        </button>
      )}
    </>
  );
}
