import React from 'react';

const notes = [
  {
    id: '4e81fc6e-bfb6-419b-93e5-0242fb6f3f6a',
    task: 'Learn React'
  },
  {
    id: '11bbffc8-5891-4b45-b9ea-5c99aadf870f',
    task: 'Do laundry, for free!'
  },
  {
    id: '12bbffc8-5891-4b45-b9ea-5c99aadf870f',
    task: 'Master the guitar!'
  },
  {
    id: '13bbffc8-5891-4b45-b9ea-5c99aadf870f',
    task: 'Build apps!'
  },
  {
    id: '14bbffc8-5891-4b45-b9ea-5c99aadf870f',
    task: 'Go on tour!'
  }
];

export default () => (
  <ul>{notes.map(note =>
    <li key={note.id}>{note.task}</li>
  )}
  </ul>
)
