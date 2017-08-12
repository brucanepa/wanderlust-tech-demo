import React, { Component } from 'react';
import { Picker } from 'react-native';

class CustomPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: props.values,
      selected: 0,
      onSelect: props.onSelect
    }
    this.onValueChange = this.onValueChange.bind(this);
  }
  onValueChange(value) {
    this.setState({
      selected: value
    });
    this.state.onSelect(this.state.values, value);
  }
  render() {
    return (
      <Picker selectedValue={ this.state.selected } onValueChange={ this.onValueChange }>
        { this.state.values.map((value) => <Picker.Item key={ value.id } label={ value.name } value={ value.id } />) }
      </Picker>
    )
  }
}

export default CustomPicker;
