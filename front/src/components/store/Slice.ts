import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Todo = {
    id: number;
    title: string,
    completed: boolean,
    dateStart: string,
    dateEnd: string,
    about: string
}
type TodosState = {
    list: Todo[],
    sort: string,
}
type changeAboutType = {
    text: string,
    id: number
}
const initialState: TodosState = {
    list: [],
    sort: 'none'
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<Todo>) {
            const dateStart: Date = new Date();
            state.list.push({
                id: action.payload.id,
                title: action.payload.title,
                completed: false,
                dateStart: `${dateStart.getFullYear()}-${dateStart.getMonth()}-${String(dateStart.getDate()).padStart(2, '0')}`,
                dateEnd: action.payload.dateEnd,
                about: action.payload.about
            })
            fetch('http://localhost:3000/postTodos', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(action.payload)
            })
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            .then(data => {
              console.log('Response from server:', data);
            })
            .catch(error => {
              console.error('There was a problem with your fetch operation:', error);
            });
            
        },
        deleteTodo(state, action: PayloadAction<number>) {
            state.list = state.list.filter( todo => {
                if (!(todo.id == action.payload)) {
                    return todo
                }
            }) 
            fetch('http://localhost:3000/deleteTodos', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({id: action.payload})
            })
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            .then(data => {
              console.log('Response from server:', data);
            })
            .catch(error => {
              console.error('There was a problem with your fetch operation:', error);
            });
        },
        toggleTodoCompleted(state, action: PayloadAction<number>) {
            state.list = state.list.map( todo => {
                if (todo.id == action.payload) {
                    return { ...todo,
                        completed: !todo.completed,
                    }
                } else {
                    return todo
                }
                
            })
            
        },
        changeSort( state, action: PayloadAction<string>) {
            if (state.sort === action.payload) {
                state.sort = 'none'
            }
            else {
                state.sort = action.payload
            }
        },
        changeAbout ( state, action: PayloadAction<changeAboutType> ) {
            state.list[action.payload.id].about = action.payload.text;
            fetch('http://localhost:3000/changeTodoAbout', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: action.payload.id,
                    text: action.payload.text
                })
            })
        },
        getInitialStore (state, action: PayloadAction<Todo[]>) {
            state.list = action.payload.map(todo => todo)
        },
    }
})

export const { addTodo, toggleTodoCompleted, changeSort, changeAbout, getInitialStore, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;