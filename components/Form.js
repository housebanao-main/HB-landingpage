import React, { useState } from "react";
import { IoMdContact } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import axios from "axios";

const RightForm = () => {
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
    setSuccessMessage("");
    setErrorMessage("");

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

  return (
    <div className="basis-full md:basis-1/2 flex flex-col items-center justify-center h-1000 mb-40 p-6 pb-40">
      <div
        id="container"
        className="max-w-2xl mx-auto pb-[3vw] pt-[2vw] space-y-6 backdrop-blur-sm bg-white bg-opacity-20 rounded-b-full overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0))",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="flex flex-col items-center justify-center gap-6">
          <h1 className="text-center mt-60 text-xl sm:text-2xl font-semibold text-white drop-shadow-md">
            Get your cost estimate for free
          </h1>
          <div className="w-[80%] space-y-4">
            {[
              {
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
              <div key={index} className="border border-white rounded-full flex items-center p-2">
                <span className="pl-2">{field.icon}</span>
                <input
                  name={field.name}
                  className="bg-transparent w-full placeholder-white p-2 outline-none text-white"
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
              className="bg-[#2A27E8] text-white w-[80%] py-2 rounded-md shadow-lg hover:opacity-90 transition"
            >
              {loading ? "Submitting..." : "Get your cost estimate"}
            </button>
            <a
              href="https://api.whatsapp.com/send?phone=9810432124"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white w-[80%] py-2 flex items-center justify-center rounded-md shadow-lg hover:opacity-90 transition gap-2"
            >
              <img src="/service/whatsapp-logo.png" alt="WhatsApp Logo" className="w-5 h-5" />
              Chat with WhatsApp
            </a>
          </div>
          {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}
          {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
          <p className="w-[80%] text-center mx-auto relative text-sm text-white opacity-80">
            By submitting this form, you agree to the privacy policy and terms of use.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightForm;
