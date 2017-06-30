import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';
import Continent from '../Continent';
import container from '../../../containers/ContinentsContainer';
import { texts } from '../../../constants';

let selectedValue = 1;

class Continents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      continents: props.continents,
      selected: 0
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      continents: nextProps.continents,
      selected: nextProps.continents.length > 0 && nextProps.continents[0].id
    })
  }
  getSelectedContinent() {
    const continents = this.state.continents;
    return continents && continents.filter(continent => {
      return continent.id == this.state.selected;
    })[0];
  }
  render() {
    return (
      <View style={ styles.container }>
        <Text>
          { texts.pageTitle } 
        </Text>
        <Text>
          { texts.chooseAContinent}
        </Text>
        <Picker selectedValue={ this.state.selected } onValueChange={ (value) => this.setState({selected: value}) }>
          { this.state.continents.map((continent) => <Picker.Item key={ continent.id } label={ continent.name } value={ continent.id } />) }
        </Picker>
        <Continent {...this.getSelectedContinent()} navigation={this.props.navigation}/>
      </View>);
  }
};

export default container(Continents);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  }
});