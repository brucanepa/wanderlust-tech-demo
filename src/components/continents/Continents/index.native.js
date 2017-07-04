import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker, Image } from 'react-native';
import Continent from '../Continent';
import Loading from '../../NotFound';
import CustomPicker from '../../CustomPicker';
import container from '../../../containers/ContinentsContainer';
import { texts } from '../../../constants';

class Continents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      continents: props.continents,
      selected: 0,
      continent: {}
    };
    this.setSelectedContinent = this.setSelectedContinent.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    const continent = nextProps.continents && nextProps.continents.length && nextProps.continents[0];
    this.setState({
      continents: nextProps.continents,
      selected: continent && continent.id,
      continent: continent || {}
    })
  }
  setSelectedContinent(continents, selected) {
    const continent = continents && continents.filter(continent => {
      return continent.id == selected;
    })[0];
    this.setState({
      continent,
      selected
    });
  }
  render() {
    return !this.state.continents.length ? <Loading/> :
      <View style={ styles.container }>
        <Text style={ styles.chooseAContinent }>
          { texts.chooseAContinent }
        </Text>
        <CustomPicker values={ this.state.continents } onSelect={ this.setSelectedContinent } />
        <Continent {...this.state.continent} navigation={ this.props.navigation } />
      </View>;
  }
}

export default container(Continents);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'aliceblue'
  },
  chooseAContinent: {
    marginTop: '5%',
    marginLeft: '5%'
  }
});