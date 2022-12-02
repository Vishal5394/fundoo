import React from "react";
import './takenote3.css'
import InputBase from '@mui/material/InputBase';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { grey } from '@mui/material/colors';
import ColorPopper from "../colorpopper/color";
import { archivedNotes, updateNotes, deletedNotes } from "../../service/dataservice";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from "react";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { makeStyles } from "@mui/styles";
import Paper from '@mui/material/Paper';

const useStyle = makeStyles({
    NoteOne: {
        width: '15vw',
        height: '18vh',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        alignItems: 'center',
        border: '2px solid rgb(234, 234, 234)',
        padding: '10px',
        borderRadius: '10px',
        marginRight: '10px',
        marginBottom: '10px',
        position: 'relative',
        top: '-150px',
    },
    NoteTwo: {
        width: '100%',
        height: '60%',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        //  border: '1px solid red', 
    },
    input:{
        // border: '1px solid red', 
        width: '85%',
        height: '70%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    p:{
        position: 'relative',
        
    },
    h5:{
        color: 'black',
    },
    NoteThree:{
        /* border: '1px solid red', */
        width: '15%',
        position: 'relative',
        top: '0px',
    },
    iconOne:{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignitems: 'flex-start',
        /* border: '1px solid red', */
       
    },
    Childnote1:{
        width:'39vw',
        height:'26vh',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        alignItems: 'center',
    },
    Childnote2:{
        width:'100%',
        height: '70%',
        /* border: '1px solid red', */
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        alignItems: 'center',
    },
    
    Childnote4:{
        width:'100%',
        height: '30%',
        /* border: '1px solid red', */
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        alignItems: 'center',
    },
    childicon:{
        width: '80%',
        /* border: 1px solid red; */
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        alignItems: 'center',
    
    },
    
    ['@media only screen and (min-width :769px) and (max-width :1024px)']:{
        NoteOne:{
            width: '25vw',
            height: '35vh',
        }
    }
})

function TakeNote3(props) {
    const classes = useStyle()
    const listenenToColorUpdate = () => {
        props.autorefresh()
    }

    const updateArchived = (id) => {
        let archivedobj = {
            noteIdList: [id], isArchived: true
        }
        console.log(archivedobj)
        archivedNotes(archivedobj).then(
            (response) => {
                console.log(response)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
        console.log(props.note.id,"Coming from dashboard")
    }

    const trashNotes = (id) => {
        console.log(id)
        let trashobj = {
            noteIdList: [id], isDeleted: true
        }
        console.log(trashobj)
        deletedNotes(trashobj).then(
            (response) => {
                console.log(response)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }
    console.log(props.note, "Note3")
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        height: 200,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        // p: 4,
    };
    const [inputValue, setInputValue] = useState({ noteId: "", title: "", description: "" });
    const [open, setOpen] = React.useState(false);
    const handleOpen = (noteobj) => {
        console.log(noteobj, "Getting note")
        setOpen(true);
        setInputValue({ noteId: noteobj.id, title: noteobj.title, description: noteobj.description })
    }
    const handleClose = () => setOpen(false);

    const takeTitle = (event) =>{
        setInputValue(prevState => ({
            ...prevState, 
            title : event.target.value 
        }))
        console.log(event.target.value )
    }
    const takedescription = (event) =>{
        setInputValue(prevState => ({
            ...prevState, 
            description : event.target.value 
        }))
        console.log(event.target.value )
    }

    const savedata =()=>{
        updateNotes(inputValue).then(
            (response) => {
                console.log(response)
            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
        setOpen(false)
    }

    return (
        <Paper className={classes.NoteOne} style={{ backgroundColor: props.note.color }}>
            <Box className={classes.NoteTwo}>
                <Box className={classes.input} onClick={() => handleOpen(props.note)} >

                    <span>{props.note.title}</span>
                    <span>{props.note.description}</span>
                </Box>
                <Box className={classes.NoteThree} >
                    <PushPinOutlinedIcon sx={{ fontSize: 25, color: grey[900] }} />
                </Box>
            </Box>
            <Box className={classes.iconOne}>
                <AddAlertOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} />
                <PersonAddAlt1OutlinedIcon sx={{ fontSize: 20, color: grey[900] }} />
                {/* <ColorLensOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} /> */}
                <ColorPopper action='update' listenenToColorUpdate={listenenToColorUpdate} id={props.note.id} />
                <DeleteForeverOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} onClick={() => trashNotes(props.note.id)} />
                <ArchiveOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} onClick={() => updateArchived(props.note.id)} />
                <MoreVertOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} />
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box className={classes.Childnote1} style={{ backgroundColor: props.note.color }}>
                        <Box className={classes.Childnote2} >
                            <Box className={classes.input} >
                                <InputBase
                                    sx={{ ml: 1, flex: 1,  border: 'px solid red',width:'100%' }}
                                    onChange={takeTitle}
                                    defaultValue={inputValue.title}
                                    inputProps={{ 'aria-label': 'Take a note....' }}
                                />
                                <InputBase
                                    sx={{ ml: 1, flex: 1,width:'100%' }}
                                    onChange={takedescription}
                                    defaultValue={inputValue.description}
                                    inputProps={{ 'aria-label': 'Take a note....' }}
                                />
                                {/* <span>{props.note.title}</span>
                                <span>{props.note.description}</span> */}
                            </Box>
                            <Box className={classes.Childnote3}>
                                <PushPinOutlinedIcon sx={{ fontSize: 25, color: grey[900] }} />
                            </Box>
                        </Box>
                        <Box className={classes.Childnote4} >
                            <Box className={classes.childicon} >
                                <AddAlertOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} />
                                <PersonAddAlt1OutlinedIcon sx={{ fontSize: 20, color: grey[900] }} />
                                <ColorPopper action='update' listenenToColorUpdate={listenenToColorUpdate} id={props.note.id} />
                                <ImageOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} />
                                <ArchiveOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} onClick={() => updateArchived(props.note.id)} />
                                <MoreVertOutlinedIcon sx={{ fontSize: 20, color: grey[900] }} />
                            </Box>
                            <Box className={classes.Childbutton}>
                                <Button variant="text" sx={{ color: grey[900] }} onClick={savedata}>Close</Button>
                            </Box>
                        </Box>

                    </Box>
                </Box>
            </Modal>

        </Paper>
    )
}
export default TakeNote3