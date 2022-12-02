import React, { useState } from "react";
import { useEffect } from "react";
import { getNotesList } from "../../service/dataservice";
import MiniDrawer from "../drawaer/drawer";
import Header from "../header/header";
import TakeNote1 from "../takeNote1/takeNote1";
import TakeNote2 from "../takeNote2/takeNote2";
import TakeNote3 from "../takenote3/takenote3";
import PrimarySearchAppBar from "../headermui";


function Dashboard() {
    const[toggle, setToggle] = useState(false)
    const [noteslist, setNotelist] = useState([])
    const [drawerToggle, setDrawerToggle] = useState(false)
    const [currentChoice, setcurrentChoice] =useState("Notes")

    const getNote = ()=> {
        getNotesList().then((responce )=>{
            let filter = []
            if (currentChoice === "Notes"){
                filter = responce.data.data.data.filter((note)=>{
                    if (note.isArchived===false ){
                        return note
                    }
                })
            }
            if (currentChoice === "Archive"){
                filter = responce.data.data.data.filter((note)=>{
                    if (note.isArchived===true){
                        return note
                    }
                })
            }
            if (currentChoice === "Trash"){
                filter = responce.data.data.data.filter((note)=>{
                    if (note.isDeleted===true){
                        return note
                    }
                })
            }
            console.log(responce)
            setNotelist(filter)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    useEffect(() =>{
        getNote()
    }, [currentChoice])
    
    const listenToDrawer =(noteChoice) =>{
        setcurrentChoice(noteChoice)
        console.log(currentChoice)
    }

    const listenToTakeNote1 = () => {
        setToggle(true)
    }
    const listenToTakeNote2 = () => {
        setToggle(false)
    }

    const autorefresh =()=>{
        getNote()
    }

    const listenToheader = () => {
        setDrawerToggle(!drawerToggle)
    }
    
    return(
        <div>
            {/* <Header listenToheader={listenToheader} /> */}
            <PrimarySearchAppBar listenToheader={listenToheader} />
            <MiniDrawer drawerToggle = {drawerToggle} listenToDrawer={listenToDrawer}/>
            <div>
                {
                    toggle ? <TakeNote2 listenToTakeNote2 ={listenToTakeNote2}/> : <TakeNote1 listenToTakeNote1 ={listenToTakeNote1}/>  
                }
                <div style={{width:'75vw', border:'0px solid red', display:'flex', flexDirection:'row', height:'20vh',position:'relative', top:'200px',left:'300px', marginRight:'50px', flexWrap:'wrap'}}>
                    {
                        noteslist.map((note) => (<TakeNote3 note ={note} autorefresh={autorefresh}/>))
                    }
                </div>
            </div>
            
            
        </div>
    )
}
export default Dashboard