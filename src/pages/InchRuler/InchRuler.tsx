import { Container, Box, Typography, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { useRef } from "react";

const InchRuler = () => {
  const { type } = useParams();
  const InchRuler =
    "https://assets.piliapp.com/s3pxy/actual-size/inch-ruler/default-lside.png";
  const CMRuler = "https://assets.piliapp.com/s3pxy/actual-size/cm-ruler/default-lside.png"
  const screenWidth = window.screen.width;
  const windowWidth = window.innerWidth;
  const userAgent = navigator.userAgent;
  const rulerRef = useRef<any>(null);

  // function closeFullscreen() {
  //   if (document.exitFullscreen) {
  //     document.exitFullscreen();
  //   } else if (document.webkitExitFullscreen) { /* Safari */
  //     document!.webkitExitFullscreen();
  //   } else if (document.msExitFullscreen) { /* IE11 */
  //     document!.msExitFullscreen();
  //   }
  // }

  const fullScreen = () => {
    if (rulerRef.current.requestFullscreen) {
      rulerRef.current.requestFullscreen();
    } else if (rulerRef.current.webkitRequestFullscreen) { /* Safari */
      rulerRef.current.webkitRequestFullscreen();
    } else if (rulerRef.current.msRequestFullscreen) { /* IE11 */
      rulerRef.current.msRequestFullscreen();
    }
  }
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 5
        }}
      >
        <Typography variant="h3">{type==="inch" ? "Actual size of Inch Ruler" : "Actual Size of cm Ruler"}</Typography>
        <Typography variant="h6">{type==="inch" ?  "width:12.0Inch (304.8mm)" : "width:300.0mm (11.81Inch)"}</Typography>
        <Box sx={{ display: "flex", mt: 1 }}>
          <Button
            sx={{ fontSize: "10px", padding: 1, height: "25px" }}
            variant="contained"
          >
            Device Name
          </Button>
          <Button
            onClick={()=> fullScreen()}
            sx={{ fontSize: "10px", padding: 1, height: "25px", ml: 1 }}
            variant="contained"
          >
            Full Screen
          </Button>
          <Button
            sx={{ fontSize: "10px", padding: 1, height: "25px", ml: 1 }}
            variant="contained"
          >
            Drag it
          </Button>
          {/* <Button
            sx={{ fontSize: "10px", padding: 1, height: "25px", ml: 1 }}
            variant="contained"
          >
            Iframe Embed
          </Button> */}
        </Box>
        <Box ref={rulerRef} sx={{ mt: 5, overflowX: "scroll" }}>
          {type === "inch" ? <img
            src={InchRuler}
            alt="Inch Ruler"
            style={{ width: "1152px", height: "130px" }}
          /> : <img
            src={CMRuler}
            alt="Inch Ruler"
            style={{ width: "11.81in", height: "130px" }}
          />}
        </Box>

        <Typography>Screen Size: {userAgent}</Typography>

        {/* <iframe src="https://www.piliapp.com/actual-size/embed/inch-ruler/?text=Actual%20size%20of%20%20Inch%20Ruler%20&show_image=1&button_style=btn-primary&width=350&height=350" frameborder=0 marginwidth="0" marginheight="0" hspace="0" vspace="0" scrolling="no" allowtransparency="true" width="350" height="350"></iframe> */}
      </Box>
    </Container>
  );
}

export default InchRuler;
