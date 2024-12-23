import React from "react";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., send data to backend)
    alert("Thank you for contacting us!");
  };

  return (
    <div className="min-h-screen bg-gray-600 py-6 pt-24 flex flex-col justify-center sm:py-12">
      {/* Contact Us Container */}
      <div className="relative py-3 sm:max-w-7xl sm:mx-auto">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        {/* Card Content */}
        <div className="relative px-8 py-12 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">
          <div className="text-white">
            <div className="text-center pb-6">
              <h1 className="text-3xl font-bold">Contact Us!</h1>
              <p className="text-gray-300">
                Feel free to reach out to us using the form or the details below.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Admin Details Section */}
              <div className="bg-indigo-500 p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Admin Details</h2>
                <p className="text-gray-300 mb-4">
                  <strong>Name:</strong> John Doe
                </p>
                <p className="text-gray-300 mb-4">
                  <strong>Email:</strong> admin@example.com
                </p>
                <p className="text-gray-300 mb-4">
                  <strong>Phone:</strong> +1 123 456 7890
                </p>
                <p className="text-gray-300">
                  <strong>Address:</strong> 123 Admin Lane, Cityville, Country
                </p>
              </div>

              {/* Contact Form Section */}
              <div>
                <form onSubmit={handleSubmit}>
                  <input
                    className="shadow mb-6 appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Name"
                    name="name"
                    required
                  />
                  <input
                    className="shadow mb-6 appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                  />
                  <input
                    className="shadow mb-6 appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Subject"
                    name="_subject"
                  />
                  <textarea
                    className="shadow mb-6 appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Type your message here..."
                    name="message"
                    rows="5"
                    required
                  ></textarea>
                  <div className="flex justify-between">
                    <button
                      type="submit"
                      className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
                    >
                      Send ➤
                    </button>
                    <button
                      type="reset"
                      className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
                    >
                      Reset
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
