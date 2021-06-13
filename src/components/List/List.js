import { Component } from 'react';
import axios from 'axios';
import ListCard from '../ListCard/ListCard.js';
import classes from './List.module.css';

class List extends Component{
    state={
        data:[]
    }

    componentDidMount(){
                console.log(this.props);

            axios.get('https://to-do-fbf68-default-rtdb.asia-southeast1.firebasedatabase.app/data.json')
            .then(res => {
                const fetchedData=[];
                for(let key in res.data){
                    fetchedData.push({
                        ...res.data[key],
                        id: key
                    });
                }
                
                console.log(fetchedData);
                this.setState( { data: fetchedData});
            });
    }

    render(){
        return (
            <div className={classes.Container}>
            {this.state.data.map(data => (
                <ListCard 
                        key={data.id}
                        title={data.title}
                        content={data.content}
                        id={data.id} />
            ))}
            </div>
        )
    }
}
export default List;