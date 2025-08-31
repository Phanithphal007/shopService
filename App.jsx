import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Container from './Container';
import Slice from './Slice';
import New from './page/New';

const App = () => {
  const [showContainer, setShowContainer] = useState(true);

  return (
    <div>
      <Slice setShowContainer={setShowContainer} />
      
      {/* Conditionally show Container */}
      {showContainer && <Container />}
      
      <Routes>

        <Route path='/new' element={<New setShowContainer={setShowContainer} />} /> 
      </Routes>
    </div>
  );
};

export default App;