import React, { Component} from "react";
import axios from 'axios';

export default class CreateHotdog extends Component {

        constructor(props) {
            super(props);

            this.onChangeHotdogDescription = this.onChangeHotdogDescription.bind(this);
            this.onChangeHotdogResponsible = this.onChangeHotdogResponsible.bind(this);
            this.onChangeHotdogPriority = this.onChangeHotdogPriority.bind(this);
            this.onSubmit = this.onSubmit.bind(this);

            this.state = {
                hotdog_description: '',
                hotdog_responsible: '',
                hotdog_priority: ''
            }
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

        onSubmit(e){
            e.preventDefault();

            console.log(`Form submited:`);
            console.log(`Hotdog Description: ${this.state.hotdog_description}`);
            console.log(`Hotdog Responsible: ${this.state.hotdog_responsible}`);
            console.log(`Hotdog Priority: ${this.state.hotdog_priority}`);


            const newHotdog = {
                hotdog_description: this.state.hotdog_description,
                hotdog_responsible: this.state.hotdog_responsible,
                hotdog_priority: this.state.hotdog_priority,
            }

            axios.post('http://localhost:4000/hotdogs/add', newHotdog)
                .then(res => console.log(res.data));


            this.setState({
                hotdog_description: '',
                hotdog_responsible: '',
                hotdog_priority: '',
            })
        }

    render() {
        return(
            <div style={{marginTop: 20}}>
                
                <h3>Create New Hotdog</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Hotdog: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.hotdog_description}
                                onChange={this.onChangeHotdogDescription}
                                 />
                    </div>
                    <div className="form-group">
                        <label>Customer: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.hotdog_responsible}
                                onChange={this.onChangeHotdogResponsible}
                                />
                    </div>
                       <label>Steak Cooked: </label>
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
                        <input type="submit" value="Create Hotdog" className="btn btn-primary"/>
                    </div>
                </form>

            </div>
        )
    }
} 