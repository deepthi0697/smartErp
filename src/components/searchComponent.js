import React from 'react'
import { connect } from 'react-redux'
import { FilteredPost } from '../actions/postAction'
import styled from "styled-components"
import Input from '../Story components/Input/input'

class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            searchString: ''
        }
        this.inputRef = React.createRef();
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSeach = (e) => {
        e.preventDefault()
        const filteredArray = this.props.posts.filter(post => { return post.title.includes(this.state.searchString) || post.postDes.includes(this.state.searchString) })
        this.props.dispatch(FilteredPost(filteredArray))
    }
    handleReset = () => {
        this.setState({
            searchString: ""
        })
    }
    render() {

        const I = styled.i`
        margin: auto
        `
        return (
            <div style={{textAlign:'center'}}>
                <form style={{display:'inline-flex'}} onSubmit={this.handleSeach}>
                    <i onClick={this.handleSeach} className="fa fa-search" style={{ "fontSize": "15px", margin:'auto' }}></i>
                    <Input width="60%" variant='gray' type='text' placeholder='search' id='search' name="searchString" onChange={this.handleChange} value={this.state.searchString} />
                   <I  onClick={this.handleReset} className="fa fa-close" style={{ "fontSize": "20px", "color": "red" }}></I>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.initialPost
    }
}
export default connect(mapStateToProps)(Search)