import React, { useEffect, useState } from 'react';

import axios from 'axios';

 

interface Person {

  personid: number;

  firstname: string;

  lastname: string;

  phonenumber: string;

}

 

const PersonList: React.FC = () => {

  const [people, setPeople] = useState<Person[]>([]);

  const [firstname, setfirstname] = useState('');

  const [lastname, setlastname] = useState('');

  const [phonenumber, setphonenumber] = useState('');

 

  const fetchPeople = async () => {

    try {

      const response = await axios.get('http://localhost:3000/Persons');
      console.log(response.data)

      setPeople(response.data);

    } catch (error) {

      console.error('Error fetching people:', error);

    }

  };

 

  const createPerson = async () => {

    try {

      await axios.post('http://localhost:3000/Persons', {

        firstname,

        lastname,

        phonenumber,

      });

      fetchPeople();

      clearForm();

    } catch (error) {

      console.error('Error creating person:', error);

    }

  };

 

  const deletePerson = async (id: number) => {

    try {

      await axios.delete(`http://localhost:3000/Persons/${id}`);

      fetchPeople();

    } catch (error) {

      console.error('Error deleting person:', error);

    }

  };

 

  const clearForm = () => {

    setfirstname('');

    setlastname('');

    setphonenumber('');

  };

 

  useEffect(() => {

    fetchPeople();

  }, []);

 

  return (

    <div>

      <h2>People List</h2>

      <ul>

        {people.map((person) => (

          <li key={person.personid}>

            {person.firstname} {person.lastname} - {person.phonenumber}

            <button onClick={() => deletePerson(person.personid)}>Delete</button>

          </li>

        ))}

      </ul>

      <h2>Create Person</h2>

      <div>

        <input

          type="text"

          placeholder="First Name"

          value={firstname}

          onChange={(e) => setfirstname(e.target.value)}

        />

        <input

          type="text"

          placeholder="Last Name"

          value={lastname}

          onChange={(e) => setlastname(e.target.value)}

        />

        <input

          type="text"

          placeholder="Phone Number"

          value={phonenumber}

          onChange={(e) => setphonenumber(e.target.value)}

        />

        <button onClick={createPerson}>Create</button>

      </div>

    </div>

  );

};

 

export default PersonList;