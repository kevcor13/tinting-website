"use client";
import React, { useState } from 'react'; // Import useState for the ContactForm

// ContactForm Component
const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState(''); // 'success', 'submitting', 'error'

  // Corrected TypeScript type for event object
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus('submitting');

    // --- REAL SUBMISSION TO GOOGLE APPS SCRIPT ---
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzVh32lxP3cUk_MsgrRtgsyt-a3wKWOpBOQ35bmNYyrVWjF8IQgwZUQiRwQdMkaoB0/exec"; // Your actual deployed Apps Script URL

    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone, message }), // Send the form data as JSON
        // IMPORTANT: 'no-cors' mode is often required for Google Apps Script Web Apps
        // This means you won't be able to read the response from the script,
        // but the data will still be sent.
        mode: 'no-cors',
      });

      // When using 'no-cors', response.ok will always be true, and response.type will be 'opaque'.
      // We rely on the fetch call completing without a network error to assume success.
      // You should check your Google Sheet and Apps Script execution logs for confirmation.
      setSubmissionStatus('success');
      setName('');
      setPhone('');
      setMessage('');
      console.log("Form data sent successfully to Google Sheet (check sheet/Apps Script logs for confirmation):", { name, phone, message });

    } catch (error) {
      setSubmissionStatus('error');
      console.error("Network error during submission. Data might not have been sent.", error);
    }
    // Removed the simulated delay and success status update to avoid overriding actual fetch result.
  };

  return (
    <div className="max-w-md mx-auto p-6 rounded-lg shadow-md mb-8">
      <p className="text-sm text-white mb-6 text-center">
        Feel free to reach out with any inquiries or feedback.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white mb-1">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-white mb-1">Phone Number:</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full px-3 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white mb-1">Your Message/Question:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full px-3 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={submissionStatus === 'submitting'}
          className={`w-full py-2 px-4 rounded-md text-white font-semibold transition duration-300 ease-in-out
            ${submissionStatus === 'submitting'
              ? 'bg-blue-300 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
            }`}
        >
          {submissionStatus === 'submitting' ? 'Submitting...' : 'Send Message'}
        </button>
      </form>

      {submissionStatus === 'success' && (
        <p className="mt-4 text-center text-green-600">Thank you for your message!</p>
      )}
      {submissionStatus === 'error' && (
        <p className="mt-4 text-center text-red-600">There was an error submitting your message. Please try again later. Check console for details.</p>
      )}
    </div>
  );
};

export default ContactForm;