import { useState } from "react";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";

export default function Home() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="container mt-5">
      
      <div className="row justify-content-center">
        
        <div className="col-md-8 col-lg-6">
          
          <div className="card shadow p-4">
            
            <h1 className="text-center mb-4">
              Contact Manager
            </h1>

            <ContactForm
              onAdded={() => setRefresh(!refresh)}
            />

            {/* force re-render ContactList */}
            <div className="mt-4">
              <ContactList key={refresh} />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}