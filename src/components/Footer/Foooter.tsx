import { Grid, Typography, Box } from '@mui/material'
import { footerNavComponents, necessaryNavComponents } from '../../pages/Home/Home.constant';


const Footer = () => {
  return (
    <Box sx={{mt: 30, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
        <Box sx={{pl: 1, display:"flex", justifyContent:"center", width: "100%", maxWidth: {lg: "1100px"}}}>
            <Grid spacing={2} container>
                {footerNavComponents.map(route=> <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Box sx={{display: "flex", textAlign: "left"}}>
                    <a style={{textDecoration: "none", color: "blueviolet"}} href={route.path}>{route.title}</a>
                    </Box>
                </Grid>)}
            </Grid>
      </Box>
      <Box sx={{pl: 1, display:"flex", justifyContent:"center", width: "100%", mt: 5, maxWidth: {lg: "1100px"}}}>
        <Grid container>
          {necessaryNavComponents.map(route => <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box sx={{ display: "flex", textAlign: "left" }}>
              <a style={{ textDecoration: "none", color: "blueviolet" }} href={route.path}>{route.title}</a>
            </Box>
          </Grid>)}
        </Grid>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" sx={{ borderTop: "2px solid grey", height: "50px", width: "100%", mt: 0, paddingBottom: 3 }}>
        <Typography>© 2023 HundredTools. All rights reserved.</Typography>
      </Box>
    </Box>

  )
}

export default Footer