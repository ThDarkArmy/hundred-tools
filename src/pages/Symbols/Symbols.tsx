import { useState, useCallback, Fragment } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SymbolList from '../../components/SymbolList/SymbolList';
import { SymbolsObjectList, contentArray, externalContentArray } from './Symbols.constants';
import { useNavigate } from 'react-router-dom';
import { Alert, Container, Snackbar } from '@mui/material';
//import styles from "./Symbols.module.css";
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { WHAT_IS_IT, WHAT_IS_IT_MESSAGE, RECENTLY_USED, RECENTLY_USED_MESSAGE } from '../../utils/utils.constants';


export const CustomInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 0,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
    border: '1px solid',
    borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
    fontSize: 26,
    width: 'auto',
    padding: '2px 2px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const Symbols: React.FC = () => {
  const navigate = useNavigate();
  const [savedSymbols, setSavedSymbols] = useState<string>("");
  const [recentlyUsedSymbols, setRecentlyUsedSymbols] = useState<string>("");
  const [currentSection, setCurrentSection] = useState<string>("popular");
  const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);
  const [snackBarMessage, setSnackBarMessage] = useState<string>("");


  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(savedSymbols);
    setSnackBarMessage("Copied to clipboard");
    setOpenSnackBar(true)
  }, [savedSymbols]);

  const handleClick = useCallback(
    (e: any) => {
      navigator.clipboard.writeText(e.target.innerText);
      setSnackBarMessage(`${e.target.innerText} has been copied`);
      setOpenSnackBar(true)
      setRecentlyUsedSymbols(text => text + e.target.innerText);
      setSavedSymbols(text => text + e.target.innerText);
    },
    []
  );

  // window.addEventListener("scroll", (event) => {
  //   console.log(window.scrollY)
  // })

  const handleListItemClick = (content: any, index: any) => {
    index !== 0 && setCurrentSection(content.path);
    const targetSection = document.getElementById(content.path);
    if (targetSection) {
      const offset = 80; // Adjust the offset value as needed
      const topOffset = targetSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: topOffset - offset, behavior: 'smooth' });
    }
  }

  return (
    <Container sx={{ display: "flex", flexDirection: "column" }}>
      <AppBar position='fixed' elevation={1} sx={{ bgcolor: "#fff" }}>
        <Toolbar disableGutters sx={{ pl: 1, height: "30px" }}>
          <Typography style={{ color: "#0088CC", fontSize: "25px" }}>Symbols</Typography>
          {savedSymbols && <> <CustomInput
            size="small"
            sx={{ ml: { xs: 2, sm: 16, md: 30, lg: 40 }, fontSize: "70px", border: "1px solid silver", borderRadius: 0 }}
            value={savedSymbols}
            type='text'
            onChange={(e) => setSavedSymbols(e.target.value)} />
            <Button variant='outlined' onClick={handleCopy} sx={{ ml: 0, height: "43px", borderRadius: 0 }}>Copy</Button>
          </>
          }
        </Toolbar>
      </AppBar>
      <Box sx={{ mt: 9, pl: { lg: 2, md: 2, sm: 1, xs: 1 } }}>
        <Grid spacing={3} container>
          <Grid item xs={4} sm={3} md={3} lg={2}>
            <Box sx={{
              position: "sticky", top: 80, display: "flex", border: "1px solid silver",
              borderRadius: "8px", bgcolor: "white"
            }}>
              <List sx={{ width: "100%" }} >
                {contentArray.map((content, index) => (
                  <Fragment key={index}>
                    <ListItem
                      sx={{
                        backgroundColor: content.path === currentSection ? "#0088CC" : "#fff",
                        pl: 2,
                        cursor: index !== 0 ? "pointer" : "text",
                        color: content.path === currentSection ? "#fff" : "#0088CC",
                        "&: hover": { background: index !== 0 ? "#C0C0C0" : "#fff" }
                      }}
                      disablePadding key={content.name}>
                      <ListItemText disableTypography
                        sx={{ fontSize: "13px" }}
                        onClick={() => handleListItemClick(content, index)}>
                        {content.name}
                      </ListItemText>
                    </ListItem>
                    {index === 0 && <Divider sx={{ ml: 2, mr: 2, height: "5px", borderBottomWidth: 2 }} />}
                  </Fragment>
                ))}
                <Divider sx={{ ml: 2, mr: 2, height: "5px", borderBottomWidth: 2 }} />
                {externalContentArray.map((content, index) => (
                  <Fragment key={index}>
                    <ListItem
                      sx={{
                        backgroundColor: content.path === currentSection ? "#0088CC" : "#fff",
                        pl: 2, cursor: "pointer",
                        color: content.path === currentSection ? "#fff" : "#0088CC",
                        "&: hover": { background: "#C0C0C0" }
                      }}
                      disablePadding key={content.name}>
                      <ListItemText disableTypography
                      sx={{ fontSize: "13px" }}
                        onClick={() => navigate(content.path)}>
                        {content.name}
                      </ListItemText>
                    </ListItem>
                  </Fragment>
                ))}
              </List>
            </Box>
          </Grid>
          <Grid item xs={8} sm={8} md={8} lg={8}>
            <Box sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
              <div style={{ marginBottom: "10px", paddingRight: "60px" }}>
                <Typography style={{ color: "#A52A2A" }} variant="h6">{WHAT_IS_IT}</Typography>
                <Typography component='p' sx={{ fontSize: "13px" }}>{WHAT_IS_IT_MESSAGE}</Typography>
              </div>
              <div style={{ marginBottom: "10px" }} id="recent">
                <Typography style={{ color: "#A52A2A" }} variant="h6">{RECENTLY_USED}</Typography>
                {recentlyUsedSymbols ? (
                  <SymbolList symbols={recentlyUsedSymbols.split("")} handleClick={handleClick} />
                ) : (
                  <Typography sx={{ fontSize: "13px" }}>{RECENTLY_USED_MESSAGE}</Typography>
                )}
              </div>
              {SymbolsObjectList.map((symbols, index) => (
                <div key={symbols.id} id={symbols.id} style={{ marginBottom: "10px", marginTop: "15px" }}>
                  <Typography style={{ color: "#A52A2A" }} variant="h6">{symbols.name}</Typography>
                  {symbols.symbols ? (
                    <SymbolList symbols={symbols.symbols} handleClick={handleClick} />
                  ) : (
                    symbols.children &&
                    symbols.children.map((child, index) => (
                      <div key={index} style={{ marginTop: "15px" }}>
                        <Typography style={{ color: "#0088CC", fontSize: "14px" }} variant="h6">{child.name}</Typography>
                        <SymbolList symbols={child.symbols} handleClick={handleClick} />
                      </div>
                    ))
                  )}
                </div>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={openSnackBar}
        onClose={() => setOpenSnackBar(false)}
        autoHideDuration={3000}
      >
        <Alert onClose={() => setOpenSnackBar(false)} severity="success" sx={{ width: '100%' }}>
          {snackBarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Symbols;