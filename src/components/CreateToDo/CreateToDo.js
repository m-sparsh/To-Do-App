import {Component} from 'react';
import classes from './CreateToDo.module.css';
import axios from 'axios';
class CreateToDo extends Component {
    state={
        title: "",
        content: ""
    }
    postDataHandler = () => {
        const data={
            title: this.state.title,
            content: this.state.content
        }
        axios.post('https://to-do-fbf68-default-rtdb.asia-southeast1.firebasedatabase.app/data.json', data)
        .then(response=> {
            alert('Your notes has been saved!!');
            this.setState({
                    title: "",
                    content: ""
            });
            })
        .catch(error=>console.log(error));
    }

    render(){
        return (
            <>
                <div className={classes.Container}>
                    <label className={classes.Label} for="title">Title</label><br />
                    <input
                         className={classes.Input} 
                         type="text" 
                         id="title" 
                         name="title"
                         value={this.state.title}
                         onChange={ (event) =>{
                             this.setState({title: event.target.value});
                         }} /><br />
                    <label className={classes.Label} for="content">Content</label><br />
                    <textarea 
                        className={classes.Textarea} 
                        id="content" 
                        name="content"
                        value={this.state.content}
                        onChange={ (event) => {
                            this.setState( { content: event.target.value});
                        }}>{this.state.content}</textarea><br />
                    <button className={classes.button}
                        onClick={this.postDataHandler}>+</button><br />
                </div>
            </>
        )
    }
}

export default CreateToDo;