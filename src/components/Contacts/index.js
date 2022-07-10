import { useState, useEffect } from "react";

import "./styles.css";

import Form from "./Form";
import List from "./List";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Sinan Ulusan",
      phone_number: "5513332046",
    },
    {
      fullname: "Öznur Eren",
      phone_number: "5554023728",
    },
    {
      fullname: "Enis Aksoy",
      phone_number: "5526729153",
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
