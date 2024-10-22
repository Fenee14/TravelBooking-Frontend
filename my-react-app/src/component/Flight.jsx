import React, { useState } from 'react';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import flightsData from './flights.json'; 

export default function FlightList() {
  // Form state to handle user inputs
  const [searchParams, setSearchParams] = useState({
    from: '',
    to: '',
    departureDate: '',
    returnDate: '',
    persons: 1,
  });

  const [flights, setFlights] = useState(flightsData);

  // Handle input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams({
      ...searchParams,
      [name]: value,
    });
  };

  // Filter flights based on the user's search
  const handleSearchFlights = (e) => {
    e.preventDefault();
    const filteredFlights = flightsData.filter((flight) => {
      return (
        (!searchParams.from || flight.origin.toLowerCase().includes(searchParams.from.toLowerCase())) &&
        (!searchParams.to || flight.destination.toLowerCase().includes(searchParams.to.toLowerCase()))
      );
    });
    setFlights(filteredFlights);
  };

  return (
    <div>
      {/* Flight Search Form */}
      <form onSubmit={handleSearchFlights} className="flight-search-form p-6 mb-6 max-w-screen-lg mx-auto bg-blue-300	rounded	">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* From Input */}
          <div>
            <label htmlFor="from" className="block text-sm font-bold  text-black-600	 text-justify">From</label>
            <input
              type="text"
              name="from"
              value={searchParams.from}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* To Input */}
          <div>
            <label htmlFor="to" className="block text-sm font-bold text-black-700 text-justify">To</label>
            <input
              type="text"
              name="to"
              value={searchParams.to}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {/* Departure Date */}
          <div>
            <label htmlFor="departureDate" className="block text-sm font-bold text-black-700 text-justify">Departure Date</label>
            <input
              type="date"
              name="departureDate"
              value={searchParams.departureDate}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Return Date */}
          <div>
            <label htmlFor="returnDate" className="block text-sm font-bold  text-black-600	 text-justify">Return Date</label>
            <input
              type="date"
              name="returnDate"
              value={searchParams.returnDate}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {/* Number of Persons */}
          <div>
            <label htmlFor="persons" className="block text-sm font-bold  text-black-600	 text-justify">Number of Persons</label>
            <input
              type="number"
              name="persons"
              value={searchParams.persons}
              onChange={handleInputChange}
              min="1"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>

        {/* Search Button */}
        <div className="mt-6">
          <Button  size="lg" className="bg-black-300 text-white">
            Search Flights
          </Button>
        </div>
      </form>

      {/* Flight List */}
      <div className="max-w-screen-lg mx-auto py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {flights.length === 0 ? (
          <p>No flights available</p>
        ) : (
          flights.map((flight, index) => (
            <Card key={index} sx={{ width: 320 }}>
              <CardContent>
                <Typography level="title-lg" fontWeight="bold" >
                  {flight.airline} - {flight.flightNumber}
                </Typography>
                <Typography level="body-m" sx={{ color: 'text.secondary' }}>
                  From {flight.origin} to {flight.destination}
                </Typography>

                {/* Flight Details and Price */}
                <Typography level="body-m" sx={{ marginBottom: 1 }} >
                  Duration: {flight.duration} hours
                </Typography>
                <Typography sx={{ fontSize: 'lg', fontWeight: 'lg' }}>
                  Price: ${flight.price}
                </Typography>

                {/* Book Button */}
                <button className="bg-violet-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-32 ml-20 mt-4"
                  // variant="solid"
                  // size="md"
                
                  // sx={{ mt: 2, fontWeight: 600 }}
                >
                  Book Now
                </button>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
