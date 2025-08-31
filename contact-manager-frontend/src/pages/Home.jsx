import { useState } from "react";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";

export default function Home() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Contact Manager</h1>
      <ContactForm onAdded={() => setRefresh(!refresh)} />
      {/* trick: force re-render ContactList */}
      <ContactList key={refresh} />
    </div>
  );
}
