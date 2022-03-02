import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card } from 'antd';
import './DataEvent.scss'

const Data = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3004/data').then(res => {
            setData(res.data)
        })
    }, [])

    return (
        <div className='data'>
            <h1>Data Event</h1>
            <ul type='none'>
                {
                    data && data.map(res => (
                        <li key={res.title}>
                            <Card>
                                <div className="card">
                                    <h1>{res.title}</h1>
                                    <p>Tanggal : {res.date}</p>
                                    <p>Location : {res.location}</p>
                                    <p>Participant : {res.participant}</p>
                                    <p>Note : {res.note}</p>
                                </div>
                            </Card>
                        </li>
                    )).reverse()
                }
            </ul>
        </div>
    )
}

export default Data