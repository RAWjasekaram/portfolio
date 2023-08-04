import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="bg-gray-800 py-10">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-yellow-700">Contact</h2>
        <p className="text-white">
          If you would like to get in touch, feel free to reach out to me using
          the form below or through my email address:
          Rishna.Rajasekaram@gmail.com
        </p>
        {/* Add a contact form or contact details here */}
      </div>
    </section>
  );
};

export default Contact;