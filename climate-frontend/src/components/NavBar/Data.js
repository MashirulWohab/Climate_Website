import React, { useState } from 'react';
// import useFetch from '../useFetch';

export function Data() {
  // State variables for three inputs
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  // const { data: cont, isPending, error } = useFetch("http://localhost:5000");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an object with all three inputs
    const postData = {
      name: input1,
      description: input2,
      price: input3,
    };

    try {
      const response = await fetch("http://localhost:5000/items/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode : 'cors',
        body: JSON.stringify(postData), // Send all inputs as JSON
      }).then(console.log("posted!")).then(console.log(postData));

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input field 1 */}
      <input
        type="text"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
        placeholder="Enter first value"
      />
      {/* Input field 2 */}
      <input
        type="text"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
        placeholder="Enter second value"
      />
      {/* Input field 3 */}
      <input
        type="text"
        value={input3}
        onChange={(e) => setInput3(e.target.value)}
        placeholder="Enter third value"
      />
      <button type="submit">Send Data</button>
    </form>
  );
}

export default Data;
