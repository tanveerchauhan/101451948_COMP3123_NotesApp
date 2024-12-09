import React, { useState } from 'react';
import './App.css';

function App() {
    const [note, setNote] = useState('');
    const [notes, setNotes] = useState([]);

    const handleAddNote = () => {
        if (note.trim()) {
            setNotes([...notes, note]);
            setNote('');
        } else {
            alert("You can't add an empty note!");
        }
    };

    const handleDeleteNote = (index) => {
        const newNotes = notes.filter((_, i) => i !== index);
        setNotes(newNotes);
    };

    return (
        <div className="container">
            <h1>Hacker Notes</h1>
            <div className="add-note-form">
                <input
                    type="text"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Enter a note..."
                />
                <button onClick={handleAddNote}>Add Note</button>
            </div>
            <ul className="note-list">
                {notes.map((note, index) => (
                    <li key={index} className="note-item">
                        {note}
                        <button onClick={() => handleDeleteNote(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
