import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';

export default function BasicCard() {
  return (
    <Card sx={{ width: 320 }}>
      <div>
        <Typography level="title-lg" fontWeight="bold">
          Luxury Beachside Hotel
        </Typography>
        <Typography level="body-sm" sx={{ color: 'text.secondary' }}>
          Miami, Florida
        </Typography>
        <IconButton
          aria-label="bookmark this hotel"
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
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr_ipwGuR5qXU3_9sHz4xDrItG5ikf-Pm0YQ&s"
          alt="Luxury Beachside Hotel"
        />
      </AspectRatio>
      
      {/* Hotel Description and Price */}
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs" sx={{ marginBottom: 1 }}>
            Enjoy a luxurious stay at our beachside hotel with top-notch amenities, including oceanfront views, a spa, and fine dining options.
          </Typography>
          <Typography level="body-xs">Total price:</Typography>
          <Typography sx={{ fontSize: 'lg', fontWeight: 'lg' }}>$2,900</Typography>
        </div>
        
        {/* Explore Button */}
        <Button
          variant="solid"
          size="md"
          color="primary"
          aria-label="Explore Luxury Beachside Hotel"
          sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
        >
          Explore
        </Button>
      </CardContent>
    </Card>
  );
}
