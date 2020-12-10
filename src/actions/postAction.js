export const AddPost = (post) => {
    return {
        type: 'ADD_POST',
        payload: post
    }
}

export const GetPost = () => {
    return {
        type: 'GET_POSTS'
    }
}

export const FilteredPost = (filteredPosts) => {
    return {
        type: 'FILTERED_POST',
        payload: filteredPosts
    }
}
