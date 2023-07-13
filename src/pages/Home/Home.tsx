import React from 'react';
import { Grid, Box, Card, CardContent, CardMedia, Typography, Divider, Container } from '@mui/material';
import { useNavigate} from "react-router-dom";
import Header from '../../components/Header/Header';
import { routesList } from './Home.constant';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
    <Header/>
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid black", padding: 3, mb: 10 }}>
      <Grid spacing={5} container>
        {routesList.map(d => (<Grid xs={12} sm={12} md={6} lg={6} item>
          <Card elevation={0} sx={{ display: 'flex', justifyContent: "left" }}>
            <CardMedia
              component="img"
              sx={{ width: 120, height: 80, mt: 1 }}
              image={d.imageUrl}
              alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: "space-between", ml: 2 }}>
              <CardContent sx={{ padding: 0 }}>
                <Typography onClick={()=> navigate(d.path)} sx={{fontSize: "18px", cursor: "pointer"}} component="a" variant="h6">
                  {d.title}
                </Typography>
                <Divider sx={{mt: 1, mb: 1}}/>
                <Typography dangerouslySetInnerHTML={{__html: d.description}} sx={{fontSize: "14px"}} variant="subtitle1" color="text.secondary" component="div">
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Grid>))}
      </Grid>
    </Box>
    </Container>
  )
}

export default Home;