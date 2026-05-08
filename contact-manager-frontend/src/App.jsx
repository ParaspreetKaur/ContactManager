import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import EditContact from "./components/EditContact";
import ViewContact from "./components/ViewContact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);

  // Fetch contacts from backend
  const fetchContacts = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/contacts");
      setContacts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const addContact = async (contact) => {
    try {
      const res = await axios.post(
        "http://localhost:4000/api/contacts",
        contact
      );
      setContacts([...contacts, res.data]);
    } catch (err) {
      console.error(err);
    }
  };

  const updateContact = async (id, updatedContact) => {
    try {
      const res = await axios.put(
        `http://localhost:4000/api/contacts/${id}`,
        updatedContact
      );
      setContacts(contacts.map((c) => (c._id === id ? res.data : c)));
    } catch (err) {
      console.error(err);
    }
  };

  const deleteContact = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/contacts/${id}`);
      setContacts(contacts.filter((c) => c._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Router>
      <div className="App">
        
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
          <div className="container-fluid">
            <Link className="navbar-brand fw-bold" to="/">
              Contact Manager
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/add">
                    Add Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="container mt-4 mb-5">
          <Routes>
            <Route
              path="/"
              element={
                <ContactList
                  contacts={contacts}
                  deleteContact={deleteContact}
                />
              }
            />

            <Route
              path="/add"
              element={<AddContact addContact={addContact} />}
            />

            <Route
              path="/edit/:id"
              element={
                <EditContact
                  contacts={contacts}
                  updateContact={updateContact}
                />
              }
            />

            <Route
              path="/view/:id"
              element={<ViewContact contacts={contacts} />}
            />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
