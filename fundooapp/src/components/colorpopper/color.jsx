import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import { flexbox } from '@mui/system';
import { changeColor } from '../../service/dataservice';

function ColorPopper(props) {
    const colors = ["#2ECC71", "#AF7AC5", "#F1948A", "#A3E4D7", "#F5B7B1", "#F5B041", "#DC7633", "#F1C40F", "#AAB7B8", "#F1948A", "#2ECC71", "#F5B041"]
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const selectColor = (colour) => {
       
        if(props.action==='create'){
            props.listentoColorProper(colour)
        }
        else if(props.action==='update'){
            let inputcolor={
                noteIdList: [props.id], color: colour
            }
            console.log(inputcolor)
            changeColor(inputcolor).then(
                (response) => {
                    console.log(response)
                    // props.listenenToColorUpdate()
                }
            ).catch(
                (error) => {
                    console.log(error)
                }
            )
            console.log(colour,"updating colour")
        }
        
        }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
        <div>
            <ColorLensOutlinedIcon onClick = {handleClick}/>

            <Popper id={id} open={open} anchorEl={anchorEl} >
                <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper', display:'flex', flexDirection:'row' }}>
                    {
                        colors.map((color) => (
                            <div style={{height:25, width:25, borderRadius:50, backgroundColor:color, marginRight:5}} onClick={() => selectColor(color)}/>
                        ))
                    }
                </Box>
            </Popper>
        </div>
    );
}

export default ColorPopper
