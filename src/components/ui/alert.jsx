const Alert = ({ children, className }) => (
    <div className={`p-4 border-l-4 rounded-md ${className}`}>{children}</div>
  );
  
  const AlertDescription = ({ children }) => <p>{children}</p>;
  
  export { Alert, AlertDescription };
  