import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditContact({ contacts, updateContact }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const contact = contacts.find((c) => c._id === id);

  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    if (contact) {
      setFormData({
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
      });
    }
  }, [contact]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateContact(id, formData);
    navigate("/");
  };

  if (!contact) return <h2>Contact not found</h2>;

  return (
    <div className="form-container">
      <h2>Edit Contact</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <button type="submit">Update Contact</button>
      </form>
    </div>
  );
}

export default EditContact;
