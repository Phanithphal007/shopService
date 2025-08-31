import React, { useEffect } from 'react';

const New = ({ setShowContainer }) => {
  useEffect(() => {
    setShowContainer(true);
  }, [setShowContainer]);

  return (
    <div className="mt-[80px] p-8">
      <h1 className="text-3xl font-bold">New Products</h1>
      <p className="mt-4">Check out our latest products!</p>
    </div>
  );
};

export default New;