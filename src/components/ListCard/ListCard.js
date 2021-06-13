import classes from './ListCard.module.css';
import axios from 'axios';
import { Route } from 'react-router-dom';
import CreateToDo from '../CreateToDo/CreateToDo.js';



const ListCard = (props) => {
   if(props.id==null){
       return console.log('emptyyy');
   }else{
    return (
         <div className={classes.Container}>
                            <div className={classes.Title}>{props.title.toUpperCase()}</div>
                            <div className={classes.Content}>{props.content}</div>
                            <div className={classes.bottom}>
                                <button onClick={()=>deleteNoteHandler(props.id)} className={classes.deleteNote}>-</button>
                            </div>
        </div>
    )
   }
}
const deleteNoteHandler=(id)=>{
        axios.delete('https://to-do-fbf68-default-rtdb.asia-southeast1.firebasedatabase.app/data/'+id+ '.json')
        .then(res => alert('Please reload the page!!'));
    }
    
export default ListCard;