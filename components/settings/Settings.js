import React, { Component } from 'react';
import { Divider, List, ListItem, Toggle, Layout, Icon, TopNavigation, TopNavigationAction, Select, SelectItem, IndexPath } from '@ui-kitten/components';
import { SafeAreaView, StatusBar } from 'react-native';
import { ThemeContext } from '../../contexts/theme-context';
import { useNavigation } from '@react-navigation/native';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { changeLocale } from '../../actions';

class SettingsScren extends Component {
  data = [
    {
      id: 'lang',
      title: i18n.t('settings.lang.title'),
      description: i18n.t('settings.lang.description'),
    },
    {
      id: 'theme',
      title: i18n.t('settings.theme.title'),
      description: i18n.t('settings.theme.description'),
    },
  ];

  languages = [
    'English',
    'Slovensky',
  ];

  static contextType = { ThemeContext, LangContext }

  constructor(props) {
    super(props);
    this.state = {
      checked: true,
      selectedIndex: new IndexPath(0)
    }
  }

  setChecked = (checked) => {
    this.setState({ checked });
  }

  setSelectedIndex = (selectedIndex) => {
    let locale;
    switch (selectedIndex) {
      case 0:
        locale = 'en';
        break;
      case 1:
        locale = 'sk-SK';
        break;
      default:
        locale = Localization.locale;
        break;
    }
    this.props.changeLocale(locale)
    this.setState({ selectedIndex });
  }

  onCheckedChange = (isChecked) => {
    console.log(this.context);
    this.context.toggleTheme();
    this.setChecked(isChecked);
  };

  renderDarkModeAccessory = (props) => (
    <Toggle checked={this.state.checked} onChange={this.onCheckedChange} />
  );

  renderLanguages = (title) => (
    <SelectItem title={title} />
  );

  renderLocalisationAccessory = (props) => (
    <Select
      value={this.languages[this.state.selectedIndex.row]}
      selectedIndex={this.state.selectedIndex}
      onSelect={index => this.setSelectedIndex(index)}>
      {this.languages.map(this.renderLanguages)}
    </Select>
  );

  renderAccessory = (id, props) => {
    console.log(props);
    switch (id) {
      case 'lang':
        return this.renderLocalisationAccessory(props);

      case 'theme':
        return this.renderDarkModeAccessory(props);

      default:
        break;
    }
  }

  renderItem = ({ item, index }) => (
    <ListItem
      title={item.title}
      description={item.description}
      accessoryRight={(props) => this.renderAccessory(item.id, props)}
    />
  );

  MenuIcon = (props) => (
    <Icon {...props} name='menu-outline' />
  );

  renderDrawerAction = () => (
    <TopNavigationAction icon={this.MenuIcon} onPress={() => this.props.navigation.openDrawer()} />
  );

  render() {
    return (
      <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
        <TopNavigation
          title={i18n.t('navigation.settings')}
          accessoryLeft={this.renderDrawerAction}
        />
        <Divider />
        <Layout style={{ height: '100%' }}>
          <List
            data={this.data}
            renderItem={this.renderItem}
          />
        </Layout>
      </SafeAreaView>
    );
  }
};

function Settings(props) {
  const navigation = useNavigation();
  return <SettingsScren {...props} navigation={navigation} />
}

const mapStateToProps = state => ({
  locale: state.locale
});

const mapDispatchToProps = dispatch => ({
  changeLocale: token => dispatch(changeLocale(token))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
