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
        <div className="bg-customGreen p-8 rounded-lg shadow-lg max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-customYellow font-markazi text-center">
            Reserve a Table
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-white font-semibold mb-2 font-karla">
                Seating Options
              </label>
              <select
                name="seating"
                value={formData.seating}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-700 font-karla"
                required
              >
                <option value="" disabled>
                  Select seating option
                </option>
                <option value="indoor">Indoors</option>
                <option value="outdoor">Outdoors</option>
              </select>
            </div>

            <div>
              <label className="block text-white font-semibold mb-2 font-karla">
                Additional Comments
              </label>
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
              <label className="block text-white font-semibold mb-2 font-karla">
                Confirmation Email
              </label>
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
              <label className="block text-white font-semibold mb-2 font-karla">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={(e) => {
                  handleChange(e);
                  setFormData((prev) => ({ ...prev, time: "" }));
                }}
                className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-700 font-karla"
                required
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2 font-karla">
                Time
              </label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-700 font-karla"
                disabled={!formData.date}
                required
              >
                <option value="" disabled>
                  Select time
                </option>
                {formData.date &&
                getAvailableTimes(formData.date).length > 0 ? (
                  getAvailableTimes(formData.date).map((time, index) => (
                    <option key={index} value={time}>
                      {time}
                    </option>
                  ))
                ) : (
                  <option value="" disabled>
                    No available times
                  </option>
                )}
              </select>
            </div>

            <div>
              <label className="block text-white font-semibold mb-2 font-karla">
                Number of Diners
              </label>
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
      )}
    </div>
  );
};

export default Reservation;

