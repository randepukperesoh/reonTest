import React, { useState, useEffect } from 'react';
//import { Todo } from './Todo';
import { Todo, changeAbout, toggleTodoCompleted, deleteTodo } from '../store/Slice';
import { useAppDispatch } from '../store/hooks';
import styles from './TodoItem.module.css';
import del from '../../assets/delete.svg'

export const TodoItem: React.FC<Todo> = ({ id, title, completed, dateEnd, dateStart, about }) => {
    const dispatch = useAppDispatch();
    const [progress, setProgress] = useState<number>(30);
    const [focus, setFocus] = useState<boolean>(false);

    useEffect(() => {
        const startDate = new Date(dateStart).getTime();
        const endDate = new Date(dateEnd).getTime();
        const currentDate = new Date().getTime();

        const totalDuration = endDate - startDate;
        const currentDuration = currentDate - startDate;
        console.log(totalDuration, currentDuration )
        const currentProgress = Math.floor((currentDuration / totalDuration) * 100);
        setProgress(currentProgress);
        if(currentProgress < 0 || currentProgress > 100) { setProgress(100)}
    }, []);
    
    return (
        <div className={`${styles.todoWrapper} ${completed ? styles.completedItem : ''}`}>
            <div className={styles.todoText}>{title}</div>
            {focus ? <input
                        defaultValue={about}
                        onBlur={()=>setFocus(false)}
                        className={styles.aboutInput}
                        onChange={(e) => dispatch(changeAbout({ id: id, text: e.target.value }))}
                        type="text" /> : <div className={styles.about} onClick={() =>setFocus(true)}>{about}</div>} 
            
            <div className={styles.todoStartDate}>Начало: {dateStart} </div>
            <div className={styles.todoEndDate}>Конец: {dateEnd}</div>
            {!completed && <div className={styles.progressBar}>
                <div 
                    className={styles.progressFill}
                    style={{ width: `${progress > 100 ? 100 : progress}%`, backgroundColor: progress >= 100 ? 'rgb(236, 250, 36)' : 'rgb(207, 162, 248)' }}>
                </div>
            </div>}
            <div className={styles.selectorsDiv}>
                <input
                type="checkbox"
                checked={completed}
                onChange={() => dispatch(toggleTodoCompleted(id))}
                className={styles.checkbox}
            />
            <img className={styles.img} src={del} width={20} onClick={() => dispatch(deleteTodo(id))}/>
            </div>
            
        </div>
    );
};
