import React, { useEffect, useState } from 'react';
import { getGreeting } from './api';

const App = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const fetchGreeting = async () => {
      const message = await getGreeting();
      setGreeting(message);
    };
    fetchGreeting();
  }, []);

  return (
      <div>
        <h1>{greeting}</h1>
      </div>
  );
};

export default App;

