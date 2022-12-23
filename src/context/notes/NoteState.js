import NoteContext from "./noteContext";
import React, { useState } from 'react';

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "63a462b797d7914d9a8b1350",
            "user": "63a43531f925100f14db9290",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2022-12-22T13:59:19.174Z",
            "__v": 0
        },
        {
            "_id": "63a46bd24bb66f51db861c1e",
            "user": "63a43531f925100f14db9290",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2022-12-22T14:38:10.444Z",
            "__v": 0
        },
        {
            "_id": "63a46bd24bb66f51db861c20",
            "user": "63a43531f925100f14db9290",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2022-12-22T14:38:10.618Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesInitial)

    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;