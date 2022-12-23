import NoteContext from "./noteContext";
import React, { useState } from 'react';

const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)


    // Get all notes
    const getNotes = async () => {
        // API call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhNDM1MzFmOTI1MTAwZjE0ZGI5MjkwIn0sImlhdCI6MTY3MTcxMzU5OH0.MS6befUfiVLVijHBUPwK_PrRbOW9ZEWmJ1WVsfwQEUk'
            }
        });
        const json = await response.json()
        console.log(json)
        setNotes(json)
    }
    // Add a note
    const addNote = async (title, description, tag) => {
        // API call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhNDM1MzFmOTI1MTAwZjE0ZGI5MjkwIn0sImlhdCI6MTY3MTcxMzU5OH0.MS6befUfiVLVijHBUPwK_PrRbOW9ZEWmJ1WVsfwQEUk'
            },
            body: JSON.stringify(title, description, tag)
        });

        // Logic to add note in client
        console.log("Adding a new note")
        const note = {
            "_id": "63a46bd24bb66f51d5b861c1e",
            "user": "63a43531f925100f14db9290",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2022-12-22T14:38:10.444Z",
            "__v": 0
        };
        setNotes(notes.concat(note))
    }

    // Delete a note
    const deleteNote = (id) => {
        console.log("Deleting the note with id" + id)
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)

    }

    // Edit a note
    const editNote = async (id, title, description, tag) => {
        // API call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNhNDM1MzFmOTI1MTAwZjE0ZGI5MjkwIn0sImlhdCI6MTY3MTcxMzU5OH0.MS6befUfiVLVijHBUPwK_PrRbOW9ZEWmJ1WVsfwQEUk'
            },
            body: JSON.stringify(title, description, tag)
        });
        const json = response.json();

        // Logic to edit in client
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }

        }
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;