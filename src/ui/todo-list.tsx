import React, { useState, useEffect } from 'react';
import TodoRow from '@/ui/todoRow';
import { Todo } from '@/models/todo';
import { TODO_MOCK } from '@/models/todo.mock';

const TodoList = () => {
  const [todos] = useState<Todo[]>(TODO_MOCK);

  useEffect(() => {
    //   // Assuming TodoState.filteredTodos is a function that returns a promise
    //   TodoState.filteredTodos().then(setTodos);
  }, []);

  if (todos.length === 0) {
    return (
      <div className='border-border border-b p-6 text-center'>
        Create a todo and start being productive! 🤓
      </div>
    );
  }

  return (
    <div>
      {todos.map((todo) => (
        <TodoRow key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
