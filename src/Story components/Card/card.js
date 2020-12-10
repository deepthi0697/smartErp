import React from 'react'
import styled from 'styled-components'
import ReactHtmlParser from 'react-html-parser'

function Card(props) {
    const { description = '', title = '', children, ...rest } = props
    const CardBody = styled.div.attrs({
        className: 'card-body'
    })`
    width: 250px;
    border: 10px solid thistle;
    padding: 10px;
    background-color: aliceblue`
    const CardTitle = styled.h3`
    margin-bottom: .75rem;
    margin-top: 0.15rem
    font-size: 4rem;`
    return (
        <CardBody>
            <CardTitle>{title}</CardTitle>
            <div>{ReactHtmlParser(description)}</div>
        </CardBody>
    )
}

export default Card