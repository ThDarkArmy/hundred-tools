
import Container from '@mui/material/Container';
import { useEffect, useState, useRef } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
import "./InstagramFonts.module.css"

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  fancyText: {
    fontFamily: "bold",
    fontSize: '32px',
    //textTransform: 'uppercase',
    letterSpacing: '4px',
    display: 'inline-block',
    background: 'linear-gradient(to right, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
});


const FontContainer = ({ font, textToConvert }: { font: any, textToConvert: string }) => {
    const [openTooltip, setOpenTooltip] = useState<boolean>(false);
    const classes = useStyles();
    const textRef = useRef<any>(null);
    const handleOnClick = (text: string) => {
        console.log(textRef.current.innerText)
        setOpenTooltip(true);
        // navigator.clipboard.writeText(text);      
        const hiddenElement = document.createElement('div');
        hiddenElement.classList.add('hidden-element');
        hiddenElement.style.fontFamily = textRef.current.style.fontFamily;
        // hiddenElement.style.fontSize = '32px';
        // hiddenElement.style.textTransform = 'uppercase';
        // hiddenElement.style.letterSpacing = '4px';
        hiddenElement.innerText = text;
        document.body.appendChild(hiddenElement);
  
        const range = document.createRange();
        range.selectNode(hiddenElement);
        window!.getSelection()!.removeAllRanges();
        window!.getSelection()!.addRange(range);
        document.execCommand('copy');
        window!.getSelection()!.removeAllRanges();
  
        document.body.removeChild(hiddenElement);
    }

    useEffect(() => {
        if (openTooltip) {
            setTimeout(() => {
                setOpenTooltip(false);
            }, 500)
        }
    }, [openTooltip])

    return (
        <Tooltip title="Text copied" open={openTooltip} placement='top'>
            <Box
                onClick={() => handleOnClick(textToConvert)}
                sx={{
                    display: "flex", alignItems: "center", 
                    border: "1px solid grey", 
                    paddingLeft: 1, 
                    paddingTop: "4px", 
                    paddingBottom: "4px", 
                    whiteSpace: "pre-wrap", 
                    borderRadius: "4px", 
                    cursor: "pointer", 
                    "&:hover": { bgcolor: "silver" },
                    opacity: openTooltip ? 0 : 1,
                    fontSize: "14px"
                }}>
                <Typography ref={textRef} style={{fontFamily: "cursive"}}>
                    {textToConvert}
                </Typography>
            </Box>
        </Tooltip>
    )
}

const InstagramFonts = () => {
    const [textToConvert, setTextToConvert] = useState<string>("Fancy Fonts");

    return (
        <Container sx={{ width: "100%" }}>
            <Box style={{ maxWidth: "750px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: 1 }}>
                    <Typography color="primary" variant='h4'>Instagram Fonts</Typography>
                </Box>
                <Divider sx={{width: "100%"}}/>
                <Box sx={{ mt: 2, width: "100%" }}>
                    <InputBase
                        multiline
                        rows={2}
                        value={textToConvert}
                        onChange={e => setTextToConvert(e.target.value)}
                        placeholder='Fancy Text'
                        fullWidth
                        sx={{ border: "1.5px solid silver", paddingLeft: "8px", paddingRight: "8px", fontSize: "16px", borderRadius: "8px", width: "100%" }}
                    />
                </Box>
                {textToConvert && <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", mt: 2 }}>
                    <Grid spacing={1.3} container>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(font => <Grid item xs={12} sm={6}>
                           <FontContainer font={""} textToConvert={textToConvert+" "+ font} />
                        </Grid>)}
                    </Grid>
                </Box>}
            </Box>
        </Container>
    )
}

export default InstagramFonts;