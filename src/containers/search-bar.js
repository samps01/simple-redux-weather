    import  React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = { term: ''}
    }

    onChangeHandler(event){
        this.setState({term: event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term:''})
    }

    render(){
        return(
            <form action="" className="input-group" onSubmit={this.onFormSubmit.bind(this)}>
                <input
                    placeholder="Search Cities"
                    type="text"
                    name="" id=""
                    className="form-control"
                    value = {this.state.term}
                    onChange={this.onChangeHandler.bind(this)}
                />
                <span className="input-group-btn">
                    <button className="btn btn-secondary" type="submit">Search</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {

    return bindActionCreators({fetchWeather},dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);