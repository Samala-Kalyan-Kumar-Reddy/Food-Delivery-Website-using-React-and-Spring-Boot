import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { Card, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function RestaurantCard({ item ,index}) {
  // const navigate = useNavigate();
  const handledAddToFavorites=()=>{
    console.log("Handle to add fav....")
  }

  return (
    <Card className="m-5 w-[18rem] productCard">
      <div>
        <img
          className='w-full h-[10rem] rounded-t-md object-cover'
          src={item.imageUrl} alt=''
        />
      </div>
      <div className='p-4 textPart lg:flex w-full justify-between'>
        <div className='space-y-1'>
          <p className='font-semibold text-lg'>{item.name}</p>
          <p className='text-gray-500 text-m'>{item.description.length > 40 ? item.description.substring(0, 40) + "..." : item.description}</p>
        </div>
        <div>
          <IconButton onClick={handledAddToFavorites}> {/* Set color to "primary" for FavoriteIcon */}
            {index%2===0 ? <FavoriteIcon color="primary"/> : <FavoriteBorderIcon />}
          </IconButton>
        </div>
      </div>
    </Card>
  );
}

export default RestaurantCard;
