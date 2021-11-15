import React from 'react';
import { Formik, Field, Form } from 'formik';
import { addressSchema } from '../schemas';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import FormField from '../Fields/FormField';
import { Button } from '@material-ui/core';

export const Address: React.FC<any> = ({ submit, setData, data }) => {

    return (
        <Formik
            initialValues={data}
            validationSchema={addressSchema}
            onSubmit={(values) => {
                submit(2)
                setData({ ...values, ...data })
            }}
        >
            {({ values, handleChange, handleBlur }) => (
                <Form>

                    <br />
                    <div style={{ justifyContent: "center", textAlign: "center" }}>
                        <label> Country</label> <br />
                        <Field
                            as={CountryDropdown}
                            defaultOptionLabel="Select Country"
                            classes="country"
                            name="country"
                            label="country"
                            value={values.country}
                            onChange={(_: any, e: any) => handleChange(e)}
                            onBlur={handleBlur} /><br /> <br />
                    </div>

                    <div style={{ justifyContent: "center", textAlign: "center" }}>
                        <label> State</label><br />
                        <Field
                            as={RegionDropdown}
                            classes="state"
                            label="state"
                            defaultOptionLabel="Select State"
                            name="state"
                            country={values.country}
                            value={values.state}
                            onChange={(_: any, e: any) => handleChange(e)} onBlur={handleBlur} /><br /> <br />
                    </div>

                    <FormField name="city" label="City" /> <br />
                    <FormField name="address" label="Address" /> <br />

                    <div style={{ justifyContent: "center", textAlign: "center" }}>
                        <Button onClick={() => { submit(0) }} variant="contained" color="primary">Back</Button> {` `}
                        <Button type="submit" variant="contained" color="primary">Next</Button>
                    </div>

                </Form>


            )}
        </Formik>
    );
};