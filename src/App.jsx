// App.js
import React, { useState } from 'react';
import QRCode from 'qrcode.react';

function App() {
  const [text, setText] = useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleClearClick = () => {
    setText('');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-8">QR Code Generator</h1>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Enter text or URL"
          value={text}
          onChange={handleInputChange}
          className="w-64 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2"
        />
        <button
          onClick={handleClearClick}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
        >
          Clear
        </button>
      </div>
      <div className="mt-4">{text && <QRCode value={text} />}</div>
    </div>
  );
}

export default App;
