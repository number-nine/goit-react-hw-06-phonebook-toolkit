import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { add } from 'redux/contactsSlice';

import {
  FormContainer,
  InputWrapper,
  FieldWrapper,
} from 'components/ContactEditor/ContactEditor.styled';
import { Button } from 'components/common.styled';

const ContactEditor = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isPrivate, setIsPrivate] = useState(true);
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name, number, isPrivate }}
      onSubmit={() => {
        dispatch(add({ name: name.trim(), number: number.trim(), isPrivate }));
        setName('');
        setNumber('');
        setIsPrivate(true);
      }}
      validateOnBlur={false}
      validateOnChange={false}
    >
      <FormContainer>
        <InputWrapper>
          Name
          <FieldWrapper
            type="text"
            name="name"
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </InputWrapper>

        <InputWrapper>
          Phone number
          <FieldWrapper
            type="tel"
            name="number"
            value={number}
            onChange={e => {
              setNumber(e.target.value);
            }}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </InputWrapper>

        <label>
          Private contact
          <input
            type="checkbox"
            checked={isPrivate}
            onChange={() => {
              setIsPrivate(state => !state);
            }}
          />
        </label>

        <Button type="submit">Add contact</Button>
      </FormContainer>
    </Formik>
  );
};

export default ContactEditor;
