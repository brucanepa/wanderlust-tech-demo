import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Picker, Image } from 'react-native';
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
    this.setState({
      continents: nextProps.continents,
    })
    const continent = nextProps.continents && nextProps.continents.length && nextProps.continents[0];
    this.setSelectedContinent(nextProps.continents, this.state.selected || continent && continent.id)
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
        <ScrollView>
          <Text style={ styles.chooseAContinent }>
            { texts.chooseAContinent }
          </Text>
          <CustomPicker values={ this.state.continents } onSelect={ this.setSelectedContinent } />
          <Continent {...this.state.continent} navigation={ this.props.navigation } />
        </ScrollView>
      </View>
  }
}

export default container(Continents);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'aliceblue',
    height: '100%'
  },
  chooseAContinent: {
    marginTop: '5%',
    marginLeft: '5%'
  }
});