import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import EditContact from "./components/EditContact";
import ViewContact from "./components/ViewContact";
import "./App.css";
import Footer from "./components/Footer";

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
      const res = await axios.post("http://localhost:4000/api/contacts", contact);
      setContacts([...contacts, res.data]);
    } catch (err) {
      console.error(err);
    }
  };

  const updateContact = async (id, updatedContact) => {
    try {
      const res = await axios.put(`http://localhost:4000/api/contacts/${id}`, updatedContact);
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
        <nav className="navbar">
          <h2 className="logo">Contact Manager</h2>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add">Add Contact</Link></li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route
              path="/"
              element={<ContactList contacts={contacts} deleteContact={deleteContact} />}
            />
            <Route
              path="/add"
              element={<AddContact addContact={addContact} />}
            />
            <Route
              path="/edit/:id"
              element={<EditContact contacts={contacts} updateContact={updateContact} />}
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
