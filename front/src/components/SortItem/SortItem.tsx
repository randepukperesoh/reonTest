import React from "react"
import styles from './SortItem.module.css'
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { changeSort } from "../store/Slice";
export const SortItem: React.FC = () => {

    const dispatch = useAppDispatch();

    const sort = useAppSelector(state => state.todos.sort)
    //className={`${styles.todoWrapper} ${completed ? styles.completedItem : ''}`
    return(
        <div className={styles.sortWrapper}>
            <div onClick={() => dispatch(changeSort('latest'))} className={`${styles.sortItem} ${sort === 'latest' ? styles.active : null}`}>По дате добавления</div>
            <div onClick={() => dispatch(changeSort('deadLine'))} className={`${styles.sortItem} ${sort === 'deadLine' ? styles.active : null}`}> По дате окончания</div>
            <div onClick={() => dispatch(changeSort('noneCompleted'))} className={`${styles.sortItem} ${sort === 'noneCompleted' ? styles.active : null}`}>Только не выполненные</div>
        </div>
    )
}