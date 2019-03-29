import { Container, Content, Button, Tab, TabHeading, Tabs, Icon, Input, Text } from 'native-base';
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { ButtonBack, FooterSection } from '../../../shared/components';
import { styles } from './styles';

class InnerComponent extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Поиск книг',
    headerLeft: <ButtonBack onPress={() => navigation.goBack()} />,
  });

  constructor(props) {
    super(props);
    this.state = {
      searchedText: '',
      currentTab: 0,
      styles: styles(props.fontSize),
    };
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({styles: styles(this.props.fontSize)});
  }

  _upperCase(word) {
    return <Text style={this.state.styles.tabTitleStyle}>{word.toUpperCase()}</Text>;
  }

  _handleSearch() {
    // TODO
  }

  _renderSimpleSearch = () => {
    const { currentTab, styles } = this.state;

    return (
      <Tab
        heading={
          <TabHeading style={styles.tabHeaderStyle}>
            <View
              style={[styles.tabHeadingStyle, styles.tabHeadingLeft, currentTab === 0 && styles.activeTabStyle]}
            >
              {this._upperCase('Простой')}
            </View>
          </TabHeading>
        }>
        <Content style={styles.container}>
          <View style={styles.searchInputWrapper}>
            <Icon name="ios-search" style={styles.searchIcon}/>
            <Input
              style={styles.searchInput}
              placeholder="Иванов"
              value={this.state.searchedText}
              onChangeText={text => this.setState({searchedText: text})}
            />
          </View>
          <Button
            rounded
            style={styles.button}
            onPress={() => this._handleSearch()}
          >
            <Text>Поиск</Text>
          </Button>
        </Content>
      </Tab>
    );
  };

  _renderAdvancedSearch = () => {
    const { currentTab, styles } = this.state;

    return (
      <Tab
        heading={
          <TabHeading style={styles.tabHeaderStyle}>
            <View
              style={[styles.tabHeadingStyle, styles.tabHeadingRight, currentTab === 1 && styles.activeTabStyle]}
            >
              {this._upperCase('Расширенный')}
            </View>
          </TabHeading>
        }>
        <Content></Content>
      </Tab>
    );
  };

  render() {
    const { userStatus, navigation, token } = this.props;
    const {styles} = this.state;
    return (<Container style={styles.container}>
      <View style={styles.upperButtons}>
        <Button style={[styles.upperButton, styles.buttonElectronic]}>
          {this._upperCase('Электронное')}
        </Button>
        <Button style={[styles.upperButton, styles.buttonPrinted]}>
          {this._upperCase('Печатное')}
        </Button>
      </View>
      <Tabs
        tabContainerStyle={{elevation : 0}}
        onChangeTab={({ i }) => this.setState({ currentTab: i })}
        tabBarUnderlineStyle={styles.tabBarUnderline}>
        {this._renderSimpleSearch()}
        {this._renderAdvancedSearch()}
      </Tabs>
      <FooterSection userStatus={userStatus} navigate={navigation.navigate} />
    </Container>);
  }
}

const mapStateToProps = state => {
  return {
    ...state.authReducer,
    ...state.settings,
  };
};

export const LibrarySearchScreen = connect(
  mapStateToProps,
)(InnerComponent);
