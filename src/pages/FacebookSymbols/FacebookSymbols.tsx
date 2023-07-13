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
import { useNavigate } from 'react-router-dom';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { RECENTLY_USED, RECENTLY_USED_MESSAGE } from '../../utils/utils.constants';
import { emojiObjectList, externalContentArray } from './FacebookSymbols.constants';
import EmojiList from '../../components/EmojiList/EmojiList';
import { IEmojiObject, ISymbol } from './FacebookSymbol.interface';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Container from '@mui/material/Container';
import Clear from '@mui/icons-material/Clear';


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

const FacebookSymbols: React.FC = () => {
  const navigate = useNavigate();
  const [savedSymbols, setSavedSymbols] = useState<string>("");
  const [recentlyUsedSymbols, setRecentlyUsedSymbols] = useState<any>([]);
  const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);
  const [snackBarMessage, setSnackBarMessage] = useState<string>("");
  const [filteredEmojiObjectList, setFilteredEmojiObjectList] = useState<IEmojiObject[]>(emojiObjectList);
  const [searchText, setsearchText] = useState<string>("");

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(savedSymbols);
    setSnackBarMessage("Copied to clipboard");
    setOpenSnackBar(true)
  }, [savedSymbols]);

  const handleClick = useCallback(
    (e: any, emoji: any) => {
      navigator.clipboard.writeText(e.target.innerText);
      setRecentlyUsedSymbols((symbols: ISymbol[])=> [...symbols, emoji])
      setSnackBarMessage(`${e.target.innerText} has been copied`);
      setOpenSnackBar(true)
      setSavedSymbols(text => text + e.target.innerText);
    }, []);

  const handleSearch = (searchText: string) => {
    setsearchText(searchText);
    const filteredList = emojiObjectList.map(emojiObject => {
      const filteredSymbols = emojiObject.symbols.filter(symbol => symbol?.title?.toLowerCase().includes(searchText.toLowerCase()));
      return { ...emojiObject, symbols: filteredSymbols };
    });
    setFilteredEmojiObjectList(filteredList.filter(emojiObject => emojiObject.symbols.length > 0))
  }

  return (
    <Container sx={{ display: "flex", flexDirection: "column" }}>
      <AppBar position='fixed' elevation={1} sx={{ bgcolor: "#fff" }}>
        <Toolbar sx={{ pl: 1, display: "flex" }}>
          <Typography style={{ color: "#0088CC", fontSize: "25px" }}>Symbols</Typography>
          {savedSymbols && <> <CustomInput
            size="small"
            sx={{ ml: { xs: 2, sm: 16, md: 30, lg: 40 }, fontSize: "70px", border: "1px solid silver", borderRadius: 0 }}
            value={savedSymbols}
            type='text'
            onChange={(e) => setSavedSymbols(e.target.value)} 
            />
            <Button variant='outlined' onClick={handleCopy} sx={{ ml: 0, height: "43px", borderRadius: 0 }}>Copy</Button>
          </>
          }
        </Toolbar>
      </AppBar>
      <Box sx={{ mt: 9, pl: { lg: 2, md: 2, sm: 1, xs: 1 } }}>
        <Grid spacing={3} container>
          <Grid item xs={4} sm={4} md={3} lg={2}>
            <Box sx={{
              position: "sticky", top: 80, display: "flex", border: "1px solid silver",
              borderRadius: "8px", bgcolor: "white", minWidth: "110px"
            }}>
              <List sx={{width: "100%"}}>
                <ListItem>
                    <InputBase value={searchText} onChange={(e)=> handleSearch(e.target.value)} sx={{border: "1px solid silver", paddingLeft: "8px", paddingRight: "8px", fontSize: "13px", borderRadius: "8px"}} placeholder='Search emoji'
                     endAdornment={
                      searchText && (
                          <Clear sx={{fontSize: "15px", cursor: "pointer"}} onClick={()=> handleSearch("")}/>
                      )
                    }
                    />
                </ListItem>
                <Divider sx={{ ml: 2, mr: 2, height: "5px", borderBottomWidth: 1 }} />
                {externalContentArray.map((content, index) => (
                  <Fragment key={index}>
                    <ListItem
                      sx={{
                        backgroundColor: "#fff",
                        pl: 2, cursor: "pointer",
                        color: "#0088CC",
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
          <Grid item xs={8} sm={8} md={8} lg={7}>
            <Box sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
              <div style={{ marginBottom: "10px" }} id="recent">
                <Typography style={{ color: "#A52A2A" }} variant="h6">{RECENTLY_USED}</Typography>
                {recentlyUsedSymbols.length>0 ? (
                  <EmojiList symbols={recentlyUsedSymbols} handleClick={handleClick} />
                ) : (
                  <Typography sx={{ fontSize: "13px" }}>{RECENTLY_USED_MESSAGE}</Typography>
                )}
              </div> 
              {filteredEmojiObjectList.map((symbols) => ( symbols.symbols.length>0 &&
                <div key={symbols.id} id={symbols.id} style={{ marginBottom: "10px", marginTop: "15px" }}>
                  <Typography style={{ color: "#A52A2A" }} variant="h6">{symbols.name}</Typography>
                    <EmojiList symbols={symbols.symbols} handleClick={handleClick} />
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

export default FacebookSymbols;