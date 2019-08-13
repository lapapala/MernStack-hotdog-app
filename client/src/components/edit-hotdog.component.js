import React, {Component} from "react";
import axios from 'axios';

export default class EditHotdog extends Component {

    constructor(props) {
        super(props);

        this.onChangeHotdogDescription = this.onChangeHotdogDescription.bind(this);
        this.onChangeHotdogResponsible = this.onChangeHotdogResponsible.bind(this);
        this.onChangeHotdogPriority = this.onChangeHotdogPriority.bind(this);

        this.onDelete = this.onDelete.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            hotdog_description: '',
            hotdog_responsible: '',
            hotdog_priority: '',
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/hotdogs/'+ this.props.match.params.id)
            .then(response => {
                this.setState({
                    hotdog_description: response.data.hotdog_description,
                    hotdog_responsible: response.data.hotdog_responsible,
                    hotdog_priority: response.data.hotdog_priority,
                }) 
            })
            .catch(function(error) {
                console.log(error)
            })
            // AbortController.abort();
    }

    onChangeHotdogDescription(e) {
        this.setState({
            hotdog_description: e.target.value
        });
    }

    onChangeHotdogResponsible(e) {
        this.setState({
            hotdog_responsible: e.target.value
        });
    }

    onChangeHotdogPriority(e) {
        this.setState({
            hotdog_priority: e.target.value
        });
    }

    

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            hotdog_description: this.state.hotdog_description,
            hotdog_responsible: this.state.hotdog_responsible,
            hotdog_priority: this.state.hotdog_priority,
        };
        axios.post('http://localhost:4000/hotdogs/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

            this.props.history.push('/');
    }

    onDelete(e) {
        e.preventDefault();
        const obj = {
            hotdog_description: this.state.hotdog_description,
            hotdog_responsible: this.state.hotdog_responsible,
            hotdog_priority: this.state.hotdog_priority,
        };
        axios.delete('http://localhost:4000/hotdogs/delete/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

            this.props.history.push('/');
    }


    render() {
        return(
            <div>
                <h3>Update Hotdog</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                                className="form-control"
                                value={this.state.hotdog_description}
                                onChange={this.onChangeHotdogDescription}
                                 />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input type="text"
                                className="form-control"
                                value={this.state.hotdog_responsible}
                                onChange={this.onChangeHotdogResponsible}
                                 />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                    name="priorityOption"
                                    id="priorityLow"
                                    value="Low"
                                    checked={this.state.hotdog_priority==='Low'}
                                    onChange={this.onChangeHotdogPriority}
                                    />
                                <label className="form-check-label">Low</label>               
                        </div>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                    name="priorityOption"
                                    id="priorityMedium"
                                    value="Medium"
                                    checked={this.state.hotdog_priority==='Medium'}
                                    onChange={this.onChangeHotdogPriority}
                                    />

                                <label className="form-check-label">Medium</label>               
                        </div>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                   type="radio"
                                   name="priorityOption"
                                   id="priorityHigh"
                                   value="High"
                                   checked={this.state.hotdog_priority==='High'}
                                   onChange={this.onChangeHotdogPriority}
                                  />

                                <label className="form-check-label">High</label>               
                        </div>
                        
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Update Hotdog" className="btn btn-primary" />
                        <button style={{margin: "0.5rem", width: "6rem" }} type="button" className="btn btn-danger delele" value="Delete" onClick={this.onDelete}>Delete</button>
                    </div>
                </form>
            </div>
        )
    }
}