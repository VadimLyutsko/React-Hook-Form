import React from 'react';
import './App.css';
import {useForm} from 'react-hook-form'

type SubmitType ={firstName?:string}

function App() {
    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
    } = useForm();

    const onSubmit = (data:SubmitType) => {
        console.log(typeof data)
        console.log( data)
        alert(JSON.stringify(data))
    }

    return (
        <div className={'App'}>
            <h1>React Hook Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <label >
                    First Name:
                    <input
                        {...register('firstName')}
                    />
                </label>


                <input type="submit"/>

            </form>
        </div>
    );
}

export default App;
