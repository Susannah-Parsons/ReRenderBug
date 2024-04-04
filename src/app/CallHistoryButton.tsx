'use client'
import { Button } from "@mui/material";

export default function CallHistoryButton(){
    return (
        <Button color="inherit" onClick={()=>{
            window.history.replaceState(null, "", `?test=test`);
        }}>Change history</Button>
    )
}
