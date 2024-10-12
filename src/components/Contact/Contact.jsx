import { FaPhone, FaUser, FaRegTrashCan } from "react-icons/fa6";  
import { deleteContact } from "../../redux/contactsOps.js";  
import { useDispatch } from "react-redux";  
import s from "./Contact.module.css";
import { useState } from "react";  

function Contact({ contact }) { 
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false); 

  const handleDelete = () => {
    setShowModal(true);
  };
  const confirmDelete = () => {
    dispatch(deleteContact(contact.id));
    setShowModal(false);
  };

  const cancelDelete = () => {
    setShowModal(false);
  };
  return (  
    <li className={s.list}>  
      <div className={s.contdiv}>  
        <p>  
          <FaUser className={s.icon} />  
          {contact.name}  
        </p>  
        <p>  
          <FaPhone className={s.icon} />  
          {contact.number}  
        </p>  
      </div>  

      <button  
        className={s.buttonlist}  
        onClick={handleDelete}>
        <FaRegTrashCan />
      </button>  
    </li>  
  );  
}  

export default Contact;