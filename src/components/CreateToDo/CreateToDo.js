import {Component} from 'react';
import classes from './CreateToDo.module.css';
import axios from 'axios';
class CreateToDo extends Component {
    state={
        title: "",
        content: "",
        valid: false,
        validation:{
            required: true
        }
    }

    checkValidity(value1,value2, rules){
        let isValid= false;
        if(rules.required){
            isValid = value1.trim() && value2.trim() !== '';
        }
        return isValid;
    }

    postDataHandler = () => {
        const data={
            title: this.state.title,
            content: this.state.content
        }
        this.state.valid = this.checkValidity(data.title,data.content,this.state.validation);
        if(this.state.valid){
        axios.post('https://to-do-fbf68-default-rtdb.asia-southeast1.firebasedatabase.app/data.json', data)
        .then(response=> {
            alert('Your notes has been saved!!');
            this.setState({
                    title: "",
                    content: ""
            });
            })
        .catch(error=>console.log(error));
        }else{
            alert('All fields are required to be filled!!');
        }
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