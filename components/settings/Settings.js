import React, { Component } from 'react';
import { List, ListItem, Toggle, Layout } from '@ui-kitten/components';
import { SafeAreaView, ScrollView } from 'react-native';
import { ThemeContext } from '../../theme-context';

export default class Settings extends Component {
  data = new Array(1).fill({
    title: 'Dark mode',
    description: 'Enable/disable dark mode',
  });
  
  static contextType = ThemeContext

  constructor(props) {
    super(props);
    this.state = {
      checked: true
    }
  }

  setChecked = (checked) => {
    this.setState({ checked });
  }

  onCheckedChange = (isChecked) => {
    this.context.toggleTheme()
    this.setChecked(isChecked);
  };

  renderItemAccessory = (props) => (
    <Toggle checked={this.state.checked} onChange={this.onCheckedChange} />
  );

  renderItem = ({ item, index }) => (
    <ListItem
      title={item.title}
      description={item.description}
      accessoryRight={this.renderItemAccessory}
    />
  );

  render() {
    return (
      <Layout style={{ height: '100%' }}>
        <List
          data={this.data}
          renderItem={this.renderItem}
        />
      </Layout>
    );
  }
};
