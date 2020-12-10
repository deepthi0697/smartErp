import Textarea from './textarea'

export default{
    title:'form/Textarea',
    compoent: Textarea
}

const Template = args => <Textarea {...args}/>

export const PostTextarea = Template.bind({})
