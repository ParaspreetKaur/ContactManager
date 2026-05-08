import { useParams, Link } from "react-router-dom";

function ViewContact({ contacts }) {
  const { id } = useParams();

  const contact = contacts.find((c) => c._id === id);

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
        
        <h2 className="text-center mb-4">
          Contact Details
        </h2>

        <div className="mb-3">
          <strong>Name:</strong>
          <p className="mb-0">{contact.name}</p>
        </div>

        <div className="mb-3">
          <strong>Email:</strong>
          <p className="mb-0">{contact.email}</p>
        </div>

        <div className="mb-4">
          <strong>Phone:</strong>
          <p className="mb-0">{contact.phone}</p>
        </div>

        <div className="d-flex justify-content-between">
          
          <Link
            to={`/edit/${id}`}
            className="btn btn-warning"
          >
            Edit
          </Link>

          <Link
            to="/"
            className="btn btn-secondary"
          >
            Back
          </Link>

        </div>

      </div>
    </div>
  );
}

export default ViewContact;
