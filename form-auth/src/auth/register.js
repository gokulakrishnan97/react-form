import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

export const Register = ()=>{
    const formik = useFormik({
        initialValues:{
            firstName:'',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: yup.object({
            firstName: yup.string()
            .required("Firstname is required"),
            lastName: yup.string()
            .required("Lastname is required"),
            email: yup.string()
            .email()
            .required("Email is required"),
            password:yup.string()
            .required("Password is required"),
            confirmPassword: yup.string()
            .oneOf([yup.ref('password'), null], 'Password and Confirm Password must be same')
            .required('Confirm Password is required')
        }),
        onSubmit: (userInputData) => {
            console.log(userInputData);
        }
    })

    return(<div className= "container">
            <form onSubmit={formik.handleSubmit}>
                <div className= "form-group">
                <label>FirstName</label>
                <input type="text" className="form-control" name="firstName" onChange={formik.handleChange} value={formik.values.firstName} autoComplete="off" />
                {formik.errors.firstName? <p className= "text-danger"> {formik.errors.firstName} </p>: null}
                
                <label>LastName</label>
                <input type="text" className="form-control" name="lastName" onChange={ formik.handleChange } value = { formik.values.lastName} autoComplete="off" />
                {formik.errors.lastName? <p className="text-danger">{ formik.errors.lastName }</p>: null}

                <label>Email</label>
                <input type= "text" className="form-control" name="email" onChange={ formik.handleChange } value= { formik.values.email } autoComplete= "off" />
                {formik.errors.email? <p className="text-danger">{formik.errors.email}</p>: null}

                <label>Password</label>
                <input type= "password" className="form-control" name="password" onChange= { formik.handleChange } value = {formik.values.password} autoComplete= "off" />
                {formik.errors.password? <p className="text-danger">{formik.errors.password}</p>: null}

                <label>Confirm Password</label>
                <input type= "password" className="form-control" name="confirmPassword" onChange= {formik.handleChange} value={formik.values.confirmPassword} autoComplete= "off" />
                {formik.errors.confirmPassword? <p className="text-danger">{ formik.errors.confirmPassword }</p>: null}
                <button>Submit</button>

                </div>
            </form> 
           </div>)
}

