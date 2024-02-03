function Icon({ onClick, kind, css }) {
  return (
    <button onClick={onClick} className={`${css} ${kind === "previous" ? "rotate-180" : ""}`}>
      <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m2 1 8 8-8 8"
          stroke="#1D2026"
          strokeWidth="3"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
    </button>
  );
}

export default Icon;
