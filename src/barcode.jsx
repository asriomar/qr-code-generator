import React, { useState } from 'react';
import JsBarcode from 'jsbarcode';

function BarcodeGenerator() {
  const [barcodeData, setBarcodeData] = useState('');
  const [barcodeImage, setBarcodeImage] = useState('');

  const generateBarcode = () => {
    try {
      JsBarcode('#barcode', barcodeData, {
        format: 'CODE128',
        displayValue: true,
      });
      const barcodeDataURL = document
        .getElementById('barcode')
        .toDataURL('image/png');
      setBarcodeImage(barcodeDataURL);
    } catch (error) {
      console.error('Error generating barcode:', error);
    }
  };

  const clearBarcode = () => {
    setBarcodeData('');
    setBarcodeImage('');
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        value={barcodeData}
        onChange={(e) => setBarcodeData(e.target.value)}
        placeholder="Enter data for barcode"
        className="w-64 py-2 px-4 border border-gray-300 rounded mr-2"
      />
      <button
        onClick={generateBarcode}
        className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Generate Barcode
      </button>
      <button
        onClick={clearBarcode}
        className="py-2 px-4 bg-red-500 text-white rounded ml-2"
      >
        Clear
      </button>
      {barcodeImage && (
        <div className="mt-4">
          <img src={barcodeImage} alt="Barcode" id="barcode" />
        </div>
      )}
    </div>
  );
}

export default BarcodeGenerator;
