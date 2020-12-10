import React from 'react'
import {connect} from 'react-redux'
import {AddPost} from '../actions/postAction'
import Input from '../Story components/Input/input'
import Textarea from '../Story components/Textarea/textarea'
import Button from '../Story components/Button/button'
import debounce from 'lodash/debounce'

class NewPost extends React.Component{
    constructor(){
        super()
        this.state = {
            title: '',
            postDes: '',
            errors: {},
            isMounted: true
        }
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            id: this.props.posts.length + 1,
            title: this.state.title,
            postDes: this.state.postDes
        }
        if(this.handleValidation()){
            this.props.dispatch(AddPost(formData))
         }else{
            alert("Form has errors.")
         }    
    }
    
    handleValidation(){
        let errors = {}
        let formIsValid = true
        if(!this.state.title){
            formIsValid=false
            errors["title"]="Title cannont be empty!!"
        }
        if(!this.state.postDes){
            formIsValid=false
            errors["postDes"]="Post Description cannont be empty!!!"
        }
        this.setState({errors})
        return formIsValid
    }
  
    handleTextChange = debounce((e, editor) => {
        const data = editor.getData()
        this.setState({postDes: data})
    },1500)

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <Input id='title' variant={this.state.errors['name']? 'red':'black'} placeholder='Title' name='title' value={this.state.title} onChange={this.handleChange} width='60%'/>
                    <span style={{color: "red"}}>{this.state.errors["name"]}</span> <br/>
                    <span style={{color: "red"}}>{this.state.errors["postDes"]}</span>
                    <Textarea id="postDes" name="postDes" value={this.state.postDes} onChange={this.handleTextChange} placeholder="Post descrption"/>
                    <Button  type='submit' variant='green' >Submit</Button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.post
    }
}
export default connect(mapStateToProps)(NewPost) 