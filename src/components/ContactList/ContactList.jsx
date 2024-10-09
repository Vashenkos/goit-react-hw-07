import Contact from "../Contact/Contact";  
import { useSelector } from "react-redux";  
import { selectContacts } from "../../redux/contactsSlice";  
import { selectNameFilter } from "../../redux/filtersSlice";  
import s from "./ContactList.module.css";  

function ContactList({ onDeleteContact }) {  
  const contacts = useSelector(selectContacts);  
  const filter = useSelector(selectNameFilter);  

  const filteredContacts = contacts.filter((contact) =>  
    contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())  
  );  

  return (  
    <ul className={s.ulcontact}>  
      {filteredContacts.map((contact) => (  
        <Contact  
          key={contact.id}  
          contact={contact}  
          onDeleteContact={onDeleteContact}  
        />  
      ))}  
    </ul>  
  );  
}  

export default ContactList;