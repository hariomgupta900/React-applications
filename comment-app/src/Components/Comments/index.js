import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    userName: '',
    userComment: '',
    userArray: [],
    likeStatus: false,
    profileBgColor: '',
  }

  takeNameInput = event => {
    this.setState({userName: event.target.value})
  }

  takeCommentInput = event => {
    this.setState({userComment: event.target.value})
  }

  addComment = event => {
    event.preventDefault()
    const {userName, userComment, likeStatus, profileBgColor} = this.state

    let randomNumber = Math.random() * 5 + 1
    randomNumber = Math.ceil(randomNumber)
    const data = {
      userName,
      userComment,
      id: uuidv4(),
      likeStatus,
      profileBgColor: initialContainerBackgroundClassNames[randomNumber],
    }

    this.setState(prevState => ({
      userArray: [...prevState.userArray, data],
      userName: '',
      userComment: '',
    }))
  }

  deleteComment = id => {
    const {userArray} = this.state
    const remainingData = userArray.filter(item => item.id !== id)
    this.setState({userArray: remainingData})
  }

  toggleLikeStatus = id =>
    this.setState(prevState => ({
      userArray: prevState.userArray.map(eachdata => {
        if (id === eachdata.id) {
          return {...eachdata, likeStatus: !eachdata.likeStatus}
        }
        return eachdata
      }),
    }))

  render() {
    const {userName, userComment, userArray} = this.state

    return (
      <div className="master_container">
        <div className="form_container">
          <div className="comments_content_container">
            <h1 className="page-heading">Comments</h1>
            <form className="input_fields_container" onSubmit={this.addComment}>
              <label htmlFor="name" className="page_para">
                Say Something about 4.0 Technologies
              </label>
              <input
                type="text"
                value={userName}
                id="name"
                className="name_input"
                onChange={this.takeNameInput}
                placeholder="Your Name"
              />
              <textarea
                value={userComment}
                className="comment_input"
                onChange={this.takeCommentInput}
                placeholder="Your Comment"
              />
              <div>
                <button type="submit" className="add_comment_button">
                  Add Comment
                </button>
              </div>
            </form>
          </div>
          <div className="image_container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              className="comments_image"
            />
          </div>
        </div>
        <div className="comments_collection">
          <div className="count_master_container">
            <div className="count_container">
              <p className="count">{userArray.length} </p>
            </div>
            <p className="count_text">Comments</p>
          </div>
          {userArray.map(eachItem => (
            <CommentItem
              initialContainerBackgroundClassNames={
                initialContainerBackgroundClassNames
              }
              data={eachItem}
              key={eachItem.id}
              deleteFunction={this.deleteComment}
              toggleLikeFunction={this.toggleLikeStatus}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Comments
