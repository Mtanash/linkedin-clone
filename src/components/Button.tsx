interface IButton {
  label: string;
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
}

const LoadingSpan = () => (
  <span className="w-[30px] h-[30px] border-[3px] border-white border-r-transparent rounded-full animate-spin"></span>
);

const Button = ({
  label,
  disabled = false,
  loading = false,
  type = "button",
  className,
  onClick,
}: IButton) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
      className={`h-[48px] bg-linkedin-blue hover:enabled:bg-linkedin-blue-hvr text-lg font-semibold text-white py-1 px-5 rounded-full flex items-center justify-center disabled:cursor-not-allowed disabled:text-gray-400 ${className}`}
    >
      {loading ? <LoadingSpan /> : label}
    </button>
  );
};

export default Button;
