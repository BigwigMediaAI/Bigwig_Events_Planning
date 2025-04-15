// src/pages/PrivacyPolicy.tsx

import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container mx-auto px-4 py-10 max-w-4xl">
        {/* Header Row with Back Button and Title */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate("/")}
            className="text-sm bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded"
          >
            Back to Home
          </button>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center flex-1">
            Privacy Policy
          </h1>
        </div>

        <div className="space-y-6 text-gray-700 text-sm leading-relaxed">
          <p>
            At <strong>Bigwig Events</strong>, your privacy is important to us.
            This Privacy Policy outlines how we collect, use, and protect your
            personal information when you interact with our website, services,
            or contact us directly.
          </p>

          <h2 className="text-xl font-semibold mt-6">
            1. Information We Collect
          </h2>
          <p>
            We may collect personal information that you voluntarily provide to
            us, including your name, email address, phone number, and event
            details when you fill out a form, contact us, or engage our
            services.
          </p>

          <h2 className="text-xl font-semibold mt-6">
            2. How We Use Your Information
          </h2>
          <p>Your information may be used to:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Respond to your inquiries and provide customer support</li>
            <li>Plan and coordinate your event services</li>
            <li>Send updates or promotional offers (only if you opt in)</li>
            <li>Improve our website and services</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6">
            3. Sharing of Information
          </h2>
          <p>
            We do not sell or rent your personal information. We may share it
            with trusted vendors or service providers only when necessary to
            fulfill your event requirements, and only under strict
            confidentiality agreements.
          </p>

          <h2 className="text-xl font-semibold mt-6">4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal data from unauthorized access, loss, or
            misuse.
          </p>

          <h2 className="text-xl font-semibold mt-6">5. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal
            information. To do so, please contact us at{" "}
            <a
              href="mailto:privacy@bigwigevents.com"
              className="text-blue-600 underline"
            >
              privacy@bigwigevents.com
            </a>
            .
          </p>

          <h2 className="text-xl font-semibold mt-6">6. Cookies</h2>
          <p>
            Our website may use cookies to enhance your browsing experience. You
            can disable cookies in your browser settings at any time.
          </p>

          <h2 className="text-xl font-semibold mt-6">7. Third-Party Links</h2>
          <p>
            Our website may contain links to external sites. We are not
            responsible for the privacy practices or content of those sites.
          </p>

          <h2 className="text-xl font-semibold mt-6">
            8. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy periodically. Any changes will be
            posted on this page with a revised effective date.
          </p>

          <h2 className="text-xl font-semibold mt-6">9. Contact Us</h2>
          <p>
            If you have any questions or concerns about our Privacy Policy,
            please contact us at{" "}
            <a
              href="mailto:privacy@bigwigevents.com"
              className="text-blue-600 underline"
            >
              privacy@bigwigevents.com
            </a>
            .
          </p>

          <p className="text-gray-500 text-xs mt-8">
            Last updated: April 15, 2025
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
