import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Search from './components/searchComponent'
import List from './components/listPosts'
import NewPost from './components/newPost'
import Button from './Story components/Button/button'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      listing: false
    }
  }
  handlePublishClick = () => {
    this.setState(() => { return { listing: true } })
    console.log(this.state.listing, 'publish click!')
  }
  handleNewClick = () => {
    this.setState(() => { return { listing: false } })
    console.log(this.state.listing, 'new post click!', this.props.posts)
  }

  render() {
    const Title = styled.h1`
        font-size: 2.5em;
        text-align: center;
        color: cadetblue;
        text-shadow: 2.5px 1.5px
      `;
    const New = styled.div.attrs({
      className: 'button'
    })`
      display: inline-flex
    `;
    return (
      <div className='div container'>
        <Title>Welcome to postmaster</Title>
        <Search />
        <New>
          <Button margin='8px 10px 0 500px' variant='aliceblue'  textColor='cornflowerblue'onClick={this.handleNewClick}>New Post</Button>
          <Button variant='aliceblue' textColor='cornflowerblue' onClick={this.handlePublishClick}>Published</Button>
        </New>
        {this.state.listing ? <List /> : <NewPost />}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state.post
  }
}

export default connect(mapStateToProps)(App)