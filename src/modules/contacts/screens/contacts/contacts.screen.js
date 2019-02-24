import { Container, Content, List, ListItem, Text } from 'native-base';
import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';
import {CustomIcon} from '../../../shared/components/custom-icon';
import { getDepartments } from '../../../../actions/contactsAction';
import { ButtonBack, FooterSection } from '../../../shared/components';
import { styles } from './styles';

const itemList = [
  {
    title: 'Подразделения',
    text: 'Информация о структуре Университета',
    image: 'university',
    route: 'Divisions',
  },
  {
    title: 'Корпуса и общежития',
    text: 'Информация о корпусах и общежитиях',
    image: 'hostel',
    route: 'BuildingDorms',
  },
];

class InnerComponent extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Контакты университета',
    headerLeft: <ButtonBack onPress={() => navigation.goBack()} />,
  });

  constructor(props) {
    super(props);
    this.state = {
      styles: styles(props.fontSize),
    };
  }
  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({styles: styles(this.props.fontSize)});
  }

  componentWillMount() {
    this.props.getDepartments('');
  }

  render() {
    const { userStatus, navigation, token } = this.props;
    const {styles} = this.state;
    return (
      <Container style={styles.container}>
        <Content>
          <List
            style={styles.listStyle}
            dataArray={itemList}
            renderRow={item => (
              <ListItem
                button
                onPress={() => navigation.navigate(item.route ? item.route : '')}
                style={styles.listItemStyle}
              >
                {/* <Image source={item.image} style={styles.iconStyle} /> */}
                <CustomIcon
                  style={{
                    width: 32,
                    height: 32,
                    marginLeft: 15,
                    marginRight: 15,
                    fontSize: 30,
                    color: '#163D7D',
                  }}
                  name={item.image}
                />
                <View style={styles.columnStyle}>
                  <Text style={styles.titleStyle}>{item.title}</Text>
                  <Text style={styles.textStyle}>{item.text}</Text>
                </View>
              </ListItem>
            )}
          />
        </Content>
        <FooterSection userStatus={userStatus} navigate={navigation.navigate} />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.authReducer,
    ...state.settings,
  };
};

const mapDispatchToProps = dispatch => ({
  getDepartments: searchedText => dispatch(getDepartments(searchedText)),
  dispatch,
});

export const ContactsScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InnerComponent);
