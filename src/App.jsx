import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, {useState} from "react" ;

export default function App() {
    let [counter,setCounter] =  useState(0)
  return (
    <>
      <Container sx={ContainerStyle}>
        <Box sx={BoxStyle}>
          <Typography sx={{color:"white"}} variant="h1">
            {counter}
          </Typography>
          <Stack direction={"row"} spacing={2}>
            <Button  variant="contained" color="success" onClick={()=>setCounter(++counter)}>
              +
            </Button>
            {  
           counter>0?<Button  variant="contained" color="error" sx={{backgroundColor:"#f00606"}} onClick={()=>setCounter(--counter)}>
             -
            </Button>:""
            }
          </Stack>
        </Box>
      </Container>
    </>
  );
}

const BoxStyle = {
  backgroundColor: "#5498ff",
  borderRadius:"2px",
  width: "50%",
  height:"200px",
  padding: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  
   boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
};

const ContainerStyle = {
    display: "flex",
    alignItems:"center",
    justifyContent:"center",
    height:"700px"
  }

 