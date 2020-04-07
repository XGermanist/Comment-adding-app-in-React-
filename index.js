import React from 'react';
import ReactDOM from 'react-dom';

const HelloWorld = () => {
  return <h4> Hello, mister Huisman, late night</h4>;
}


class CommentApp extends React.Component {
  constructor(){
    super();
    this.state = {
      comments: [
        {author: 'Person 1', text: 'Text 1', time: 'timestamp 1', deleted: false}
      ],
      newAuthor: '',
      newCommentText: '',
      newComment: ''
    };
  }

  deleteComment(key){
    const comments = this.state.comments.map((comment, i) => {
      if (key === i){
        return{
          author: comment.author,
          text: comment.text,
          time: comment.timestamp,
          deleted: !comment.deleted
        }
      }
      else {
        return comment;
      }
    });
    this.setState({comments});
  }

  addNewAuthor(){
    const newAuthor = this.state.newAuthor;
    console.log(this.state.newAuthor);
    return newAuthor;
  }

  addNewCommentText(){
    const newCommentText = this.state.newCommentText;
    console.log(this.state.newCommentText);
    return newCommentText;
  }

  addComment(){

    const comments = this.state.comments;
    comments.push({
      author: this.state.newAuthor,
      text: this.state.newCommentText,
      time: getDateAsText(),
      deleted: false
    });
    this.setState({comments,
    newAuthor: '',
    newCommentText: ''});

  }

  render(){
    return(
      <div>
      <ul>
      {
        this.state.comments.map((comment, i) => {
          const className = comment.deleted ? 'deleted' : '';
          return (
            <li key ={i}
            className={className}
            >
            {comment.author}, {comment.text}, {comment.time}
            <button type="button" onClick={ev => {this.deleteComment(i)}}> Delete comment </button>
            </li>
          )
        })
      }
      </ul>

      <input
      type='text'
      placeholder="What's your name?"
      value={this.state.newAuthor}
      onChange={ev =>{this.setState({ newAuthor: ev.target.value })}}
      onMouseOut={ev => {this.addNewAuthor()}}
      />
      <input
      type='text'
      placeholder="Write a comment!"
      value={this.state.newCommentText}
      onChange={ev =>{this.setState({newCommentText: ev.target.value})}}
      onMouseOut={ ev =>{this.addNewCommentText()}}
      />

      <button type="button" onClick={ev => {this.addComment();}}> Another comment </button>
      </div>
    );
  }
}

function getDateAsText() {

let today_date = new Date();

let dd = today_date.getDate();
let mm = today_date.getMonth()+1;
let yyyy = today_date.getFullYear();
let hh = today_date.getHours();
let m = today_date.getMinutes();
let ss = today_date.getSeconds();

let nowIs = `Time: ${hh}:${m}:${ss}; date:${dd}-${mm}-${yyyy} `;
return nowIs;
}

ReactDOM.render(
  <CommentApp />,
  document.querySelector('#app')
);
