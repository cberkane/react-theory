import { FC } from "react";
import { useForm, useFieldArray } from "react-hook-form";

interface FormValues {
    urls: { value: string }[];
}

const DynamicForm: FC = () => {
    const { register, handleSubmit, control } = useForm<FormValues>({
        defaultValues: { urls: [{ value: '' }] }
    });
    const { fields, append } = useFieldArray({ name: "urls", control });

    const submitForm = (data: FormValues) => {
        console.log('submitted data', data);
    }

    return (
        <div>
            <p>Dynamic form</p>
            <form noValidate onSubmit={handleSubmit(submitForm)}>
                {fields.map((field, index) => (
                    <div key={field.id}>
                        <input type="text" {...register(`urls.${index}.value`)} />
                    </div>
                ))}
                <button type="submit">Envoyer</button>
            </form>
            <button onClick={() => append({ value: '' })}>+</button>
        </div>
    );
}

export default DynamicForm;