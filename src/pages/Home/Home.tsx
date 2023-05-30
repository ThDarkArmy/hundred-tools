import React from 'react';
import { Grid, Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate} from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const data: any[] = [
    {
      title: "Symbols",
      imageUrl: "https://dsuj2mkiosyd2.cloudfront.net/project_cover/019/513/cover_crop_904-413.webp?t=1679359578",
      description: "These special symbols are real text and available to copy and paste to anywhere, such like Microsoft Word, Facebook, Twitter, HTML or Blogging. Click icon to copy to clipboard.",
    },
    {
      title: "Facebook Symbols",
      imageUrl: "https://example.com/image2.jpg",
      description: "This is the second object.",
    },
    {
      title: "Instagram Fonts",
      imageUrl: "https://example.com/image3.jpg",
      description: "This is the third object.",
    },
    {
      title: "Actual Size CM Ruler",
      imageUrl: "https://example.com/image4.jpg",
      description: "This is the fourth object.",
    },
    {
      title: "Object 5",
      imageUrl: "https://example.com/image5.jpg",
      description: "This is the fifth object.",
    },
    {
      title: "Object 6",
      imageUrl: "https://example.com/image6.jpg",
      description: "This is the sixth object.",
    },
    {
      title: "Object 7",
      imageUrl: "https://example.com/image7.jpg",
      description: "This is the seventh object.",
    },
    {
      title: "Object 8",
      imageUrl: "https://example.com/image8.jpg",
      description: "This is the eighth object.",
    },
    {
      title: "Object 9",
      imageUrl: "https://example.com/image9.jpg",
      description: "This is the ninth object.",
    },
    {
      title: "Object 10",
      imageUrl: "https://example.com/image10.jpg",
      description: "This is the tenth object.",
    },
  ];

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingLeft: { lg: 20, md: 10, sm: 0 }, paddingRight: { lg: 20, md: 10, sm: 0 } }}>
      <Grid spacing={5} container>
        {data.map(d => (<Grid xs={12} sm={12} md={6} lg={6} item>
          <Card sx={{ display: 'flex', justifyContent: "left" }}>
            <CardMedia
              component="img"
              sx={{ width: 150, height: 100 }}
              image={d.imageUrl}
              alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: "space-between", ml: 2 }}>
              <CardContent sx={{ padding: 0 }}>
                <Typography onClick={()=> navigate("/symbols")} sx={{fontSize: "15px", cursor: "pointer"}} component="a" variant="h6">
                  {d.title}
                </Typography>
                <Typography sx={{fontSize: "14px"}} variant="subtitle1" color="text.secondary" component="div">
                  {d.description}
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Grid>))}
      </Grid>
    </Box>
  )
}

export default Home;