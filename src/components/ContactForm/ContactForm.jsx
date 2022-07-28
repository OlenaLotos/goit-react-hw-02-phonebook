// import { Component } from "react";

// export class ContactForm extends Component = ({

// }) => {
//   return (
//         <>
//           <form action="">
//           <label htmlFor="">
//             <input
//               type="text"
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//             />
//           </label>
//           <button type="submit"></button>
//         </form>
//   </>
//           );
// };
import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';

const initialValues = {
  name: '',
};

const Input = styled(Field)`
  border-radius: 4px;
  font-size: 24px;
`;

export const ContactForm = () => {
  //   const handleSubmit = event => {
  //     event.PreventDefault();
  //     const { name } = event.target.elements;
  //     console.log(name.value);
  //   };
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);

    resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <label htmlFor="name">
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
