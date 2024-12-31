// Popup Component
import React, { useEffect, useState } from "react";
import { usePopup } from "../context/PopupContext";
import { IoMdContact } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import axios from "axios";

const Popup = () => {
  const { isPopupVisible, closePopup } = usePopup();
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    plotLocation: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = () => {
    const nameRegex = /^[a-zA-Z\s]{3,}$/; // At least 3 characters, only alphabets and spaces
    const phoneRegex = /^[0-9]{10}$/; // Exactly 10 digits
    const locationRegex = /^[a-zA-Z0-9\s,.-]+$/; // Valid address characters

    if (!nameRegex.test(formData.name)) {
      alert("Name must contain only alphabets and spaces (at least 3 characters).");
      return false;
    }

    if (!phoneRegex.test(formData.phoneNumber)) {
      alert("Phone number must be exactly 10 digits.");
      return false;
    }

    if (!locationRegex.test(formData.plotLocation)) {
      alert("Plot location contains invalid characters.");
      return false;
    }

    return true;
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 10) {
      setFormData({ ...formData, phoneNumber: value });
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await axios.post("/api/send-email", formData);
      if (response.status === 200) {
        setSuccessMessage("Your estimate request has been submitted successfully!");
        setFormData({ name: "", phoneNumber: "", plotLocation: "" }); // Reset form
      }
    } catch (error) {
      setErrorMessage(
        error.response?.data?.error || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isPopupVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isPopupVisible]);

  if (!isPopupVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="max-w-2xl mx-auto py-10 px-6 space-y-8 bg-white rounded-lg relative shadow-lg">
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 text-gray-700 text-xl font-bold"
          aria-label="Close popup"
        >
          X
        </button>

        <h1 className="text-center text-2xl font-bold text-gray-800">
          Get your cost estimate for free
        </h1>

        <div className="w-full space-y-4">
          {[{
              name: "name",
              placeholder: "Name",
              value: formData.name,
              type: "text",
              icon: <IoMdContact />,
            },
            {
              name: "phoneNumber",
              placeholder: "Phone number",
              value: formData.phoneNumber,
              type: "tel",
              icon: (
                <img
                  src="/service/flag.png"
                  alt="India Flag"
                  className="w-6 h-4 object-cover rounded"
                />
              ),
              onChange: handlePhoneNumberChange,
            },
            {
              name: "plotLocation",
              placeholder: "Plot location",
              value: formData.plotLocation,
              type: "text",
              icon: <MdLocationOn />,
            },
          ].map((field, index) => (
            <div key={index} className="border border-gray-300 rounded-full flex items-center p-3">
              <span className="pl-3">{field.icon}</span>
              <input
                name={field.name} // Use name to identify the field
                className="bg-transparent w-full placeholder-gray-500 px-4 outline-none text-gray-700"
                placeholder={field.placeholder}
                type={field.type}
                value={field.value}
                onChange={field.onChange || ((e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value }))} // Use name to update
              />
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col items-center gap-4">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-blue-600 text-white w-full py-3 rounded-md shadow-lg hover:opacity-90 transition"
          >
            {loading ? "Submitting..." : "Get your cost estimate"}
          </button>
          <a
            href="https://api.whatsapp.com/send?phone=9810432124"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white w-full py-3 flex items-center justify-center rounded-md shadow-lg hover:opacity-90 transition gap-2"
          >
            <img
              src="/service/whatsapp-logo.png"
              alt="WhatsApp Logo"
              className="w-5 h-5"
            />
            Chat on WhatsApp
          </a>
        </div>

        {successMessage && (
          <p className="text-green-500 text-sm text-center">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="text-red-500 text-sm text-center">{errorMessage}</p>
        )}

        <p className="w-full text-center text-sm text-gray-600 mt-4">
          By submitting this form, you agree to the privacy policy and terms of use.
        </p>
      </div>
    </div>
  );
};

export default Popup;
