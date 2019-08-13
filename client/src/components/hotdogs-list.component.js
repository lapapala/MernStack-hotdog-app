import React, { Component} from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Hotdog = props => (
    <tr>
        <td >{props.hotdog.hotdog_description}</td>
        <td >{props.hotdog.hotdog_responsible}</td>
        <td >{props.hotdog.hotdog_priority}</td>
        <td>
            <Link to={"/edit/"+props.hotdog._id}>Edit </Link>
        </td>
       

    </tr>
)

export default class HotdogsList extends Component {
    constructor(props) {
        super(props);
        this.state = {hotdogs: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/hotdogs/')
            .then(response => {
                this.setState({hotdogs: response.data})
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    componentDidUpdate() {
        axios.get('http://localhost:4000/hotdogs/')
            .then(response => {
                this.setState({hotdogs: response.data})
            })
            .catch(function (error) {
                console.log(error);
            });
    }

  
    hotdogList() {
        return this.state.hotdogs.map(function(currentHotdog, i) {
            return <Hotdog hotdog={currentHotdog} key={i} />
        });
    }
    
    render() {
        return(
            <div>
                    <h3>Hotdogs List</h3>
                    <table className="table table-striped" style={{marginTop: 20}}>
                        <thead>
                            <tr>
                                <th>Hotdog</th>
                                <th>Customer</th>
                                <th>Steak Cooked</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.hotdogList() }
                        </tbody>
                    </table>
            </div>
        )
    }
}