import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/card";
import { Alert, AlertDescription } from "../components/ui/alert";
import { Mail, Phone, MapPin, Clock, Loader2 } from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      setMessage("Your message has been sent successfully!");
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <Card className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold text-gray-800">Contact Us</CardTitle>
          <CardDescription className="text-gray-500">
            We'd love to hear from you! Fill out the form below.
          </CardDescription>
        </CardHeader>

        {message && (
          <Alert className="mb-4 bg-green-100 text-green-700 p-3 rounded-md">
            <AlertDescription>{message}</AlertDescription>
          </Alert>
        )}

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-gray-700 font-medium">Your Name</label>
              <Input type="text" placeholder="Enter your name" required />
            </div>

            <div>
              <label className="text-gray-700 font-medium">Email Address</label>
              <Input type="email" placeholder="Enter your email" required />
            </div>

            <div>
              <label className="text-gray-700 font-medium">Message</label>
              <Textarea rows="4" placeholder="Enter your message" required />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex justify-center items-center"
              disabled={loading}
            >
              {loading ? <Loader2 className="animate-spin w-5 h-5 mr-2" /> : "Send Message"}
            </button>
          </form>
        </CardContent>

        {/* Contact Info */}
        <div className="mt-6 text-center text-gray-600">
          <p className="flex items-center justify-center gap-2">
            <Mail className="w-5 h-5 text-blue-600" /> contact@example.com
          </p>
          <p className="flex items-center justify-center gap-2">
            <Phone className="w-5 h-5 text-blue-600" /> +1 234 567 890
          </p>
          <p className="flex items-center justify-center gap-2">
            <MapPin className="w-5 h-5 text-blue-600" /> 123 Street, City, Country
          </p>
          <p className="flex items-center justify-center gap-2">
            <Clock className="w-5 h-5 text-blue-600" /> Mon-Fri: 9am - 5pm
          </p>
        </div>
      </Card>
    </div>
  );
};

export default ContactPage;
