import {BsHeart} from 'react-icons/bs'
import Cookies from 'js-cookie'
import './index.css'

const LikeComponent = async props => {
  const {postId} = props
  const token = Cookies.get('jwt_token')
  const apiUrl = `https://apis.ccbp.in/insta-share/posts/${postId}/like`
  const post = {like_status: true}
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(post),
    method: 'GET',
  }
  const response = await fetch(apiUrl, options)

  return (
    <button className="button-reacts" testid="likeIcon" type="button">
      <BsHeart className="react-image" />
    </button>
  )
}

export default LikeComponent
