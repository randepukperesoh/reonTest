import { TodoItem } from "../TodoItem/TodoItem";
import { useAppSelector } from "../store/hooks"


export const TodoList: React.FC = () => {
    const todos = useAppSelector( state => state.todos.list);
    const sort = useAppSelector( state => state.todos.sort);
    
    const sortTodosByDateAdded = () => {
        return todos.slice().sort((a, b) => new Date(a.dateStart).getTime() - new Date(b.dateStart).getTime());
    }
    
    const sortTodosByDateEnd = () => {
        return todos.slice().sort((a, b) => new Date(a.dateEnd).getTime() - new Date(b.dateEnd).getTime());
    }
    
    const filterTodosNotCompleted = () => {
        return todos.filter(todo => !todo.completed);
    }

    const sortedTodos = () => {
        if (sort === 'latest') {
            return sortTodosByDateAdded();
        } else if (sort === 'deadLine') {
            return sortTodosByDateEnd();
        } else if (sort === 'noneCompleted') {
            return filterTodosNotCompleted();
        } else {
            return todos;
        }
    }

    const sortedList = sortedTodos();

    return(
        <div>
            {sortedList.map( todo => { return <TodoItem {...todo} key={todo.id}/>})}
        </div>
    )
}