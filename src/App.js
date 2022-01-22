import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const profile = useSelector((state) => state.test);
  const changeName = useDispatch();

  return (
    <div className="container mx-auto text-center">
      <h1>{profile.name}</h1>
      <h2>{profile.firstName}</h2>
      <hr />
      <button onClick={() => changeName({ name: 'Ohm', type: 'test' })}>
        Change Name
      </button>
    </div>
  );
};

export default App;
