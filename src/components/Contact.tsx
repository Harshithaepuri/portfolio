// src/components/Contact.jsx
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_89z8oe6",
        "template_u6mxv6n",
               {
          name: form.name,      // ✅ matches {{name}}
          reply_to: form.email, // ✅ matches {{reply_to}}
          title: form.title,    // ✅ matches {{title}} (used in subject)
          message: form.message // ✅ matches {{message}} (add this to template body)
        },

        "7OQiA4OinVNlt1FQy"
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
        },
        () => {
          setStatus("❌ Something went wrong. Try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Contact Me
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Have a question or want to work together? Fill out the form below.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto mt-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
      >
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-3 mb-4 border rounded-xl focus:outline-none focus:ring focus:ring-indigo-400"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-3 mb-4 border rounded-xl focus:outline-none focus:ring focus:ring-indigo-400"
          required
        />
        
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="5"
          className="w-full p-3 mb-4 border rounded-xl focus:outline-none focus:ring focus:ring-indigo-400"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition"
        >
          Send Message
        </button>

        {status && (
          <p className="mt-4 text-center text-gray-700 dark:text-gray-300">
            {status}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
