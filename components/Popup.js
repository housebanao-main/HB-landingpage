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
    if (formData.name.trim().length < 3) {
      setErrorMessage("Name must contain at least 3 characters.");
      return false;
    }

    if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      setErrorMessage("Name must contain only alphabets and spaces.");
      return false;
    }

    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      setErrorMessage("Phone number must be exactly 10 digits.");
      return false;
    }

    setErrorMessage("");
    return true;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) {
      // Allow only alphabets and spaces for name
      return;
    }

    if (name === "phoneNumber" && !/^\d*$/.test(value)) {
      // Allow only numbers for phoneNumber
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await axios.post("http://localhost:4000/submit", formData);
      if (response.status === 200) {
        setSuccessMessage("Your estimate request has been submitted successfully!");
        setFormData({ name: "", phoneNumber: "", plotLocation: "" });
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
      <div className="max-w-lg mx-auto py-8 px-6 space-y-6 bg-white rounded-lg relative shadow-xl">
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
                name={field.name}
                className="bg-transparent w-full placeholder-gray-500 px-4 outline-none text-gray-700"
                placeholder={field.placeholder}
                type={field.type}
                value={field.value}
                onChange={handleInputChange}
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
