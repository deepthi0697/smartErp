import React from 'react'
import Button from '../Button/button'
import Input from './input'
export default {
    title: 'form/Input',
    component: Input,
}

export const Small = () => <Input variant='black' placeholder="small"/>
export const Medium = () => <Input variant='red'  placeholder="medium"/>
export const Large = () => <Input  variant='green'   placeholder="large"/>