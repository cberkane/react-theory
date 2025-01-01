import { FC } from "react";
import { useForm } from "react-hook-form";

interface FormValues {
    nested: {
        field1: string;
        field2: string;
    }
}

const NestedForm: FC = () => {
    const { register, handleSubmit } = useForm<FormValues>();

    const submitForm = (data: FormValues) => {
        console.log('submit nested data', data);
    }

    return (
        <div>
            <p>Nested form</p>
            <form noValidate onSubmit={handleSubmit(submitForm)}>
                <div>
                    <label htmlFor="field1">Field 1</label>
                    <input type="text" id="field1" {...register("nested.field1")} />
                </div>
                <div>
                    <label htmlFor="field2">Field 2</label>
                    <input type="text" id="field2" {...register("nested.field2")} />
                </div>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
}

export default NestedForm;