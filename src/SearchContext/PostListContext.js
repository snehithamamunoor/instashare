import React from 'react'

const PostListContext = React.createContext({
  item: [],
  likeCountIncremented: () => {},
})

export default PostListContext
