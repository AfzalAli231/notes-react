import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap';
import uniqid from 'uniqid';

export default function Create({ setNotes, notes }) {
  const [id, setId] = useState(uniqid())
  const [form, setForm] = useState({ title: "", text: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value, id });
  };

  function addNote() {
    if(form.title || form.text !== '') {
    setNotes(note => [...note, form]);
    setId(uniqid())
    setForm({ title: "", text: "" });
    }
  };

  return (
    <Container>
      <Form className="mt-3" style={{ width: "50%" }}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={form.title}
            name="title"
            onChange={handleChange}
            type="text"
            placeholder="Enter Title"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Text</Form.Label>
          <Form.Control
            value={form.text}
            onChange={handleChange}
            type="text"
            name="text"
            placeholder="Enter Text"
          />
        </Form.Group>
      </Form>
        <button onClick={addNote} className="btn btn-dark">
          Add Note
        </button>
    </Container>
  );
}