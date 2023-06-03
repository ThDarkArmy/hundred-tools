import { Grid, Box, Typography } from '@mui/material';
import React from 'react';

const SymbolList: React.FC<any> = (props) => {
    const { symbols = [], handleClick } = props;
    console.log("symbols", symbols)
    return (
        <>
            <Grid container spacing={1}>
                {symbols.map((symbol: any, index: any) => (
                    <Grid item key={index}>
                        <Box onClick={handleClick} style={{ display: "flex", justifyContent: "center", alignItems: "center", border: "0.5px solid black", borderRadius: "8px", width: "35px", height: "35px", fontSize: "26px", cursor: "pointer" }}>
                            <Typography>{symbol}</Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default SymbolList