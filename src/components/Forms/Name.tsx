import React from 'react';
import { Formik, Form } from 'formik';
import SelectField from '../Fields/SelectField';
import { nameSchema } from '../schemas';
import FormField from '../Fields/FormField';
import { Button } from '@material-ui/core';

export const Name: React.FC<any> = ({ submit, data, setData }) => {
    return (
        <Formik
            initialValues={data}
            onSubmit={(values) => {
                submit(1)
                setData({ ...values, ...data })
                console.log(values);

            }}
            validationSchema={nameSchema}
        >


            <Form>
                <SelectField name="title" label="Title" options={["Mr.", "Ms.", "Dr.", "Engr"]} /><br />
                <FormField name="firstname" label="Enter your first name" /><br />
                <FormField name="lastname" label="Enter your last name" /><br />
                <SelectField name="gender" label="Gender" options={["Male.", "Female", "NotSure"]} /><br />
                <FormField name="email" label="Enter your Email Address" type="email" /><br />
                <FormField name="password" label="Password" type="password" /><br />
                <FormField name="confirmpassword" label="Confirm Password" type="password" /><br />
                <div style={{ justifyContent: "center", textAlign: "center" }}>
                    <Button type="submit" variant="contained" color="primary" >Next</Button>
                </div>
            </Form>

        </Formik>
    );
};