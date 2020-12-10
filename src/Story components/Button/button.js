import React from 'react'
import styled from 'styled-components'


function Button(props) {
    const {margin='8px auto', textColor='black', variant = 'primary', children, ...rest } = props
    const Button = styled.button.attrs({
        className: `button ${variant}`
    })`
    border: none;
    color: ${textColor};
    padding: 10px 30px;
    text-align: centre;
    display: inline;
    font-size:16;
    border-radius: 4px;
    cursor: pointer;
    background-color: ${variant};
    margin: ${margin}
   `;
    return (
        <div>
            <Button className={`button ${variant}`} {...rest}>
                {children}
            </Button>
        </div>
    )
}

export default Button