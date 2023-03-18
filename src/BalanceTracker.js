import React, { useState } from 'react'

const BalanceTracker = () => {

    const [amount, SetAmount] = useState(0)
    const [Expense, SetExpense] = useState('')
    const [Transcation, setTranscation] = useState([])


    const handleAdd = () => {
        if (amount >= 0) {
            SetExpense(Number(+amount + +Expense));

            const newTranscation = {
                time: new Date().toISOString(),
                value: amount,
                operation: 'Add'
            }

            setTranscation([...Transcation, newTranscation])

            SetAmount(0)
        }
    }

    const handleRemove = () => {
        if (amount >= 0) {
            SetExpense(Number(+Expense - +amount));

            const newTranscation = {
                time: new Date().toISOString(),
                value: amount,
                operation: 'Remove'
            }

            setTranscation([...Transcation, newTranscation])

            SetAmount(0)
        }
    }

    return (
        <div className='balance'>
            <h2 className='mb-3'>Balance : {Expense}</h2>
            <input
                type='number'
                placeholder='Amount'
                value={amount}
                onChange={(e) => SetAmount(e.target.value)}
            />
            <div className='mt-3 mb-3'>
                <button onClick={handleAdd}>Add</button>
                <button onClick={handleRemove}>Remove</button>
            </div>
            <br/>
            <h3 className='mb-3'>Transcation</h3>
            <ul>
                {
                    Transcation.map((ele) => {
                        return <li>
                            {`${ele.time}-${ele.value}-${ele.operation}`}
                        </li>

                    })
                }
            </ul>
        </div>
    )
}

export default BalanceTracker
