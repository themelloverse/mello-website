const Card = ({ children, className }) => (
    <div className={`border p-6 rounded-lg shadow-md bg-white ${className}`}>{children}</div>
  );
  
  const CardHeader = ({ children }) => <div className="mb-4">{children}</div>;
  const CardTitle = ({ children }) => <h2 className="text-xl font-semibold">{children}</h2>;
  const CardDescription = ({ children }) => <p className="text-gray-500">{children}</p>;
  const CardContent = ({ children }) => <div>{children}</div>;
  
  export { Card, CardHeader, CardTitle, CardDescription, CardContent };
  