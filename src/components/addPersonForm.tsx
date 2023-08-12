// src/components/AddPersonForm.tsx
import React, { useState } from 'react';
import Person from '../api/Person';

const AddPersonForm: React.FC = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phonenumber, setPhonenumber] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newPerson = new Person(0,firstname, lastname, phonenumber);
    await Person.create(newPerson);
    setFirstname('');
    setLastname('');
    setPhonenumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
      </label>
      <label>
        Last Name:
        <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} />
      </label>
      <label>
        Phone Number:
        <input type="text" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)} />
      </label>
      <button type="submit">Add Person</button>
    </form>
  );
};

export default AddPersonForm;
