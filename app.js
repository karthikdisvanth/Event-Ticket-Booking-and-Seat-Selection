 import React, { useState } from "react";
 import "./App.css";
 function App() {
 const rows = ["A", "B", "C", "D"];
 const cols = 8;
 const pricePerSeat = 120;
 // Simulate booked seats
 const [bookedSeats] = useState(["A1", "B3", "C5"]);
 const [selectedSeats, setSelectedSeats] = useState([]);
 const toggleSeat = (seatId) => {
 if (bookedSeats.includes(seatId)) return; // cannot select booked
 setSelectedSeats((prev) =>
 prev.includes(seatId)
 ? prev.filter((s) => s !== seatId)
 : [...prev, seatId]
 );
 };
 return (
<div className="App">
 <header className="App-header">
 <h1> OnlineTicket Booking</h1>
 </header>
 <div className="screen">SCREEN</div>
 <div className="seat-container">
 {rows.map((row) =>
 Array.from({ length: cols }).map((_, i) => {
 const seatId = `${row}${i + 1}`;
 const isSelected = selectedSeats.includes(seatId);
 const isBooked = bookedSeats.includes(seatId);
 return (
 <div
 key={seatId}
 className={`seat ${
 isBooked ? "booked" : isSelected ? "selected" : ""
 }`}
 onClick={() => toggleSeat(seatId)}
 >
 {seatId}
 </div>
 );
 })
 )}
 </div>
 <div className="info">
 <p>Selected Seats: {selectedSeats.join(", ") | "None"}</p>
 <p>Total Price: ₹{selectedSeats.length * pricePerSeat}</p>
 </div>
 <div className="legend">
 <div className="legend-item">
 <div className="seat selected"></div> Selected
 </div>
 <div className="legend-item">
 <div className="seat booked"></div> Booked
 </div>
 <div className="legend-item">
 <div className="seat"></div> Available
</div>
 </div>
 </div>
 );
 }
 export default App;
