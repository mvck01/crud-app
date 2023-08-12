// src/App.tsx
import React from 'react';
//import AddPersonForm from './components/addPersonForm';
import PersonList from './components/personList';

const App: React.FC = () => {
  return (
    <div>
      <h1>CRUD App</h1>
      {/* <!--<AddPersonForm />--> */}
      <PersonList />
    </div>
  );
};

export default App;
