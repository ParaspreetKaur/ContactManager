import { useParams, Link } from "react-router-dom";

function ViewContact({ contacts }) {
  const { id } = useParams();
  const contact = contacts.find((c) => c._id === id);

  if (!contact) return <h2>Contact not found</h2>;

  return (
    <div className="view-container">
      <h2>Contact Details</h2>
      <p><strong>Name:</strong> {contact.name}</p>
      <p><strong>Email:</strong> {contact.email}</p>
      <p><strong>Phone:</strong> {contact.phone}</p>

      <Link to={`/edit/${id}`} className="btn">Edit</Link>
      <Link to="/" className="btn">Back</Link>
    </div>
  );
}

export default ViewContact;
