import React from 'react'
import Button from './button'

export default {
    title: 'form/Button',
    component: Button,
    argTypes:{
        variant: {control:'text'},
        children: {control: 'text'},
        onClick: {action: 'clicked'}
    }
}

// export const Primary = () => <Button variant="blue">primary</Button>
// export const Secondary = () => <Button variant="gray">secondary</Button>
// export const Success = () => <Button variant="green">success</Button>
// export const Danger = () => <Button variant="red">danger</Button>

const Template = args => <Button {...args}/>

export const PrimaryA = Template.bind({})
PrimaryA.args = {
    variant: 'blue',
    children: 'Primary A'
}

export const SecondaryA = Template.bind({})
SecondaryA.args = {
    variant: 'gray',
    children: 'Secondary A'
}