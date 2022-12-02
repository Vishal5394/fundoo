import axios from "axios";

const headerConfig = {
    headers: { Authorization: localStorage.getItem('token') }
}
export const getNotesList = () => {
    let responce = axios.get('http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList', headerConfig)
    return responce
}

export const postNotes = (noteObj) => {
    let responce = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes', noteObj, headerConfig)
    console.log("Adding Note")
    return responce
}

export const changeColor = (noteObj) => {
    let responce = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes', noteObj, headerConfig)
    console.log("Colour in progress")
    return responce
}

export const archivedNotes = (noteObj) => {
    let responce = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes', noteObj, headerConfig)
    console.log("Added Archived")
    return responce
}

export const updateNotes = (noteObj) => {
    let responce = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes', noteObj, headerConfig)
    console.log("Update Notes")
    return responce
}

export const deletedNotes = (noteObj) => {
    let responce = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes', noteObj, headerConfig)
    console.log("delete Notes")
    return responce
}



