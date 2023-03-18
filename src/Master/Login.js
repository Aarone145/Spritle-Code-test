import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'


const Login = () => {


    const history = useHistory()


    const [formdata, setFormdata] = useState({
        email: '',
        password: '',
        user: ''
    })

    const [formErrors, setFormErrors] = useState({
        emailError: '',
        passwordError: ''
    })

    const [showhome, setShowHome] = useState(false)

    const localemail = sessionStorage.getItem('email');
    const localpassword = sessionStorage.getItem('password')
    const localuser = sessionStorage.getItem('user')


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({ ...formdata, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formdata));


        if (formdata.email === localemail && formdata.password === localpassword && formdata.user === localuser) {
            sessionStorage.setItem("signUp", formdata.email)
            setShowHome(true);
        } else {
            alert('Please Enter valid credential')
        }

    }

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.email) {
            errors.emailError = "**Email is required!**";
        } else if (!regex.test(values.email)) {
            errors.emailError = "**This is not a valid email format!**";
        }
        if (!values.password) {
            errors.passwordError = "**Password is required**";
        } else if (values.password.length < 4) {
            errors.passwordError = "**Password must be more than 4 characters**";
        } else if (values.password.length > 10) {
            errors.passwordError = "**Password cannot exceed more than 10 characters**";
        }


        return errors;
    }


    return (
        <section className='mb-5'>

            {
                showhome ? (formdata.user === 'Master' ? history.push('/master') : history.push('/student')) :


                    <div className='container'>

                        <div className='form-details'>
                            <h3 className='mb-3'>Login Form</h3>
                            <form className='Registration-form' onSubmit={handleSubmit} >

                                <div className='form-group mb-2'>
                                    <input
                                        name='email'
                                        value={formdata.email}
                                        type='text'
                                        placeholder='Enter Your Email'
                                        onChange={handleChange}
                                    />

                                </div>
                                <small>{formErrors.emailError}</small>

                                <div className='form-group mb-2'>
                                    <input
                                        name='user'
                                        value='Master'
                                        checked={formdata.user === 'Master'}
                                        type='radio'
                                        onChange={handleChange}
                                    /> Master
                                    {"   "}
                                    <input
                                        name='user'
                                        value='Student'
                                        checked={formdata.user === 'Student'}
                                        type='radio'
                                        onChange={handleChange}
                                    /> Student

                                </div>

                                <div className='form-group mb-2'>
                                    <input
                                        name='password'
                                        value={formdata.password}
                                        type='password'
                                        placeholder='******'
                                        onChange={handleChange}
                                    />

                                </div>
                                <small>{formErrors.passwordError}</small>

                                <div className='form_btn'>
                                    <button className='btn btn-primary register-btn' type='submit'>Login</button>
                                </div>


                            </form>
                            <p className='ms-0'>Don't have an Account? <Link to='/register'>Sign up</Link></p>
                        </div>



                    </div>
            }

        </section>
    )
}

export default Login
