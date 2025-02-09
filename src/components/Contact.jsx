import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Alert, AlertDescription } from './ui/alert';
import { Loader2 } from 'lucide-react';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitted(true);
    setIsLoading(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center animate-fadeIn">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Me</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Have a project in mind? Feel free to reach out and let’s build something amazing!
        </p>

        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
            <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
            <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required />
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</> : 'Send Message'}
            </Button>
            {submitted && (
              <Alert className="mt-4">
                <AlertDescription>Thanks for reaching out! I’ll get back to you soon.</AlertDescription>
              </Alert>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
