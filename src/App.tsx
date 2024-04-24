import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';
import TodoList from './components/TodoList';
import { DragDropContext, DropResult } from 'react-beautiful-dnd'


const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    // if there is a todo to add
    if (todo) {
      setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}]);
      setTodo("");
    }
    
  };

  const onDragEnd = (result:DropResult) => {
    const { source, destination} = result;

    // if there is no droppable destination, we will return
    if (!destination) {
      return;
    }
    // if the source and destination are the same, we will return
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
    
    let add, active = todos, complete = completedTodos;

    if(source.droppableId === 'TodosList') {
      // if the source is the active list, we will remove the task from the active list
      add = active[source.index];
      // remove the task from the active list
      active.splice(source.index, 1);
    } else {
      // if the source is the completed list, we will remove the task from the completed list
      add = complete[source.index];
      // remove the task from the completed list
      complete.splice(source.index, 1);
    }

    if(destination.droppableId === 'TodosList') {
      // if the destination is the active list, we will add the task to the active list
      active.splice(destination.index, 0, add);
    } else {
      // if the destination is the completed list, we will add the task to the completed list
      complete.splice(destination.index, 0, add);
    }
    setCompletedTodos(complete);
    setTodos(active);

  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading">Taskify</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
    </div>
    </DragDropContext>
  );
}

export default App;
