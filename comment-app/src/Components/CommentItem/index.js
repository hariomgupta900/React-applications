// Write your code here

import {Component} from 'react'
import './index.css'

class CommentItem extends Component {
  render() {
    const {
      data,
      deleteFunction,
      toggleLikeFunction,
      initialContainerBackgroundClassNames,
    } = this.props
    const {userName, userComment, id, likeStatus, profileBgColor} = data

    const SetLike = () => {
      toggleLikeFunction(id)
    }

    const deleteUserComment = () => {
      deleteFunction(id)
    }

    const likedImage = likeStatus
      ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

    return (
      <div className="comment_item_main_body">
        <div className="sub_body">
          <div className={`profile ${profileBgColor}`}>
            <p className="dp">{userName[0]}</p>
          </div>
          <div className="name_time_and_comment_container">
            <div className="name_time_container">
              <h1 className="user_name">{userName}</h1>
              <p className="time">less than a minute ago</p>
            </div>
            <p className="user_comment">{userComment}</p>
          </div>
        </div>
        <div className="like_and_delete_button_container">
          <div className="like_button_container">
            <button type="button" onClick={SetLike} className="action_button">
              <img src={likedImage} alt="like" />
            </button>
          </div>
          <div className="delete_button_container">
            <button
              type="button"
              onClick={deleteUserComment}
              className="action_button"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
                alt="delete"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default CommentItem
