import * as Yup from 'yup';

export const nameSchema = Yup.object({
    title: Yup.string()
        .required(),
    firstname: Yup.string()
        .max(20, "Must be 20 characters for name or less")
        .min(5, "must be 3 characters or more")
        .required("FirstName is required"),
    lastname: Yup.string()
        .max(20, "Must be 20 characters for name or less")
        .min(5, "must be 3 characters or more")
        .required("FirstName is required"),
    gender: Yup.string()
        .required("Gender required"),
    email: Yup.string()
        .email()
        .required("Email Required"),
    password: Yup.string()
        .required("Password is Required"),
    confirmpassword: Yup.string()
        .required("Confirm Password")
        .oneOf([Yup.ref('password'), null], 'Passwords must match')

});

export const addressSchema = Yup.object({
    address: Yup.string().required("Area Required"),
    city: Yup.string().required("city required"),
    country: Yup.string().required("Country Required"),
    state: Yup.string().required("State Required")
});

export const confirmSchema = Yup.object({
    confirm: Yup.boolean().required("Required ")
})