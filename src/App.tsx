import React from 'react';
import './App.css';
import {useForm} from 'react-hook-form'

type SubmitType = {
    firstName?: string
    lastName?: string
}

function App() {
    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
    } = useForm({
        mode:'onBlur'
    });

    const onSubmit = (data: SubmitType) => {
        console.log(typeof data)
        console.log(data)
        alert(JSON.stringify(data))
    }

    return (
        <div className={'App'}>
            <h1>React Hook Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    First Name:
                    <input
                        {...register('firstName',
                            {
                                // required:true
                                required: 'Поле обязательно к заполнению',
                                minLength: {
                                    value: 4,
                                    message: 'Минимум 5 символов.'
                                }
                            })}
                    />
                </label>

                <div style={{height: '40'}}>
                    {errors?.firstName && <p>{`${errors?.firstName?.message}` || 'Error!'}</p>}
                </div>

                <label>
                    Last Name:
                    <input
                        {...register('lastName',
                            {
                                // required:true
                                required: 'Поле обязательно к заполнению',
                                minLength: {
                                    value: 4,
                                    message: 'Минимум 5 символов.'
                                }
                            })}
                    />
                </label>

                <div style={{height: '40'}}>
                    {errors?.lastName && <p>{`${errors?.lastName?.message}` || 'Error!'}</p>}
                </div>


                <input type="submit"/>
            </form>
        </div>
    );
}

export default App;
