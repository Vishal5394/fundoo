import React from "react";
import './header.css'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import DescriptionIcon from '@mui/icons-material/Description';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import { yellow } from '@mui/material/colors'; 
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {connect} from 'react-redux';
import { containerClasses } from "@mui/system";

function Header(props) {
    const openingDrawer = () => {
        props.listenToheader()
    }
    console.log(props.label, "Header")
    return (
        <div className="head">
            <MenuOutlinedIcon sx={{ fontSize: 30 }} onClick={openingDrawer}/>
            <div className="keep">
                <DescriptionIcon sx={{ color: yellow[500], fontSize: 40 }} />
                <h1>{props.label}</h1>
            </div>
            <div className="searchbar">
                <IconButton type="button" sx={{ p: '10px' }} aria-label="Search">
                    <SearchIcon />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </div>
            <div className="icon">
                <RefreshIcon sx={{ fontSize: 30 }} />
                <ViewStreamOutlinedIcon sx={{ fontSize: 30 }} />
                <SettingsTwoToneIcon sx={{ fontSize: 30 }} />
            </div>
            <div className="account">
                <AppsRoundedIcon sx={{ fontSize: 30 }} />
                <AccountCircleIcon sx={{ fontSize: 40 }} />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        label: state.drawerReducer.label
    }
}
export default connect(mapStateToProps)(Header)