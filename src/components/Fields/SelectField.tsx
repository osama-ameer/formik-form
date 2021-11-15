import { FormControl, InputLabel, Select } from '@material-ui/core'
import { Field } from 'formik'
import React, { FC } from 'react'

interface SelectFieldProps {
    name: string,
    label: string,
    options: string[]
}

const SelectField: FC<SelectFieldProps> = ({ name, label, options }) => {
    return (
        <div style={{ alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-gender-native-simple">{label}</InputLabel>
                <Field
                    as={Select}
                    name={name}
                    native
                    variant="outlined"
                    label={label}
                    id="outlined-gender-native-simple"
                    autoWidth
                >
                    <option aria-label="None" value="" />
                    {options.map((option, index) => (
                        <option key={index} value={option}> {option} </option>
                    ))}

                </Field>
            </FormControl>
        </div>
    )
}

export default SelectField