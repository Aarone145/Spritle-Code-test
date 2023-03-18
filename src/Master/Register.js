import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'


const Register = () => {

    const history = useHistory();



    const [formdata, setFormdata] = useState({
        name: '',
        email: '',
        password: ''
    })

    const [formErrors, setFormErrors] = useState({
        nameError: '',
        emailError: '',
        passwordError: ''
    })

    const localSignup = sessionStorage.getItem('email');

    const [showlogin, setShowLogin] = useState(false)

    useEffect(() => {
        if (localSignup) {
            setShowLogin(true)
        }
    }, [localSignup])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({ ...formdata, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formdata));
        if (formdata.name && formdata.email && formdata.password) {
            sessionStorage.setItem("name", formdata.name)
            sessionStorage.setItem("email", formdata.email)
            sessionStorage.setItem("password", formdata.password)
            sessionStorage.setItem("signUp", formdata.email)
            sessionStorage.setItem("user", formdata.user)
            alert("Account created successfully!!")
            window.location.reload()
        }
    }

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.name) {
            errors.nameError = "**Name is required!**";
        }
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
                showlogin ? history.push('/login') :

                    <div className='container'>
                        <div className='form-details'>
                            <h3 className='mb-4'>signUp Form</h3>
                            <form className='Registration-form' onSubmit={handleSubmit} >
                                <div className='form-group mb-3'>
                                    <input
                                        name='name'
                                        value={formdata.name}
                                        type='text'
                                        placeholder='Enter Your Name'
                                        onChange={handleChange}
                                    />

                                </div>
                                <small>{formErrors.nameError}</small>

                                <div className='form-group mb-3'>
                                    <input
                                        name='email'
                                        value={formdata.email}
                                        type='text'
                                        placeholder='Enter Your Email'
                                        onChange={handleChange}
                                    />

                                </div>
                                <small>{formErrors.emailError}</small>

                                <div className='form-group mb-3'>
                                    <input
                                        name='user'
                                        value='Master'
                                        checked={formdata.user === 'Master'}
                                        type='radio'
                                        onChange={handleChange}
                                    /> Master

                                    <input
                                        name='user'
                                        value='Student'
                                        checked={formdata.user === 'Student'}
                                        type='radio'
                                        onChange={handleChange}
                                    /> Student

                                </div>

                                <div className='form-group mb-3'>
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
                                    <button className='btn btn-primary register-btn' type='submit'>Register</button>
                                </div>


                            </form>
                            <p className='ms-0'>Already have a Account? <Link to='/login'>login</Link></p>
                        </div>





                    </div>
            }

        </section>
    )
}

export default Register
