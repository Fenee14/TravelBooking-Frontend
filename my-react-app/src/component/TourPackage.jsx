import React from 'react';
import Slider from 'react-slick'; // Import Slider

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const TourPackage = () => {
  // Sample data for tour packages with multiple images
  const tourPackages = [
    {
      id: 1,
      destination: 'Bali, Indonesia',
      price: 1200,
      duration: '7 Days, 6 Nights',
      description: 'Explore the beautiful beaches, temples, and rich culture of Bali. Includes accommodation, meals, and guided tours.',
      images: [
        'https://static.wanderon.in/wp-content/uploads/2024/02/besakih-temple-in-bali.jpg', // Replace with actual image URLs
        'https://media1.thrillophilia.com/filestore/35djn21pcljb4zmfrhhqggpztpld_1562050063_z.jpg?w=305&h=230&dpr',
        'https://bali.queenstandoor.com/blog/wp-content/uploads/2024/03/5-places-to-visit-bali.jpg'
      ],
    },
    {
      id: 2,
      destination: 'Paris, France',
      price: 1800,
      duration: '5 Days, 4 Nights',
      description: 'Discover the city of love with a visit to the Eiffel Tower, Louvre Museum, and Seine River cruises.',
      images: [
        'https://instatravelstyle.com/wp-content/uploads/2019/07/paris-min.png',
        'https://embracesomeplace.com/wp-content/uploads/2023/06/Seine-at-Night-3851.jpg',
        'https://dreamsinparis.com/wp-content/uploads/2021/03/places-to-visit-in-paris-at-night-1.jpg'
      ],
    },
    {
      id: 3,
      destination: 'New York, USA',
      price: 1500,
      duration: '6 Days, 5 Nights',
      description: 'Visit iconic landmarks such as the Statue of Liberty, Times Square, and Central Park. Includes accommodation and city tours.',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpE-ZxqrUOu6bbSSBKFEQlqS6ZEcOiqE5ccw&s',
        'https://media1.thrillophilia.com/filestore/oiek6gvp0gw7njpe0lf43fzscq6m_1618909202_shutterstock_248799484.jpg?w=753&h=450&dpr=2.0',
        'https://anoushkaprobyn.com/wp-content/uploads/2023/05/Brooklyn-Bridge-New-York-Full-Size-North-America-Travel-Guide-scaled.jpg'
      ],
    }
  ];

  // Settings for the slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className=" py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <h2 className="text-3xl font-bold text-center mb-8 text-violet-500 pb-4 ">Tour Packages</h2> */}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourPackages.map((tour) => (
            <div key={tour.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              {/* Slider for tour images */}
              <Slider {...sliderSettings}>
                {tour.images.map((image, index) => (
                  <div key={index}>
                    <img 
                      src={image} 
                      alt={`Slide ${index + 1} - ${tour.destination}`} 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                ))}
              </Slider>

              {/* Tour details */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-blue-700">{tour.destination}</h3>
                <p className=" mb-2 text-black-500">{tour.duration}</p>
                <p className=" mb-4 text-justify text-black-500">{tour.description}</p>
                <p className="text-lg font-semibold mb-4 text-black-500">Price: ${tour.price}</p>
                
                {/* Book Now button */}
                <button className="bg-violet-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourPackage;
