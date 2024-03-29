function Icon({ onClick }) {
  return (
    <svg
      onClick={onClick}
      className="cursor-pointer"
      fill="none"
      height="15"
      viewBox="0 0 16 15"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M0 0H16V3H0V0ZM0 6H16V9H0V6ZM16 12H0V15H16V12Z"
        fill="#69707D"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default Icon;
