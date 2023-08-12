// src/api/Person.ts
import axios from 'axios';

export default class Person {
  static BASE_URL = 'http://localhost:3000/persons'; // Replace with your actual REST API URL
  
  personid:number;
  firstname: string;
  lastname: string;
  phonenumber: string;

  constructor(personid:number, firstname: string, lastname: string, phonenumber: string) {
    this.personid=personid
    this.firstname = firstname;
    this.lastname = lastname;
    this.phonenumber = phonenumber;
  }

  static async create(person: Person): Promise<Person> {
    const response = await axios.post(`${Person.BASE_URL}/people`, person);
    return response.data as Person;
  }

  static async readAll(): Promise<Person[]> {
    const response = await axios.get(`${Person.BASE_URL}/people`);
    return response.data as Person[];
  }

  static async update(person: Person): Promise<Person> {
    const response = await axios.put(`${Person.BASE_URL}/people/${person.personid}`, person);
    return response.data as Person;
  }

  static async delete(id: number): Promise<void> {
    await axios.delete(`${Person.BASE_URL}/people/${id}`);
  }
}
