import React from "react";
import './takenote1.css'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import InputBase from '@mui/material/InputBase';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import { grey } from '@mui/material/colors';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { makeStyles } from "@mui/styles";


const useStyle = makeStyles({
    notebar1: {
        width: '40vw',
        height: '7vh',
        display: 'flex',
        flexWrap:'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        alignItems: 'center',
        border: '2px solid rgb(234, 234, 234)',
        padding: '10px',
        borderRadius: '10px',
        position: 'relative',
        top: '0px',
        left: '600px',
    },

    icon: {
        width: '130px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        alignItems: 'center',
        /* border: '1px solid red', */
    }

})


function TakeNote1(props) {
    const classes = useStyle()

    const openTakeNote2 = () => {
        props.listenToTakeNote1()
    }
    return (
        <Paper elevation={4} className={classes.notebar1} onClick={openTakeNote2}>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Take a note...."
                inputProps={{ 'aria-label': 'Take a note....' }}
 
            />
            <Box className={classes.icon}>
                <CheckBoxOutlinedIcon sx={{ color: grey[600], fontSize: 25 }} />
                < BrushOutlinedIcon sx={{ color: grey[600], fontSize: 25 }} />
                <BrokenImageOutlinedIcon sx={{ color: grey[600], fontSize: 25 }} />

            </Box>
        </Paper>
    )
}
export default TakeNote1