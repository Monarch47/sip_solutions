// components/ContactForm.js
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement your form submission logic here (e.g., API call or email sending).
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-screen-md mx-auto text-black     "
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full px-4 py-2 border rounded-lg "
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg "
          />
        </div>
      </div>
      <div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="w-full px-4 py-2 mt-4 border rounded-lg "
          rows={5}
        />
      </div>
      <div className="mt-4">
        <button
          type="submit"
          className="w-full px-4 py-2 bg-black text-white rounded-lg "
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
