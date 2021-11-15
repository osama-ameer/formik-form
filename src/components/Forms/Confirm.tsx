import React from 'react';
import { Formik, Field, Form, FormikProps } from 'formik';
import { confirmSchema } from '../schemas';
import { Button, Checkbox } from '@material-ui/core';

export const Confirm: React.FC<any> = ({ submit, data, setData }: any) => {
    return (
        <Formik
            initialValues={data}

            validationSchema={confirmSchema}

            onSubmit={(values) => {
                submit(3)
                setData({ ...values, ...data })
            }}
        >
            {(formik: FormikProps<any>) => (
                <Form>
                    <div style={{ justifyContent: "center", textAlign: "center" }}>
                        <h2>Personal Information</h2>
                        <p> Name : {` ${data.firstname} ${data.lastname}`} </p>
                        <p> Gender : {data.gender}</p>
                        <p> Email : {data.email}</p>
                        <br />

                        <h2> Address information</h2>
                        <p> Address : {`${data.address}, ${data.city}, ${data.country}`}</p>
                        <br />
                        <br />
                        <label>Confirm</label>{`${" "}`}

                        <Field as={Checkbox} name="confirm" color="primary" />


                        <br />
                        <br />
                        <br />

                        <Button color="primary" variant="contained" onClick={() => (submit(1))}>Back</Button>
                        {' '}

                        {formik.values.confirm ? <Button color="primary" variant="contained" type="submit">Confirm</Button> : ""}
                    </div>
                </Form>
            )}

        </Formik>
    );
};