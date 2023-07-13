import { Typography, Box, Card, Grid } from '@mui/material'
import { styled, useTheme } from "@mui/material/styles";


const AboutUsHeader = styled(Typography)(({ theme }) => ({
    fontSize: 45,
    fontWeight: 800,
    flex: 0.5,
    [theme.breakpoints.down('lg')]: { fontSize: 35, fontWeight: 700 },
    [theme.breakpoints.down('md')]: { fontSize: 30, fontWeight: 600 },
}))

const AboutUsDescription = styled(Typography)(({ theme }) => ({
    fontSize: 18,
    fontWeight: 500,
    flex: 0.5,
    [theme.breakpoints.down('lg')]: { fontSize: 17 },
    [theme.breakpoints.down('md')]: { fontSize: 16 },
}))

const AboutUsComponent = ({ featureDescription, theme }: {featureDescription: any, theme: any}) => (<>
    <Grid container spacing={2} sx={{ display: 'flex', flexDirection: "row-reverse", width: "100%", mt: 5 }}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ display: 'flex', flexDirection: 'column', paddingTop: 5 }}>
            <AboutUsHeader variant="h5" >
                {"ABOUT_US_HEADING"}{" "} <span style={{ color: "#0f4d92" }}>{"REELS"}</span>{" "}{"AND"}{" "}<span style={{ color: "#b92e34" }}>{"VIDEOS"}</span>
            </AboutUsHeader>
            <AboutUsDescription variant="subtitle1" >
                {featureDescription}
            </AboutUsDescription>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Card>
                {/* <CardMedia
                    component="img"
                    sx={{ objectFit:"cover", width: "100%"}}
                    image={image}
                    alt="Live from space album cover"
                /> */}
            </Card>
        </Grid>
    </Grid>
</>)

const AboutUs = () => {
    const theme = useTheme();
    return (
        <Box display="flex" sx={{ alignItems: "center", justifyContent: "center", flexDirection: "column", mt: 15 }}>
            <Typography component="p" sx={{ fontSize: "19px" }}>{"DOWNLOAD_PHOTOS_REELS_VIDEOS_AND_IGTV"}</Typography>
            <AboutUsComponent featureDescription={"ABOUT_US_DESCRIPTION"} theme={theme} />
        </Box>
    )
}

export default AboutUs