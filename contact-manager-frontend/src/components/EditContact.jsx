import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditContact({ contacts, updateContact }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const contact = contacts.find((c) => c._id === id);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateContact(id, formData);
    navigate("/");
  };

  if (!contact) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger text-center">
          Contact not found
        </div>
      </div>
    );
  }

  return (
    <div className="container d-flex justify-content-center mt-5">
      
      <div className="card shadow p-4 w-100" style={{ maxWidth: "500px" }}>
        
        <h2 className="text-center mb-4">Edit Contact</h2>

        <form onSubmit={handleSubmit}>
          
          <div className="mb-3">
            <label className="form-label">Name</label>

            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Phone</label>

            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-warning w-100">
            Update Contact
          </button>

        </form>
      </div>
    </div>
  );
}

export default EditContact;