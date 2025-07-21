import React, { useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState();

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "21a4acca-bfb7-4726-a3bf-77f1c21d845d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setResult("Sent Succesfully ✅");
    }
  };

  return (
    <div className="md:max-w-[50%] w-full p-10 flex items-center justify-center">
      <form
        onSubmit={onSubmit}
        className=" bg-white p-5 flex flex-col self-center rounded-md w-full max-w-[500px] shadow-md border border-gray-200 space-y-4"
      >
        <h2 className="font-roboto text-lg mb-2">Contact Us</h2>
        <div>
          <label className="float-left mb-2 text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Your Name"
            name="name"
            required
          />
        </div>
        <div className="mt-4">
          <label className="float-left mb-2 text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Your Email"
            name="email"
            required
          />
        </div>
        <div className="mt-4">
          <label className="float-left mb-2 text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md"
            rows="4"
            placeholder="Your Message"
            name="message"
            required
          ></textarea>
        </div>
        <span>{result}</span>
        <button
          type="submit"
          className="bg-black text-white px-3 py-1 rounded-md transition duration-200 active:scale-100 hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
