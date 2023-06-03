import React from 'react';
import { Grid, Box, Card, CardContent, CardMedia, Typography, Divider } from '@mui/material';
import { useNavigate} from "react-router-dom";
import Header from '../../components/Header/Header';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const data: any[] = [
    {
      title: "Symbols",
      imageUrl: "https://assets.piliapp.com/s3pxy/thumbs/symbol/thumb-100x75.jpg",
      description: "These special symbols are real text and available to copy and paste to anywhere, such like Microsoft Word, Facebook, Twitter, HTML or Blogging. Click icon to copy to clipboard.",
      path: "/symbols"
    },
    {
      title: "Facebook Symbols",
      imageUrl: "https://assets.piliapp.com/s3pxy/thumbs/facebook-symbols/thumb-100x75.jpg",
      description: "Facebook supports many colorful symbols, smiley and emoticons icons, includes 52 icons in chat conversation and 206 icons in facebook timeline. This is an online web tool without any software installation required. Let's write an attractive facebook status!",
    },
    {
      title: "Instagram Fonts",
      imageUrl: "https://assets.piliapp.com/s3pxy/thumbs/instagram/fonts/thumb-100x75.jpg",
      description: "𝕚𝕟𝕤𝕥𝕒𝕘𝕣𝕒𝕞 𝕗𝕠𝕟𝕥𝕤 <br>𝖎𝖓𝖘𝖙𝖆𝖌𝖗𝖆𝖒 𝖋𝖔𝖓𝖙𝖘 <br> 𝓲𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶 𝓯𝓸𝓷𝓽𝓼",
    },
    {
      title: "Actual Size CM Ruler",
      imageUrl: "https://assets.piliapp.com/s3pxy/thumbs/actual-size/cm-ruler/thumb-100x75.jpg",
      description: "It is an online application, support cm, inch and pixel.",
    },
    {
      title: "Inch Ruler",
      imageUrl: "https://assets.piliapp.com/s3pxy/thumbs/actual-size/inch-ruler/thumb-100x75.jpg",
      description: "It is an online application, support cm, inch and pixel.",
    },
    {
      title: "Emoji List",
      imageUrl: "https://assets.piliapp.com/s3pxy/thumbs/emoji/list/thumb-100x75.jpg",
      description: "Click the icon to copy, then paste to anywhere.",
    }
  ];

  return (
    <>
    <Header/>
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", ml: { lg: 20, md: 10, sm: 0 }, mr: { lg: 20, md: 10, sm: 0 }, border: "1px solid black", padding: 3 }}>
      <Grid spacing={5} container>
        {data.map(d => (<Grid xs={12} sm={12} md={6} lg={6} item>
          <Card elevation={0} sx={{ display: 'flex', justifyContent: "left" }}>
            <CardMedia
              component="img"
              sx={{ width: 120, height: 80, mt: 1 }}
              image={d.imageUrl}
              alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: "space-between", ml: 2 }}>
              <CardContent sx={{ padding: 0 }}>
                <Typography onClick={()=> navigate("/symbols")} sx={{fontSize: "15px", cursor: "pointer"}} component="a" variant="h6">
                  {d.title}
                </Typography>
                <Divider sx={{mt: 1, mb: 1}}/>
                <Typography dangerouslySetInnerHTML={{__html: d.description}} sx={{fontSize: "12px"}} variant="subtitle1" color="text.secondary" component="div">
                 
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Grid>))}
      </Grid>
    </Box>
    </>
  )
}

export default Home;