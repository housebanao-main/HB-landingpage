import React, { useState } from "react";
import { IoMdContact } from "react-icons/io";
import { MdLocationOn } from "react-icons/md"; // Location icon
import axios from "axios"; // Install axios using `npm install axios`

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
    const nameRegex = /^[a-zA-Z\s]{3,}$/; // Only alphabets and spaces, at least 3 characters
    const phoneRegex = /^[0-9]{10}$/; // Exactly 10 digits
    const locationRegex = /^[a-zA-Z0-9\s,.-]+$/; // Valid address characters

    if (!nameRegex.test(formData.name)) {
      setErrorMessage("Name must contain only alphabets and spaces (at least 3 characters).");
      return false;
    }

    if (!phoneRegex.test(formData.phoneNumber)) {
      setErrorMessage("Phone number must be exactly 10 digits.");
      return false;
    }

    if (!locationRegex.test(formData.plotLocation)) {
      setErrorMessage("Plot location contains invalid characters.");
      return false;
    }

    setErrorMessage("");
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
    setSuccessMessage("");
    setErrorMessage("");

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

  return (
    <div className="basis-full md:basis-1/2 flex flex-col items-center justify-center  mb-8  ">
      <div
        id="container"
        className=" mx-auto pb-[3vw] pt-[2vw] space-y-6 backdrop-blur-sm bg-white bg-opacity-20 rounded-b-full overflow-hidden "
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0))",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="flex max-w-2xl flex-col items-center justify-center gap-6 p-2">
          <h1 className="text-center lg:mt-24
            text-xl sm:text-2xl font-semibold text-white drop-shadow-md">
            Get your cost estimate for free
          </h1>
          <div className=" sm:w-[80%] space-y-4">
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
              <div key={index} className="border border-white rounded-full flex items-center p-2">
                <span className="pl-2">{field.icon}</span>
                <input
                  name={field.name} // Use name to identify the field
                  className="bg-transparent w-full placeholder-white p-2 outline-none text-white"
                  placeholder={field.placeholder}
                  type={field.type}
                  value={field.value}
                  onChange={field.onChange || ((e) =>
                    setFormData({ ...formData, [e.target.name]: e.target.value })) }// Use name to update
                />
              </div>
            ))}
          </div>
          <div className="w-full flex flex-col items-center gap-4 ">
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
          <p className="w-[50%] sm:w-[60%] text-center mx-auto relative text-[12px] sm:text-sm text-white opacity-80">
            By submitting this form, you agree to the privacy policy and terms of use.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightForm;
