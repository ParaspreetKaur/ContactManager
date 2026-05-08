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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone } = formData;

    if (!name || !email || !phone) {
      return alert("All fields are required!");
    }

    addContact(formData);
    navigate("/");
  };

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="card shadow p-4 w-100" style={{ maxWidth: "500px" }}>
        
        <h2 className="text-center mb-4">Add Contact</h2>

        <form onSubmit={handleSubmit}>
          
          <div className="mb-3">
            <label className="form-label">Name</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter full name"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              className="form-control"
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Phone</label>

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Add Contact
          </button>

        </form>
      </div>
    </div>
  );
}

export default AddContact;


