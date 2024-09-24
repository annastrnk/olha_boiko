import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import imageDiploma from "../../../public/imageDiploma.json"

export default function ImageDiploma() {
  return (
    <Box sx={{ maxWidth:1200, maxHeigh: 300,  }}>
      <ImageList variant="masonry" cols={5} gap={8}>
        {imageDiploma.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

