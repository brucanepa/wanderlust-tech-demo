import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import CustomPicker from '../../CustomPicker';

const ratings = () => {
	const elements = ['1', '2', '3', '4', '5'];
	const values = [];
	elements.forEach(element => {
		values.push({
			id: element,
			name: element
		})
	});
	return values;
};

class PlaceRating extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rating: 0,
			onRateClick: props.onRateClick,
			values: ratings()
		}
		this.onSelect = this.onSelect.bind(this);
	}

	onSelect(values, selected) {
		this.setState({
			rating: selected
		});
		this.state.onRateClick(selected);
	}

	render() {
		return (
			<View>
				<CustomPicker values={this.state.values} onSelect={this.onSelect}/>
			</View>
		)
	}
}


export default PlaceRating;
