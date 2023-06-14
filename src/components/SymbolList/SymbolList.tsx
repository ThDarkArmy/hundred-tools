import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const SymbolList: React.FC<any> = (props) => {
    const { symbols = [], handleClick } = props;
    return (
        <>
            <Grid container spacing={1}>
                {symbols.map((symbol: any, index: any) => (
                    <Grid item key={index}>
                        <Box onClick={handleClick} sx={{ display: "flex", justifyContent: "center", alignItems: "center", border: "0.5px solid silver", background: "#fff", borderRadius: "8px", width: "35px", height: "35px", fontSize: "26px", cursor: "pointer", "&: hover": {background: "#C0C0C0"} }}>
                            <Typography>{symbol}</Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default SymbolList