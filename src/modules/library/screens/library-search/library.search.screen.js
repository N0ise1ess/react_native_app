import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container, Content, Button, Tab, TabHeading, Tabs, Icon, Input, Text, Picker, List } from 'native-base';
import { ButtonBack, FooterSection } from '../../../shared/components';
import { View } from 'react-native';

import { styles } from './styles';

class InnerComponent extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Поиск книг',
    headerLeft: <ButtonBack onPress={() => navigation.goBack()} />,
  });

  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0,
      criterias: [{
        searchedText: '',
        selectedCriteria: 'Ключевое слово',
        selectedOption: 'Начинается с',
      }],
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
    // TODO show search results
  }

  _handleCriteriaSelect = (index, criteria) => {
    const updatedCriterias = [ ...this.state.criterias ];
    updatedCriterias[index] = { ...updatedCriterias[index], selectedCriteria: criteria };
    this.setState({ criterias: updatedCriterias });
  }

  _handleOptionSelect = (index, option) => {
    const updatedCriterias = [ ...this.state.criterias ];
    updatedCriterias[index] = { ...updatedCriterias[index], selectedOption: option };
    this.setState({ criterias: updatedCriterias });
  }

  _handleSearchTextChange = (index, text) => {
    const updatedCriterias = [ ...this.state.criterias ];
    updatedCriterias[index] = { ...updatedCriterias[index], searchedText: text };
    this.setState({ criterias: updatedCriterias });
  }

  _handleOperationClick = (index, operation) => {
    const updatedCriterias = [ ...this.state.criterias ];
    if (updatedCriterias[index] && updatedCriterias[index].operation) {
      if (updatedCriterias[index].operation === operation) {
        updatedCriterias.splice(index + 1, 1);
        updatedCriterias[index] = { ...updatedCriterias[index], operation: '' };
      } else {
        updatedCriterias[index] = { ...updatedCriterias[index], operation: operation };
      }
    } else {
      updatedCriterias.push({
        searchedText: '',
        selectedCriteria: 'Автор',
        selectedOption: 'Равно',
      });
      updatedCriterias[index] = { ...updatedCriterias[index], operation: operation };
    }
    this.setState({ criterias: updatedCriterias });
  }

  _renderSimpleSearch = () => {
    const { currentTab, styles } = this.state;

    return (
      <Tab
        heading={
          <TabHeading style={styles.tabHeaderStyle}>
            <View style={[
              styles.tabHeadingStyle,
              styles.tabHeadingLeft,
              currentTab === 0 && styles.activeTabStyle]}>
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
          <Button rounded style={styles.button} onPress={() => this._handleSearch()}>
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
        <Content style={styles.container}>
          <List
            dataArray={this.state.criterias}
            renderRow={(item, sectionId, index) => (
              <View style={styles.advancedSearchWrapper}>
                <View style={[styles.searchInputWrapper, styles.searchPickers]}>
                  <View style={[styles.picker, styles.searchWrapperBordered]}>
                    <Picker
                      mode="dropdown"
                      selectedValue={item.selectedCriteria}
                      onValueChange={criteria => this._handleCriteriaSelect(index, criteria)}>
                      <Picker.Item label="Ключевое слово" value="Ключевое слово"/>
                      <Picker.Item label='Автор' value="Автор"/>
                    </Picker>
                  </View>
                  <View style={[styles.picker, styles.searchWrapperBordered,]}>
                    <Picker
                      mode="dropdown"
                      selectedValue={item.selectedOption}
                      onValueChange={option => this._handleOptionSelect(index, option)}>
                      <Picker.Item label="Наичнается с" value="Наичнается с"/>
                      <Picker.Item label="Равно" value="Равно"/>
                    </Picker>
                  </View>
                </View>
                <View style={[styles.searchInputWrapper, styles.searchWrapperBordered]}>
                  <Icon name="ios-search" style={styles.searchIcon}/>
                  <Input
                    style={styles.searchInput}
                    placeholder="Иванов"
                    value={item.searchedText}
                    onChangeText={text => this._handleSearchTextChange(index, text)}
                  />
                </View>
                <View style={[styles.operationButtons, styles.searchPickers]}>
                  <Button rounded style={[styles.button, styles.operationButton, item.operation === 'И...' && styles.activeOperation]} onPress={() => this._handleOperationClick(index, 'И...')}>
                    <Text style={styles.operationText}>И...</Text>
                  </Button>
                  <Button rounded style={[styles.button, styles.operationButton, item.operation === 'ИЛИ...' && styles.activeOperation]} onPress={() => this._handleOperationClick(index, 'ИЛИ...')}>
                    <Text style={styles.operationText}>ИЛИ...</Text>
                  </Button>
                  <Button rounded style={[styles.button, styles.operationButton, item.operation === 'КРОМЕ...' && styles.activeOperation]} onPress={() => this._handleOperationClick(index, 'КРОМЕ...')}>
                    <Text style={styles.operationText}>КРОМЕ...</Text>
                  </Button>
                </View>
              </View>
          )} />
          <Button rounded style={styles.button} onPress={() => this._handleSearch()}>
            <Text>Поиск</Text>
          </Button>
        </Content>
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
