export const Button = ({ children, className, ...props }) => (
  <button
    className={`py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-transform transform hover:scale-105 ${className}`}
    {...props}
  >
    {children}
  </button>
);
