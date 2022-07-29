import React from 'react'
import { Card, Container } from 'react-bootstrap'

export default function Notes({notes, setNotes}) {

  function deleteItem(id) {
     setNotes(notes.filter(n => n.id !== id));
  }

  return (
    <Container className="mt-3">
      {notes.length === 0 ? <h2>No notes are available!</h2> : notes?.map((note) => (
        <Card key={note.id} style={{ width: "18rem" }}>
          <Card.Body>
            <i
              className="fas fa-trash float-right"
              onClick={() => deleteItem(note.id)}
            ></i>
            <Card.Title>{note?.title}</Card.Title>
            <Card.Text>{note?.text}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}