import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
 // Import the syntax highlighter
 import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
  // Import 'docco' style correctly
import './Fetch.css';

const Fetch = () => {
  const [data, setData] = useState(null);

  // Fetch data from the API
  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const jsonData = await response.json();
      setData(JSON.stringify(jsonData, null, 2));  // Format the data for display
    } catch (error) {
      console.error('Error fetching data:', error);
      setData('Error fetching data');
    }
  };

  return (
    <div className="fetch-section">
      <div className="heading">
        <h1>Try it</h1>
      </div>
      <div className="paragraph">
        <p>Run this code here, in a console or from any site:</p>
      </div>
      <div className="fetch">
        <SyntaxHighlighter language="javascript" style={docco}>
          {`fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json));`}
        </SyntaxHighlighter>
      </div>
      <div className="run-btn">
        <button onClick={fetchData}>Run Script</button>
      </div>
      <div className="data">
        {/* Render the fetched data with syntax highlighting */}
        <SyntaxHighlighter language="json" style={docco}>
          {data || '{}'}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Fetch;
