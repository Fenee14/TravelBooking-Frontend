import React from 'react';
import OverflowCard from './Card';
import BasicCard from './CardHotel';
import MediaCover from './CardTravel';
// import Hotel from './Hotel';

export default function AllCard() {
  return (
    <>
    <div className="flex space-x-4"> {/* Added flex layout */}
      <OverflowCard />
      <BasicCard />
      <MediaCover/>
    </div>
    {/* <div>
    <Hotel/>
    </div> */}
    </>
  );
}
