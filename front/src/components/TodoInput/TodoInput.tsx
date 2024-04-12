import React, { useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import { addTodo } from '../store/Slice';
import styles from './TodoInput.module.css';
import { useForm, SubmitHandler } from 'react-hook-form';

type AddInput = {
    tittle: string,
    dateEnd: Date,
    exampleRequired: string
}

export const TodoInput: React.FC = () => {
    const dispatch = useAppDispatch();

    const [err, setErr] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<AddInput>()

    const onSubmit: SubmitHandler<AddInput> = (data) => {
        if (data.tittle === '') {
            setErr(true)
            return 
        }
        setErr(false)
        dispatch(addTodo({ id: Math.floor(Math.random()*10000), title: data.tittle, completed: false, dateStart: '11-04-2025', dateEnd: data.dateEnd.toString(), about: 'Нажми что бы изменить описание'}))
    };

    return (
        <div className={styles.inputWrapper}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <input 
                    {...register('tittle')} 
                    className={`${styles.input} ${err ? styles.error : null}`}
                    type="text" 
                    placeholder="Введите задачу"
                    />
                <input
                    {...register('dateEnd')}
                    className={styles.dateInput}
                    type="date"
                />
                <input type='submit' title='Добавить' className={styles.addButton}/>
            </form>
            {errors.exampleRequired && <span>This field is required</span>}
        </div>
    );
};
