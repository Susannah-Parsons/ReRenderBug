'use client'
import { useParams } from "next/navigation";
import { useStore } from "./store"
import { Box, Typography } from "@mui/material";

export function ClientComponent(){
    const results = useStore(state=>state.results)
    const pathParams = useParams();
    //Fake test just so we can see the effect of calling useParams in a component
    if(pathParams.anything !== undefined){
        return false
    }
    return (
    <Box 
      display="flex" 
      flexDirection={"row"} 
      width="100%" 
      height="500px"
      sx={{backgroundColor:"red"}}
      >
        {results.map(res =>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} textAlign={"left"}>
                {res}
            </Typography>
        )}
        
    </Box>
    )
}
