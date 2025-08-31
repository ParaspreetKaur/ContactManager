import { Link } from "react-router-dom";

function ContactList({ contacts, deleteContact }) {
  return (
    <div className="list-container">
      <h2>All Contacts</h2>
      {contacts.length === 0 ? (
        <p>No contacts found. Add one!</p>
      ) : (
        <ul className="contact-list">
          {contacts.map((contact) => (
            <li key={contact._id} className="contact-card">
              <div>
                <h3>{contact.name}</h3>
                <p>Email: {contact.email}</p>
                <p>Phone: {contact.phone}</p>
              </div>
              <div className="actions">
                <Link to={`/view/${contact._id}`} className="btn">View</Link>
                <Link to={`/edit/${contact._id}`} className="btn">Edit</Link>
                <button onClick={() => deleteContact(contact._id)} className="btn delete">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ContactList;









