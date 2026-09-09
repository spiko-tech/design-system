const CheckMark: React.FC = () => {
  return (
    <div role="status">
      <svg
        className="h-3.5 w-3.5 text-green-500 dark:text-green-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 16 12"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 5.917 5.724 10.5 15 1.5"
        />
      </svg>
      <span className="sr-only">Checkmark...</span>
    </div>
  );
};

export default CheckMark;
