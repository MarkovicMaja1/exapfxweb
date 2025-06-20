import React, { useEffect, useState } from "react";

const Contact = () => {
  // Scroll to top when the tab becomes active or on initial mount
  useEffect(() => {
    // Scroll to top on initial mount
    window.scrollTo(0, 0);

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        window.scrollTo(0, 0);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://www.ecapfx.com/api/send-email", { // Update to your deployed URL
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setStatus(`Failed to send message: ${result.error || "Please try again."}`);
      }
    } catch (error) {
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <section
      className="bg-gradient-to-br from-blue-900 via-blue-800 to-green-900 dark:from-slate-900 dark:via-slate-800 dark:to-green-900 mt-16 relative overflow-hidden"
      id="contact"
    >
      {/* Abstract Shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-64 h-64 bg-green-400 rounded-full -top-32 -left-32 transform rotate-45 blur-xl"></div>
        <div className="absolute w-48 h-48 bg-blue-300 rounded-full top-1/4 right-1/4 transform -rotate-15 blur-xl"></div>
        <div className="absolute w-72 h-72 bg-white rounded-full bottom-1/3 left-1/4 transform rotate-30 blur-xl"></div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 relative z-10">
        <div className="mb-4">
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
              
            </p>
            <h2 className="font-heading mb-4 font-bold tracking-tight text-white-900 dark:text-white text-3xl sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-xl text-white dark:text-slate-300">
              At ECAPFX, we are dedicated to providing top-tier support and guidance to our trading community. Contact us for inquiries, partnership opportunities, or assistance with your trading journey.
            </p>
          </div>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6">
              <p className="mt-3 mb-12 text-lg text-white dark:text-slate-300">
                Our team is committed to ensuring your success in the financial markets. Whether you need help with account management, trading strategies, or general support, we are here to assist you every step of the way.
              </p>
              <ul className="mb-6 md:mb-0">
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-white-900 dark:text-white">
                      Our Address
                    </h3>
                    <p className="text-white dark:text-slate-300">
                      Office 7330MO 182-184, High Street North Area 1/1
                    </p>
                    <p className="text-white dark:text-slate-300">
                      East Ham, London, E6 2JA, UK
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                      <path d="M15 7a2 2 0 0 1 2 2"></path>
                      <path d="M15 3a6 6 0 0 1 6 6"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-white-900 dark:text-white">
                      Contact
                    </h3>
                    <p className="text-white dark:text-slate-300">
                      Phone: +1 (123) 456-7890
                    </p>
                    <p className="text-white dark:text-slate-300">
                      Email: contact@ecapfx.com
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M12 7v5l3 3"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-white-900 dark:text-white">
                      Working Hours
                    </h3>
                    <p className="text-white dark:text-slate-300">
                      Monday - Friday: 08:00 - 17:00 EST
                    </p>
                    <p className="text-white dark:text-slate-300">
                      Saturday & Sunday: 08:00 - 12:00 EST
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
              <h2 className="mb-4 text-2xl font-bold dark:text-white">
                Ready to Get Started?
              </h2>
              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="mb-6">
                  <div className="mx-0 mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 dark:text-gray-400"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="given-name"
                      className="mt-1 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md bg-gray-800 text-white"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="mx-0 mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 dark:text-gray-400"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      className="mt-1 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md bg-gray-800 text-white"
                      placeholder="Your email address"
                      required
                    />
                  </div>
                  <div className="mx-0 mb-4">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 dark:text-gray-400"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      cols="30"
                      rows="5"
                      className="mt-1 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md bg-gray-800 text-white"
                      placeholder="Write your message..."
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#1a6f3d] via-[#1d8348] to-[#145c33] hover:from-[#156437]/90 hover:via-[#1d8348]/90 hover:to-[#0e3f24]/90 hover:text-black hover:shadow-md hover:shadow-green-700/50 px-6 py-2 rounded-lg text-white inline-block transition duration-300 ease-in-out hover:scale-105 active:cursor-pointer select-none"
                  >
                    Send Message
                  </button>
                  {status && <p className="mt-2 text-sm text-gray-300">{status}</p>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;