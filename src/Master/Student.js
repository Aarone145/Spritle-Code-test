import React from 'react'
import { useHistory } from 'react-router';
import '../App.css'

const Student = () => {

    const data = localStorage.getItem('Result');

    let storearry = []

    if(data) {
        storearry = JSON.parse(data);
    }

    console.log(storearry)

    const history = useHistory();

    const logout = () => {
        history.push('/login')

    }


    return (
        <>
        <button className='logbtn' onClick={logout}>Logout</button>
        <div className='student'>
            <h3>Output From Master</h3>
            <ul>
                {
                    storearry.map((ele,index) => {
                        return <li key={index}>
                            {ele.name} ------- {ele.value}
                        </li>
                    })
                }
            </ul>
        </div>
        </>
    )
}

export default Student
