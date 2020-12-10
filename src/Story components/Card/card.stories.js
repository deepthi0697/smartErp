import Card from './card'

export default {
    title: "form/Card",
    component: Card
}

// const Template = args => <Card {...args}/>

// export const postCard = () => Template.bind({})
// postCard.args= {
//     title: "About me",
//     description: "Have a good day"
// }

export const postDes = () => <Card title='about me' description ='idk'></Card>