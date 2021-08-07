import React from 'react'
import {Container} from 'reactstrap'
import '../assets/css/Filter.css'

export default function Filter() {
    return (
        <Container>
            <div className="filter-header d-flex justify-content-between align-items-center">
                <div>
                    <img src={require('../assets/imgs/filter.png').default} className="me-2"/>
                    <span>Filter</span>
                </div>
                <div className="d-flex">
                    <img className="me-4" src={require('../assets/imgs/list-item.png').default}/>
                    <img src={require('../assets/imgs/group-item.png').default}/>
                </div>
                <div>
                    <span className="best-seller me-1">Bestseller</span>
                    <img src={require('../assets/imgs/down-arrow.png').default}/>
                </div>
            </div>
        </Container>
    )
}
