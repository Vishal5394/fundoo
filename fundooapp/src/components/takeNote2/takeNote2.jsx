import React, { useState } from "react";
import './takenote2.css'
import InputBase from '@mui/material/InputBase';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import { archiveNotes, postNotes } from "../../service/dataservice";
import ColorPopper from "../colorpopper/color";
import { color } from "@mui/system";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
    noteTwo: {
        width: '40vw',
        height: '18vh',
        display: 'flex',
        flexDirection: 'column',
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
    note1:{
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        alignitems: 'center',
        /* border: '1px solid red', */
    },
    note2:{
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        /* border: '1px solid red', */
    },
    icons:{
        width: '60%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        /* border: '1px solid red', */
        position: 'relative',
        right: '120px',
        top: '25px',
    },
    button:{
        width: '20%',
        display: 'block',
        justifyContent: 'flex-end',
        alignContent: 'flex-end',
        alignitems: 'flex-end',
        position: 'relative',
        top: '-5px',
        left: '245px',
        /* border: 1px solid red; */
    }
})

function TakeNote2(props) {
    const classes = useStyle()
    const [inputValue, setInputValue] = useState({title : '', description : '', color: '',isArchived: false})
    const closeTakeNote2 = () => {
        props.listenToTakeNote2()
        postNotes(inputValue).then(
            (responce) => {
                console.log(responce)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }
    const listentoColorProper=(colour)=>{
        setInputValue(prevState=>({
            ...prevState,
            color:colour
        }))
    }

    const takeTitle = (event) =>{
        setInputValue(prevState => ({
            ...prevState, 
            title : event.target.value 
        }))
        console.log(event.target.value )
    }
    const takeDescription = (event) =>{
        setInputValue(prevState => ({
            ...prevState, 
            description : event.target.value 
        }))
        console.log(event.target.value )
    }
    const archivedNote =( ) => {
        setInputValue(prevState=>({
            ...prevState,
            isArchived:true
        }))
        console.log(" add Archived")
    }
    return (
        <Paper className={classes.noteTwo} elevation={4} style={{backgroundColor: inputValue.color}}>
            <Box className={classes.note1}>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    onChange={takeTitle} 
                    placeholder="Title"
                    inputProps={{ 'aria-label': 'Take a note....' }}
                />
                <PushPinOutlinedIcon sx={{ fontSize: 25, color: grey[900] }} />
            </Box>
            <Box className={classes.note2}>
            <InputBase
                maxRows
                sx={{ ml: 1, flex: 1 }}
                onChange={takeDescription}
                placeholder="Take a note...."
                inputProps={{ 'aria-label': 'Take a note....' }}

            />
            
            </Box>
            <Box className={classes.icons} >
                <AddAlertOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} />
                <PersonAddAlt1OutlinedIcon sx={{ fontSize: 20, color: grey[900] }}  />
                {/* <ColorLensOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} /> */}
                <Box>
                    <ColorPopper listentoColorProper= {listentoColorProper} action='create'/>
                </Box>
                <ImageOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} />
                <ArchiveOutlinedIcon sx={{ fontSize: 20, color: grey[900] }}  onClick={archivedNote}/>
                <MoreVertOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} />
                <UndoOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} />
                <RedoOutlinedIcon sx={{ fontSize: 20 }} />
            </Box>
            <Box className={classes.button}>
            <Button  variant="text" sx={{color: grey[900]}} onClick={closeTakeNote2}>Close</Button>
            </Box>
            
        </Paper>
    )
}
export default TakeNote2