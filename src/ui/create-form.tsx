import React, { useState } from 'react';
import Checkbox from './checkbox';

const CreateForm = () => {
  const [completed, setCompleted] = useState(false);
  const [description, setDescription] = useState('');

  const save = () => {
    setCompleted(false);
    setDescription('');
  };

  return (
    <form
      onSubmit={save}
      className='bg-card text-card-foreground relative mb-8 flex rounded-lg shadow-lg md:rounded'
    >
      <Checkbox
        checked={completed}
        onChange={setCompleted}
        className='absolute left-6 top-1/2 -translate-y-1/2'
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type='text'
        className='text-card-foreground w-full border-none bg-transparent py-5 pl-16 pr-6 focus:outline-none'
        placeholder='Create a new todo...'
      />
    </form>
  );
};

export default CreateForm;
