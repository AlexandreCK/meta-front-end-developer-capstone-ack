import React from 'react';

const Confirmation = ({ reservationData, onClose }) => {
  console.log('Confirmation data:', reservationData);

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl max-w-md mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6 text-customGreen font-markazi text-center">
        Reservation Confirmed!
      </h2>
      <p className="text-gray-700 mb-6 font-karla text-center">
        Thank you for your reservation. Here are the details:
      </p>
      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
        <ul className="space-y-4 text-gray-800 font-karla">
          <li className="flex justify-between"><span className="font-semibold text-customGreen">Date:</span> {reservationData.date}</li>
          <li className="flex justify-between"><span className="font-semibold text-customGreen">Time:</span> {reservationData.time}</li>
          <li className="flex justify-between"><span className="font-semibold text-customGreen">Seating:</span> {reservationData.seating}</li>
          <li className="flex justify-between"><span className="font-semibold text-customGreen">Number of Diners:</span> {reservationData.diners}</li>
          <li className="flex justify-between"><span className="font-semibold text-customGreen">Comments:</span> {reservationData.comments}</li>
          <li className="flex justify-between"><span className="font-semibold text-customGreen">Email:</span> {reservationData.email}</li>
        </ul>
      </div>
      <button
        onClick={onClose}
        className="mt-6 w-full bg-customYellow text-black py-2 rounded-lg font-bold hover:bg-yellow-500 transition duration-300 font-karla"
      >
        Close
      </button>
    </div>
  );
};

export default Confirmation;