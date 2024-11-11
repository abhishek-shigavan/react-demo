import { useEffect, useState } from "react"
import { getAllNotesApiCall } from "../utils/Api"
import NoteCard from "./NoteCard"

function NotesContainer () {
    const[notesList, setNotesList] = useState([])
    useEffect(() => {
        //api call
        fetchData()
    }, [])

    const fetchData = async () => {
        const res = await getAllNotesApiCall()
        console.log(res);
        setNotesList(res?.data?.data?.data)
    }

    return (
        <>
            <h1>NotesContainer</h1>
            {notesList.map(noteObj => <NoteCard noteDetails={noteObj} />)}
        </>
    )
}

export default NotesContainer
