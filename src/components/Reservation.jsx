import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import Confirmation from "./Confirmation";

const Reservation = () => {
  const [formData, setFormData] = useState({
    seating: "",
    comments: "",
    email: "",
    date: "",
    time: "",
    diners: "",
  });

  const [reservedTimes, setReservedTimes] = useState({
    "2024-09-02": ["16:00"],
  });

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmationData, setConfirmationData] = useState(null);

  useEffect(() => {}, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { date, time } = formData;
    if (date && time && reservedTimes[date]?.includes(time)) {
      toast.error("Selected time is not available. Please choose a different time.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    if (date && time) {
      setReservedTimes((prev) => ({
        ...prev,
        [date]: [...(prev[date] || []), time],
      }));
    }

    setConfirmationData(formData);
    setShowConfirmation(true);

    console.log("Reservation submitted:", formData);

    setFormData({
      seating: "",
      comments: "",
      email: "",
      date: "",
      time: "",
      diners: "",
    });
  };

  const getAvailableTimes = (date) => {
    const possibleTimes = [
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
    ];
    const reserved = reservedTimes[date] || [];
    return possibleTimes.filter((time) => !reserved.includes(time));
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
  };

  return (
<div>
  {showConfirmation ? (
    <Confirmation
      reservationData={confirmationData}
      onClose={handleCloseConfirmation}
    />
  ) : (
    <div className="bg-white p-8 rounded-lg shadow-xl max-w-md mx-auto">
      <h2 className="text-3xl font-extrabold mb-6 text-customGreen font-montserrat text-center" id="reservation-header">
        Reserve a Table
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6" aria-labelledby="reservation-header">
        <div>
          <label htmlFor="seating" className="block text-gray-800 font-semibold mb-2 font-roboto">
            Seating Options
          </label>
          <select
            id="seating"
            name="seating"
            value={formData.seating}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 font-roboto"
            required
            aria-required="true"
          >
            <option value="" disabled>Select seating option</option>
            <option value="indoor">Indoors</option>
            <option value="outdoor">Outdoors</option>
          </select>
        </div>

        <div>
          <label htmlFor="comments" className="block text-gray-800 font-semibold mb-2 font-roboto">
            Additional Comments
          </label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 font-roboto"
            placeholder="Any special requests?"
            rows="4"
            aria-describedby="comments-desc"
          />
          <p id="comments-desc" className="sr-only">Provide any additional comments or special requests here.</p>
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-800 font-semibold mb-2 font-roboto">
            Confirmation Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 font-roboto"
            placeholder="Enter your email"
            required
            aria-required="true"
            aria-describedby="email-desc"
          />
          <p id="email-desc" className="sr-only">Enter a valid email address to receive confirmation.</p>
        </div>

        <div>
          <label htmlFor="date" className="block text-gray-800 font-semibold mb-2 font-roboto">
            Date
          </label>
          <input
            id="date"
            type="date"
            name="date"
            value={formData.date}
            onChange={(e) => {
              handleChange(e);
              setFormData((prev) => ({ ...prev, time: "" }));
            }}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 font-roboto"
            required
            aria-required="true"
          />
        </div>

        <div>
          <label htmlFor="time" className="block text-gray-800 font-semibold mb-2 font-roboto">
            Time
          </label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 font-roboto"
            disabled={!formData.date}
            required
            aria-required="true"
            aria-describedby="time-desc"
          >
            <option value="" disabled>Select time</option>
            {formData.date && getAvailableTimes(formData.date).length > 0 ? (
              getAvailableTimes(formData.date).map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))
            ) : (
              <option value="" disabled>No available times</option>
            )}
          </select>
          <p id="time-desc" className="sr-only">Select a time slot for your reservation.</p>
        </div>

        <div>
          <label htmlFor="diners" className="block text-gray-800 font-semibold mb-2 font-roboto">
            Number of Diners
          </label>
          <input
            id="diners"
            type="number"
            name="diners"
            value={formData.diners}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 font-roboto"
            placeholder="Enter number of diners"
            required
            min="1"
            aria-required="true"
            aria-describedby="diners-desc"
          />
          <p id="diners-desc" className="sr-only">Enter the number of diners. Must be at least 1.</p>
        </div>

        <button
          type="submit"
          className="w-full bg-customYellow text-black py-3 rounded-lg font-bold hover:bg-yellow-500 transition duration-300 font-roboto"
        >
          Confirm Reservation
        </button>
      </form>
    </div>
  )}
</div>

  );
};

export default Reservation;