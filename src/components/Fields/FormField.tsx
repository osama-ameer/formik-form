import { TextField } from '@material-ui/core'
import { ErrorMessage, Field } from 'formik'
import React, { FC } from 'react'

interface FormFieldProps {
    name: string,
    label: string,
    type?: string
}

const FormField: FC<FormFieldProps> = ({ name, label, type = "text" }) => {
    return (
        <div style={{ alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <Field
                as={TextField}
                name={name}
                label={label}
                required
                type={type}
                helperText={<ErrorMessage name={name} />}
            />
        </div>
    )
}


export default FormField