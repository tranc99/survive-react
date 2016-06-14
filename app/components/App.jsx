import React from 'react';
import uuid from 'uuid';
import Notes from './Notes';

const notes = [
  {
    id: uuid.v4(),
    task: 'Learn React'
  },
  {
    id: uuid.v4(),
    task: 'Do laundry, for free!'
  },
  {
    id: uuid.v4(),
    task: 'Master the guitar!'
  },
  {
    id: uuid.v4(),
    task: 'Build apps!'
  },
  {
    id: uuid.v4(),
    task: 'Go on tour!'
  }
];

export default () => (
  <div>
    <button onClick={() => console.log('add note')}>+</button>
    <Notes notes={notes} />
  </div>
);
