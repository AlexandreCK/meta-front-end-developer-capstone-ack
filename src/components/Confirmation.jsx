import React from 'react';

const Confirmation = ({ reservationData, onClose }) => {
  console.log('Confirmation data:', reservationData);

  return (
    <div className="bg-customGreen p-8 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-customYellow font-markazi text-center">Reservation Confirmed!</h2>
      <p className="text-white mb-4 font-karla">Thank you for your reservation. Here are the details:</p>
      <ul className="text-white font-karla">
        <li><strong>Date:</strong> {reservationData.date}</li>
        <li><strong>Time:</strong> {reservationData.time}</li>
        <li><strong>Seating:</strong> {reservationData.seating}</li>
        <li><strong>Number of Diners:</strong> {reservationData.diners}</li>
        <li><strong>Comments:</strong> {reservationData.comments}</li>
        <li><strong>Email:</strong> {reservationData.email}</li>
      </ul>
      <button
        onClick={onClose}
        className="mt-4 w-full bg-customYellow text-black py-2 rounded-lg font-bold hover:bg-yellow-400 transition duration-300 font-karla"
      >
        Close
      </button>
    </div>
  );
};

export default Confirmation;



