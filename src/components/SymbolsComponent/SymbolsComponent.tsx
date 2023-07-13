import Container from '@mui/material/Container';
import { useState, useCallback } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Link from '@mui/material/Link';
import { CustomInput } from '../../components/CustomComponents';
import SymbolTable from '../SymbolTable/SymbolTable';
import SpecialEmojiList from '../SpecialEmojiList/SpecialEmojiList';

const SymbolsComponent = (props: any) => {
    const { symbolsList, symbolsObjectList, symbolTableColumns, topic, title } = props;
    const [savedSymbols, setSavedSymbols] = useState<string>("");
    const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);
    const [snackBarMessage, setSnackBarMessage] = useState<string>("");

    const handleCopy = useCallback(() => {
        navigator.clipboard.writeText(savedSymbols);
        setSnackBarMessage("Copied to clipboard");
        setOpenSnackBar(true)
    }, [savedSymbols]);

    const handleClick = useCallback(
        (emoji: string) => {
            navigator.clipboard.writeText(emoji);
            setSnackBarMessage(`${emoji} has been copied`);
            setOpenSnackBar(true)
            setSavedSymbols(text => text + emoji);
        }, []);

    return (
        <Container>
            <AppBar position='fixed' elevation={1} sx={{ bgcolor: "#fff" }}>
                <Toolbar sx={{ pl: 1, display: "flex" }}>
                    <Typography style={{ color: "#0088CC", fontSize: "25px" }}>{title}</Typography>
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

            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", maxWidth: "700px", mt: 11, mb: 11 }}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 0 }}>
                <Link href={`/special/emoji/${topic}`}>Emoji</Link>
                    <Divider orientation='vertical' sx={{ width: "1px", bgcolor: "grey", ml: 1, mr: 1, mt: "4px", mb: "4px" }} flexItem />
                    <Typography>Text Symbol</Typography>
                </Box>
                <Box sx={{ mt: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <Typography variant='h5' sx={{ mb: 5, fontWeight: 400 }} >Click the icon to copy to clipboard</Typography>
                    <SpecialEmojiList emojis={symbolsList} handleClick={handleClick} />
                </Box>
                <Box sx={{ mt: 8 }}>
                    <SymbolTable columns={symbolTableColumns} rows={symbolsObjectList} onCopyClick={handleClick} />
                </Box>
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
    )
}

export default SymbolsComponent;