import React,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll.js';
import { connect } from 'react-redux';
import {setSearchField} from '../actions'
import './App.css';
const mapStateToProps=(state)=>{
	return {
		searchField: state.searchField
	}
}
	const mapDispatchToProps = (dispatch)=>{
		return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value))
	}
}

class App extends Component{
	constructor(){
		super()
		this.state={
			robots:[]
		}
	}
	componentDidMount(){
		console.log(this.props.store)
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => {this.setState({robots:users})});
	}
	
	render(){
		const {robots} = this.state;
		const {searchField, onSearchChange}=this.props;
		const filteredrobots=robots.filter(robots=>{
				return robots.name.toLowerCase().includes(searchField.toLowerCase());
				})	
		return !robots.length?<h2>loading</h2>:
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

export default connect(mapStateToProps,mapDispatchToProps)(App);