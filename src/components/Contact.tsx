// src/components/ContactForm.tsx

import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div id="contactus" className="container mx-auto px-4 py-10 max-w-4xl ">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center">
        Contact Us
      </h2>
      <div className="grid md:grid-cols-2 gap-10 mt-20">
        {/* Left Content - Contact Details */}
        <div className="space-y-6 text-sm text-center md:text-left">
          <div>
            <h3 className="font-semibold text-base mb-2 text-gray-700">
              Address
            </h3>
            <p className="text-gray-600">
              TUNE
              <br />
              11350 McCormick Rd, EP III, Suite 200,
              <br />
              Hunt Valley, MD 21031
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-2 text-gray-700">
              Email
            </h3>
            <p>
              <a
                href="mailto:support@tune.com"
                className="text-blue-600 underline"
              >
                support@tune.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-2 text-gray-700">
              Phone
            </h3>
            <p className="text-gray-600">+918800818156</p>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-2 text-gray-700">
              WhatsApp
            </h3>
            <p>
              <a
                href="https://wa.me/+918800818156" // ← Replace with your actual WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 underline"
              >
                +918800818156
              </a>
            </p>
          </div>
        </div>

        {/* Right Form */}
        <form className="space-y-4">
          <input
            className="border p-2 rounded w-full"
            type="text"
            placeholder="Name"
            required
          />
          <input
            className="border p-2 rounded w-full"
            type="email"
            placeholder="Email"
            required
          />
          <input
            className="border p-2 rounded w-full"
            type="tel"
            placeholder="Phone"
            required
          />
          <textarea
            className="border p-2 rounded w-full"
            placeholder="Your Message"
            rows={3}
            required
          ></textarea>

          <button
            type="submit"
            className="bg-yellow-600 text-white py-2 px-6 rounded-full hover:bg-yellow-700"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
