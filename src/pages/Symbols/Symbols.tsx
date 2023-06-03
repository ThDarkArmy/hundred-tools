import { AppBar, Box, Button, Grid, TextField, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { RECENTLY_USED, RECENTLY_USED_MESSAGE, SymbolsObjectList, contentArray } from './Symbols.constants';
import SymbolList from '../../components/SymbolList/SymbolList';

const Symbols: React.FC = () => {
  const SymbolsArray = ["What is It?", "Recently Used", "Popular Symbols", "Special Symbols", "Love Symbols", "People Symbols", "Animal Symbols", "Asterisk Symbols", "Arrow Symbols", "Graphic Symbols", "Math Symbols", "language Symbols", "Currencies Symbols", "Facebook Symbols", "Emoji List", "Font Generator"];

  const [savedSymbols, setSavedSymbols] = useState<string>("");

  const handleCopy = () => {
    navigator.clipboard.writeText(savedSymbols);
  }

  const handleClick = (e: any) => {
    navigator.clipboard.writeText(e.target.innerText);
    setSavedSymbols(text => text + e.target.innerText);
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: '', alignItems: "", bgcolor: "#e4e0e0" }}>
      <AppBar position='fixed' elevation={0} sx={{ bgcolor: "#fff" }}>
        <Toolbar sx={{ pl: 1, display: "flex", justifyContent: "space-between" }}>
          <Typography style={{ color: "blue" }}>Symbols</Typography>
          <TextField sx={{ ml: "auto", fontSize: "50px" }} value={savedSymbols} type='text' />
          <Button onClick={handleCopy} sx={{ ml: 5 }}>Copy</Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ mt: 10, pl: { lg: 2, md: 2, sm: 1, xs: 1 }}}>
        <Grid spacing={3} container>
          <Grid item xs={3} sm={3} md={2} lg={2}>
            <Box sx={{ display: "flex", flexDirection: "column", border: "1px solid black", width: 160, pl: 2, borderRadius: 1, p: 1}}>
              {contentArray.map(content => (
                <a style={{textDecoration: "none"}} href={`#${content.path}`}><Typography sx={{ fontSize: "13px" }} component="a">{content.name}</Typography></a>
              ))}
            </Box>
          </Grid>
          <Grid item xs={9} sm={9} md={9} lg={9}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
            <div style={{ marginBottom: "10px" }}>
                  <Typography variant="h6">{RECENTLY_USED}</Typography>
                  {savedSymbols ? (
                      <SymbolList symbols={savedSymbols.split("")} handleClick={handleClick}/>
                  ): <Typography sx={{fontSize: "13px"}}>{RECENTLY_USED_MESSAGE}</Typography>}
                </div>
              {SymbolsObjectList.map(symbols => (
                <div id={symbols.id} style={{ marginBottom: "10px", marginTop: "15px" }}>
                  <Typography variant="h6">{symbols.name}</Typography>
                  {symbols.symbols ? <SymbolList symbols={symbols.symbols} handleClick={handleClick}/> : (
                    <>
                      {symbols.children  && symbols.children.map(child => <div style={{ marginTop: "15px" }}>
                        <Typography style={{color: "red", fontSize: "16px"}} variant="h6">{child.name}</Typography>
                        <SymbolList symbols={child.symbols} handleClick={handleClick}/>
                      </div>)}
                    </>
                  )}
                </div>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box >
  )
}

export default Symbols