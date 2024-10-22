import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';

const hotelsData = [
  {
    id: 1,
    title: "Luxury Beachside Hotel",
    location: "Miami, Florida",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr_ipwGuR5qXU3_9sHz4xDrItG5ikf-Pm0YQ&s",
    description: "Enjoy a luxurious stay at our beachside hotel with oceanfront views, a spa, and fine dining.",
    price: "$2,900",
  },
  {
    id: 2,
    title: "Mountain Resort",
    location: "Aspen, Colorado",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSENNJ8Ucfm0e0lzvfLhT9DXqqwHGh0zfhycA&s",
    description: "Experience a relaxing getaway in the mountains with skiing, hot tubs, and cozy cabins.",
    price: "$1,800",
  },
  {
    id: 3,
    title: "City Center Hotel",
    location: "New York, New York",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvcGo_coLsx6HCVDPA5H7PvkFTTs1zz26rvw&s",
    description: "Stay in the heart of New York City with easy access to Times Square, Broadway, and more.",
    price: "$3,500",
  },
  {
    id: 4,
    title: "City Center Hotel",
    location: "New York, New York",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpMbBDZj4KTdoGPcuZLD2rTa8DStgZsfxeaw&s",
    description: "Stay in the heart of New York City with easy access to Times Square, Broadway, and more.",
    price: "$3,500",
  }, {
    id: 5,
    title: "City Center Hotel",
    location: "New York, New York",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFGVRmugXRWtWGLFIf7hs0BVWkMK1pOJNhTA&s",
    description: "Stay in the heart of New York City with easy access to Times Square, Broadway, and more.",
    price: "$3,500",
  },
  {
    id: 6,
    title: "City Center Hotel",
    location: "New York, New York",
    image: "https://www.tridenthotels.com/-/media/trident-hotel/special-offers/home-special-offers-new.webp",
    description: "Stay in the heart of New York City with easy access to Times Square, Broadway, and more.",
    price: "$3,500",
  },
];

export default function HotelList() {
  return (
    <div className="max-w-screen-lg mx-auto py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {hotelsData.map((hotel) => (
        <Card key={hotel.id} sx={{ width: 320 }}>
          <div>
            <Typography level="title-lg" fontWeight="bold">
              {hotel.title}
            </Typography>
            <Typography level="body-sm" sx={{ color: 'text.secondary' }}>
              {hotel.location}
            </Typography>
            <IconButton
              aria-label={`bookmark ${hotel.title}`}
              variant="plain"
              color="neutral"
              size="sm"
              sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
            >
              <BookmarkAdd />
            </IconButton>
          </div>

          {/* Hotel Image */}
          <AspectRatio minHeight="120px" maxHeight="200px">
            <img src={hotel.image} alt={hotel.title} />
          </AspectRatio>

          {/* Hotel Description and Price */}
          <CardContent orientation="horizontal">
            <div>
              <Typography level="body-xs" sx={{ marginBottom: 1 }}>
                {hotel.description}
              </Typography>
              <Typography level="body-xs">Total price:</Typography>
              <Typography sx={{ fontSize: 'lg', fontWeight: 'lg' }}>{hotel.price}</Typography>
            </div>

            {/* Explore Button */}
            <Button
              variant="solid"
              size="md"
              color="primary"
              aria-label={`Explore ${hotel.title}`}
              sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600, mb:"4"}}
            >
              Book now
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
