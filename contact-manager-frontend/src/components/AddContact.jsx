import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddContact({ addContact }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone } = formData;
    if (!name || !email || !phone) return alert("All fields are required!");
    addContact(formData);
    navigate("/");
  };

  return (
    <div className="form-container">
      <h2>Add Contact</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter full name"
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email address"
        />

        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter phone number"
        />

        <button type="submit" className="btn submit">
          Add Contact
        </button>
      </form>
    </div>
  );
}

export default AddContact;


