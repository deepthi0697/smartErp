import React from 'react'
import styled from 'styled-components'

function Input(props) {
    const { width='80%',variant,children, ...rest } = props
    const Input = styled.input`
    width: ${width};
    padding: 12px 20px;
    margin: 8px 0;
    border: 1px solid ${variant};
    border-radius: 4px;
  
    `
    return (
        
            <Input type='text' {...rest} />
        
    )
}

export default Input