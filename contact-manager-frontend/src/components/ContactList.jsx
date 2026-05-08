import { Link } from "react-router-dom";

function ContactList({ contacts, deleteContact }) {
  return (
    <div className="container mt-4">
      
      <h2 className="text-center mb-4">All Contacts</h2>

      {contacts.length === 0 ? (
        <div className="alert alert-info text-center">
          No contacts found. Add one!
        </div>
      ) : (
        <div className="row">
          
          {contacts.map((contact) => (
            <div key={contact._id} className="col-md-6 col-lg-4 mb-4">
              
              <div className="card shadow h-100">
                
                <div className="card-body">
                  
                  <h4 className="card-title">
                    {contact.name}
                  </h4>

                  <p className="card-text mb-2">
                    <strong>Email:</strong> {contact.email}
                  </p>

                  <p className="card-text">
                    <strong>Phone:</strong> {contact.phone}
                  </p>

                </div>

                <div className="card-footer bg-white border-0 d-flex justify-content-between">
                  
                  <Link
                    to={`/view/${contact._id}`}
                    className="btn btn-info btn-sm"
                  >
                    View
                  </Link>

                  <Link
                    to={`/edit/${contact._id}`}
                    className="btn btn-warning btn-sm"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => deleteContact(contact._id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>

                </div>
              </div>
            </div>
          ))}

        </div>
      )}
    </div>
  );
}

export default ContactList;








