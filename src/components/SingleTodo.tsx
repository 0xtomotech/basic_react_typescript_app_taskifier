import React, { useEffect, useRef, useState } from 'react';
import { Todo } from '../model';
import { MdDelete, MdEdit } from 'react-icons/md';
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import './styles.css';
import { Draggable } from 'react-beautiful-dnd';


// using type, = needed
type Props = {
    index: number;
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;

}

const SingleTodo = ({index, todo, todos, setTodos}: Props) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    const handleDone = (id: number) => {
        setTodos(todos.map((todo) =>
            // if the todo.id matches the id, we will toggle the isDone property
            todo.id === id ? {...todo, isDone: !todo.isDone} : todo
        ));
    };

    const handleDelete = (id: number) => {
        // if todo.id does not match the id, we will keep the todo
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(todos.map((todo) =>
            todo.id === id ? {...todo, todo: editTodo} : todo
        ));
        setEdit(false);
    };

    const inputRef = useRef<HTMLInputElement>(null);

    // whenever edit changes, we will focus on the input field
    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);

    return (
        <Draggable draggableId={todo.id.toString()} index={index}>
            {
                (provided) => (
                    <form
                        className='todo__single'
                        onSubmit={(e) => handleEdit(e, todo.id)}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        {
                            edit
                                ? (<input
                                    value={editTodo}
                                    onChange={(e) => setEditTodo(e.target.value)}
                                    className='todo__single--text'
                                    ref={inputRef}
                                />)
                                : (
                                    todo.isDone
                                        ? (<s className='todo__single--text'>{todo.todo}</s>)
                                        : (<span className='todo__single--text'>{todo.todo}</span>)
                                )
                        }

                        <div>
                            <span className="icon" onClick={() =>
                                {if (!edit && !todo.isDone) {
                                    setEdit(!edit);
                                }}
                            }>
                                <MdEdit />
                            </span>
                            <span className="icon" onClick={() => handleDelete(todo.id)}>
                                <MdDelete />
                            </span>
                            <span className="icon" onClick={() => handleDone(todo.id)}>
                                <IoCheckmarkDoneCircle />
                            </span>
                        </div>
                    </form>
                )
            }
            
        </Draggable>
        
    )
}

export default SingleTodo;
