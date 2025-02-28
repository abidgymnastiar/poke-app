interface ButtonProps {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
}

function Button({ text, onClick, disabled }: ButtonProps) {
  return (
    <button
      className={`py-2 px-4 rounded-lg text-white transition-all duration-300 
        ${disabled ? "bg-gray-400 cursor-not-allowed" : "bg-red-500 hover:bg-primary-600"}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
