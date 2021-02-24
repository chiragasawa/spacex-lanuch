import React, { useState, useEffect } from 'react'
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive'


const Cards = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 500px)' })
const idValue=isTabletOrMobile?"mobile-view":""
    const apiUrl =
        "https://api.spacexdata.com/v3/launches?limit=100";
    const [loaded, setLoaded] = useState(false)
    const [apiData, setApiData] = useState([])
    const ddata = useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                setApiData(
                    data
                );
                console.log(data)
                setLoaded(true)
            });
    }, [])
    if (!loaded) {
        return <div className="loader-wrapper">
            <div className="loader">
                <p>loading</p>
            </div>
        </div>
    }
    else {
        return (
            <div>
                <Container fluid id= {idValue }>
                    <Row>
                        {apiData.map((data) => {
                            return (
                                <Col className='mt-4' md={6} sm={12} lg={4} xl={3}>
                                    <Card data={data} />
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Cards
