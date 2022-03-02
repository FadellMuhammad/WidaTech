import { Button, Col, Row } from 'antd'
import React, { useState } from 'react'
import Form from './Component/FormEvent'
import Data from './Component/DataEvent'
import './Home.scss'

const Home = () => {
    const [content, setContent] = useState(<Form />);

    return (
        <div className='home'>
            <Row>
                <Col span={4}>
                    <div className='sidebar'>
                        <div className='sidebar-button'>
                            <Button type='primary' onClick={() => setContent(<Form />)}>
                                Form
                            </Button>
                            <Button type='primary' onClick={() => setContent(<Data />)}>
                                Data
                            </Button>
                        </div>
                    </div>
                </Col>
                <Col span={20}>
                    <div className='content'>
                        {content}
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Home