import React, { useState } from 'react'
import { useHistory } from 'react-router'
import '../App.css'

const Master = () => {

    window.zero = function Zero(params) {
        if (params) {
            return eval(`0 ${params}`)
        }

        return 0;
    }

    window.one = function One(params) {
        if (params) {
            return eval(`1 ${params}`)
        }

        return 1;
    }

    window.two = function Two(params) {
        if (params) {
            return eval(`2 ${params}`)
        }

        return 2;
    }

    window.three = function Three(params) {
        if (params) {
            return eval(`3 ${params}`)
        }

        return 3;
    }

    window.four = function Four(params) {
        if (params) {
            return eval(`4 ${params}`)
        }

        return 4;
    }
    window.five = function Five(params) {
        if (params) {
            return eval(`5 ${params}`)
        }

        return 5;
    }

    window.six = function Six(params) {
        if (params) {
            return eval(`6 ${params}`)
        }

        return 6;
    }

    window.seven = function Seven(params) {
        if (params) {
            return eval(`7 ${params}`)
        }

        return 7;
    }

    window.eight = function Eight(params) {
        if (params) {
            return eval(`8 ${params}`)
        }

        return 8;
    }

    window.nine = function Nine(params) {
        if (params) {
            return eval(`9 ${params}`)
        }

        return 9;
    }

    window.times = function times(num) {
        return `* ${num} `
    }

    window.divided_by = function divided_by(num) {
        return `/ ${num} `
    }

    window.plus = function Plus(num) {
        return `+ ${num} `
    }

    window.minus = function minus(num) {
        return `- ${num} `
    }

    const [value, setvalue] = useState({
        num1: 'zero',
        operator: 'plus',
        num2: 'zero'
    })

    const handleclick = () => {
        let result = window[value.num1](window[value.operator](window[value.num2]()));
        let dyFunctionName = `${value['num1']}(${value['operator']}(${value['num2']}()))`;
        let DBValue = localStorage.getItem('Result')
        if (DBValue && DBValue.length !== 0) {
            DBValue = JSON.parse(DBValue);
            DBValue.push({
                name: dyFunctionName,
                value: result
            })
        } else {
            DBValue = [{
                name: dyFunctionName,
                value: result
            }]
        }
        localStorage.setItem("Result", JSON.stringify(DBValue));
    }

    const handleChange = (e) => {
        setvalue(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const history = useHistory()

    const logout = () => {
        history.push('/login')

    }

    return (
        <>
        <h1 className='d-flex justify-content-center'>Master Control</h1>
        <button className='logbtn' onClick={logout}>Logout</button>
        <div className='master'>
            
            <label>Number1:</label>
            <select name='num1' onChange={(e) => handleChange(e)}>
                <option value='zero'>zero</option>
                <option value='one'>one</option>
                <option value='two'>two</option>
                <option value='three'>three</option>
                <option value='four'>four</option>
                <option value='five'>five</option>
                <option value='six'>six</option>
                <option value='seven'>seven</option>
                <option value='eight'>eight</option>
                <option value='nine'>nine</option>
            </select>
            <label>operator:</label>
            <select name='operator' onChange={(e) => handleChange(e)}>
                <option value='plus'>plus</option>
                <option value='divided_by'>divided_by</option>
                <option value='times'>times</option>
                <option value='minus'>minus</option>
            </select>
            <label>Number2:</label>
            <select name='num2' onChange={(e) => handleChange(e)}>
                <option value='zero'>zero</option>
                <option value='one'>one</option>
                <option value='two'>two</option>
                <option value='three'>three</option>
                <option value='four'>four</option>
                <option value='five'>five</option>
                <option value='six'>six</option>
                <option value='seven'>seven</option>
                <option value='eight'>eight</option>
                <option value='nine'>nine</option>
            </select>
            
            <button onClick={handleclick}>Get value</button>
        </div>
        </>


    )
}

export default Master
