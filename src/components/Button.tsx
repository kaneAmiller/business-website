type ButtonProps = {
    text: string;
    onClick?: () => void;
    className?: string;
  };
  
  export default function Button({ text, onClick, className }: ButtonProps) {
    return (
      <button onClick={onClick} className={`btn ${className}`}>
        {text}
      </button>
    );
  }
  