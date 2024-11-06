import { useState } from 'react';
import { Button, Card, CardContent, Container, CssBaseline, Grid, Typography } from '@mui/material';
import { Cached } from '@mui/icons-material';
import "./FlippingCoin.module.css";


function FlippingCoin() {
  const [isFlipping, setIsFlipping] = useState(false);
  const [result, setResult] = useState<any>(null);

  const flipCoin = () => {
    setIsFlipping(true);

    setTimeout(() => {
      const randomResult = Math.random() < 0.5 ? 'Heads' : 'Tails';
      setResult(randomResult);
      setIsFlipping(false);
    }, 2000);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Card variant="outlined">
          <CardContent>
            <Grid container justifyContent="center">
              <div className={`coin ${isFlipping ? 'flip' : ''}`}>
                <div className={`side front ${result === 'Heads' ? 'show' : ''}`}>Heads</div>
                <div className={`side back ${result === 'Tails' ? 'show' : ''}`}>Tails</div>
              </div>
            </Grid>
          </CardContent>
        </Card>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Cached />}
          onClick={flipCoin}
          disabled={isFlipping}
          style={{ marginTop: '16px' }}
        >
          Flip Coin
        </Button>
        {result && (
          <Typography variant="h5" style={{ marginTop: '16px' }}>
            Result: {result}
          </Typography>
        )}
      </div>
    </Container>
  );
}

export default FlippingCoin;
