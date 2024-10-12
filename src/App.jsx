import ContactForm from "./components/ContactForm/ContactForm";  
import SearchBox from "./components/SearchBox/SearchBox";  
import ContactList from "./components/ContactList/ContactList";  
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
inport { useEffect } from "react"; 


function App() {  
const dispatch = useDispatch();
const isLoading = useSelector((state) => state.contacts.isLoading);
const error = useSelector ((state) =>state.contacts.error);

 

  useEffect(() => {
    dispatch(fetchContacts());  
  }, [dispatch]);  

  return (  
    <div className="container">  
      <h1 className="title">Phonebook</h1>  
      <ContactForm />  
      <SearchBox />
      {isLoading && !error &&(

      )}

     { !isLoading && !error&&<ContactList/> }
    </div>  
  );  
}  

export default App;