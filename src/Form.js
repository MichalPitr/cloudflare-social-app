import React from "react";
import "./Form.css"

const apiURL = 'https://myapp.michal-pitr.workers.dev/posts'

class PostForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        title: "",
        text_body: ""
      };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        const title = target.title;
        const text_body = target.text_body;
        this.setState({
          [name]: value, [title]:value, [text_body]:value});
      }
    
    handleSubmit(event) {
        let name = this.state.name
        let title = this.state.title
        let text_body = this.state.text_body
        if (name === '' || title === '' || text_body === '') {
            alert("You need to fill in all fields!")
        } else {
            event.preventDefault();
            let post = {
                'title': title,
                'username': name,
                'content': text_body
            }
            fetch(apiURL, {
                method: 'POST',
                body: JSON.stringify(post),
                headers: {'Content-Type':'application/json'},
                crossDomain: true
            }).then(() => {
                window.location.reload();
            })
        }
    }
  
    render() {
      return (
        <form id="postForm" onSubmit={this.handleSubmit}> 
            <label><span class="row">Username: </span>
                <input class="field" type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
            </label> 
            <br></br>
            <label > <span class="row">Title: </span>
                <input class="field" type="text" name="title" value={this.state.title} onChange={this.handleInputChange} />
            </label>
            <br></br>

            <label ><span class="row">Post: </span>
                <textarea class="field" name="text_body" value={this.state.text_body} onChange={this.handleInputChange} />
            </label>
            <br></br>
            <input class="submitButton" type="submit" value="Submit"/>
        </form>
      );
    }
  }

export default PostForm;
