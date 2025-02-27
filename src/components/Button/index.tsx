interface ButtonProps {
    text: string;
    disabled?: boolean;
    onClick?: () => void;
  }

function Button ({text, onClick, disabled}: ButtonProps) {
  return (
    <button className="bg-primari-500 text-white py-2 px-4 rounded-lg" onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}

export default Button;