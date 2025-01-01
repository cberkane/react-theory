import { CSSProperties, FC, useEffect } from "react";
import { useForm } from "react-hook-form";


const errorStyle: CSSProperties = {
    color: 'red',
    fontSize: 12,
}

interface FormValues {
    username: string;
    email: string;
    age: number;
    birthDate: Date;
}

const SimpleForm: FC = () => {
    const { register, handleSubmit, reset, formState } = useForm<FormValues>({
        defaultValues: {
            username: "",
            email: "",
            age: 0,
            birthDate: null!,
        }
    });
    const { errors, isDirty, isSubmitSuccessful } = formState;

    const submitForm = (data: FormValues) => {
        console.log('data submitted', data);
    }

    useEffect(() => {
        if (isSubmitSuccessful) reset();
    }, [isSubmitSuccessful]);

    return (
        <div>
            <h2>Simple Form</h2>
            <form noValidate onSubmit={handleSubmit(submitForm)}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        {...register("username", {
                            required: {
                                value: true,
                                message: 'Champ requis',
                            }
                        })}
                    />
                    <p style={errorStyle}>{errors.username?.message}</p>
                </div>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        {...register("email", {
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: 'Ce champs doit correspondre à un mail',
                            }
                        })}
                    />
                    <p style={errorStyle}>{errors.email?.message}</p>
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        id="age"
                        {...register("age", {
                            valueAsNumber: true,
                            min: {
                                value: 18,
                                message: 'Site réservé aux plus de 18 ans'
                            }
                        })}
                    />
                    <p style={errorStyle}>{errors.age?.message}</p>
                </div>
                <div>
                    <label htmlFor="birthDate"></label>
                    <input
                        type="date"
                        id="birthDate"
                        {...register("birthDate", {
                            valueAsDate: true,
                        })}
                    />
                    <p style={errorStyle}>{errors.birthDate?.message}</p>
                </div>
                <button type="submit" disabled={!isDirty}>Envoyer</button>
            </form>
        </div>
    )
}

export default SimpleForm;