import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
//  const validate = values =>{
//         var errors = {};
//         if(!values.userName){
//             errors.userName = 'User name is required';
//         }
//         return errors;
//     }
export const Login = ()=>{

    const formik = useFormik({
        initialValues:{
            userName: '',
            password: ''
        },
        
        validationSchema: yup.object({
            userName:yup.string()
            .required('Username is required')
            .email(),
            password: yup.string()
            .required("Password is required")
        }),

        onSubmit: (userInputData)=> {
            console.log(userInputData);
        }
    })

    return(
        <div>
            <form className= "form-group" onSubmit= {formik.handleSubmit}>
                <label>Username </label>
                <input className= "form-control" type="text" autoComplete= "off" name="userName" onChange= {formik.handleChange} value= {formik.values.userName} placeholder="Enter your email" autoComplete="off"/>
                {formik.errors.userName? (<p className="text-danger">{formik.errors.userName}</p>): null}
                
                <label>Password</label>
                <input className= "form-control" type="password" name="password" onChange={ formik.handleChange } value= {formik.values.password} placeholder ="Enter your Password" autoComplete= "off" />
                {formik.errors.password? (<p className="text-danger"> { formik.errors.password } </p>): null}    
                <button> Submit </button>
            </form>
        </div>
    );
}