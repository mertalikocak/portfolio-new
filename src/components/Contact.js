import React from "react";

function Contact() {
  return (
    <div className="max-w-xl  mx-auto py-8 pt-8  " id="contact">
      <h2 className="text-2xl text-black md:text-4xl font-bold text-center mb-8">
        Contact Me 📧
      </h2>
      <form
        action="https://getform.io/f/a73bf925-551b-4f49-bda5-33c5af44a6fd"
        method="POST"
        className="flex flex-col gap-4 border p-8 bg-white rounded-xl shadow-xl  "
      >
        <label htmlFor="name" className="flex flex-col text-lg">
          Name:
          <input
            type="text"
            name="name"
            id="price"
            className="block w-full h-8 rounded-md border-gray-300 pl-2 pr-12 focus:border-indigo-500 border focus:ring-indigo-500 sm:text-sm"
          />
          <div class="absolute inset-y-0 right-0 flex items-center" />
        </label>
        <label htmlFor="name" className="flex flex-col text-lg">
          Email:
          <input
            type="text"
            name="email"
            id="price"
            className="block w-full h-8 rounded-md border-gray-300 pl-2 pr-4 focus:border-indigo-500  border focus:ring-indigo-500 sm:text-sm"
          />
        </label>
        <label htmlFor="name" className="flex flex-col text-lg">
          Message:
          <textarea
            name="message"
            id="price"
            className="block w-full h-32 rounded-md border-gray-300 pl-2 pr-4 pt-1.5  focus:border-indigo-500 border focus:ring-indigo-500 sm:text-sm"
          />
        </label>
        <button
          type="submit"
          className="border rounded-full bg-gray-900 text-white py-2 w-1/3 text-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
