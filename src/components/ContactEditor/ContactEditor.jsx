import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useFormik } from 'formik';

import { add } from 'redux/contactsSlice';

import {
  FormContainer,
  InputWrapper,
  FieldWrapper,
} from 'components/ContactEditor/ContactEditor.styled';
import { Button } from 'components/common.styled';

 const validate = values => {
   const errors = {};
   if (!values.name) {
     errors.name = 'Required';
   } else if (!/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i.test(values.name)) {
     errors.name = 'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d\'Artagnan';
   }

   if (!values.number) {
     errors.number = 'Required';
   } else if (
     !/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i.test(values.number)
   ) {
     errors.number =
       'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +';
   }

   return errors;
 };

const ContactEditor = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isPrivate, setIsPrivate] = useState(true);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
      isPrivate: true,
    },
    validate,
    validateOnChange: false,
    validateOnBlur: false, 
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <form
      // initialValues={{ name, number, isPrivate }}
      // onSubmit={() => {
      //   dispatch(add({ name: name.trim(), number: number.trim(), isPrivate }));
      //   setName('');
      //   setNumber('');
      //   setIsPrivate(true);
      // }}
      onSubmit={formik.handleSubmit}
      // validateOnBlur={false}
      // validateOnChange={false}
    >
      {/* <FormContainer> */}
      <label>
        Name
        <input
          type="text"
          name="name"
          // value={name}
          // onChange={e => {
          //   setName(e.target.value);
          // }}
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          // required
        />
      </label>
      {formik.touched.name && formik.errors.name
        ? // (
          //   <div>{formik.errors.name}</div>)
          // Notify.failure(formik.errors.name)
                console.log(formik.errors)

        : null}

      <label>
        Phone number
        <input
          type="tel"
          name="number"
          // value={number}
          // onChange={e => {
          //   setNumber(e.target.value);
          // }}
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          // required
          onChange={formik.handleChange}
          value={formik.values.number}
        />
      </label>

      <label>
        Private contact
        <input
          type="checkbox"
          name="isPrivate"
          // checked={isPrivate}
          // onChange={() => {
          //   setIsPrivate(state => !state);
          // }}
          onChange={formik.handleChange}
          checked={formik.values.isPrivate}
        />
      </label>

      <Button type="submit">Add contact</Button>
      {/* </FormContainer> */}
    </form>
  );
};

export default ContactEditor;
