import React, { useState } from 'react';

const Reservation = () => {
  const [formData, setFormData] = useState({
    seating: '',
    comments: '',
    email: '',
    date: '',
    time: '',
    diners: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Reservation submitted:', formData);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-customGreen font-markazi text-center">Reserve a Table</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div>
          <label className="block text-gray-700 font-semibold mb-2 font-karla">Seating Options</label>
          <select
            name="seating"
            value={formData.seating}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-700 font-karla"
            required
          >
            <option value="" disabled>Select seating option</option>
            <option value="indoor">Indoors</option>
            <option value="outdoor">Outdoors</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2 font-karla">Additional Comments</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-700 font-karla"
            placeholder="Any special requests?"
            rows="4"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2 font-karla">Confirmation Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-700 font-karla"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2 font-karla">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-700 font-karla"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2 font-karla">Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-700 font-karla"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2 font-karla">Number of Diners</label>
          <input
            type="number"
            name="diners"
            value={formData.diners}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-700 font-karla"
            placeholder="Enter number of diners"
            required
            min="1"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-customYellow text-black py-2 rounded-lg font-bold hover:bg-yellow-400 transition duration-300 font-karla"
        >
          Confirm Reservation
        </button>
      </form>
    </div>
  );
};

export default Reservation;
