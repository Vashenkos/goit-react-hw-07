import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Занадто мало знаків!")
    .max(50, "Перестарався!")
    .required("Заповни Обов`язково"),
  number: Yup.string()
    .min(3, "Занадто мало знаків!")
    .max(50, "Перестарався!")
    .required("Заповни Обов`язково"), 
});

const initialValues = {
  name: "",
  number: "",
};
function ContactForm() {
  const dispatch = useDispatch();

  const nameFieldId = nanoid(); 
  const numberFieldId = nanoid(); 

  const handleSubmit = (values, actions) => {
    const newContact = { id: nanoid(), ...values };
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
  <div className={s.container}>
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={s.form}>
       
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            className={s.input}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage
            className={s.error}
            name="name"
            component="span"
          />
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            className={s.input}
            type="number"
            name="number"
            id={numberFieldId}
          />
          <ErrorMessage
            className={s.error}
            name="number"
            component="span"
          />
        

        <button className={s.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
    </div>
  );
}

export default ContactForm;