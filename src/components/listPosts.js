import React from 'react'
import { connect } from 'react-redux'
import Card from '../Story components/Card/card'

function List(props) {
    return (
        <div>
            <h1>Listing {props.posts.length} posts</h1>
            <ul style={{listStyleType:'none'}}>
                {props.posts.map(post => {
                    return <li key={post.id}>
                        <Card title={post.title} description={post.postDes}></Card>
                    </li>
                })}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.post
    }
}
export default connect(mapStateToProps)(List)