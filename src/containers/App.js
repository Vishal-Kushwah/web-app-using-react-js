import React,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll.js';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions'
import './App.css';


const mapStateToProps= state =>{
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}
	const mapDispatchToProps = (dispatch)=>{
		return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: ()=> dispatch(requestRobots())
	}
}

class App extends Component{
 
	componentDidMount(){
		this.props.onRequestRobots();
	}
	
	render(){
		const { robots, searchField, onSearchChange, isPending}=this.props;
		const filteredrobots=robots.filter(robots =>{
				return robots.name.toLowerCase().includes(searchField.toLowerCase());
				})	
		return isPending?
			<h2>Loading</h2>:
			(
				<div className="tc">
					<h1 className='f1'>Robo Friends</h1>
					<SearchBox searchChange={onSearchChange}/>
					<Scroll>
						<CardList robots={ filteredrobots } />
					</Scroll>
				</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);