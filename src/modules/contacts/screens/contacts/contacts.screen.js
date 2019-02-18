import { Container, Content, List, ListItem, Text } from 'native-base';
import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';

import { getDepartments } from '../../../../actions/contactsAction';
import { img_campus_dorm, img_university_section } from '../../../../assets/images';
import { ButtonBack, FooterSection } from '../../../shared/components';
import { styles } from './styles';

const itemList = [
  {
    title: 'Подразделения',
    text: 'Информация о структуре Университета',
    image: img_university_section,
    route: 'Divisions',
  },
  {
    title: 'Корпуса и общежития',
    text: 'Информация о корпусах и общежитиях',
    image: img_campus_dorm,
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
    this.state = {};
  }

  componentWillMount() {
    this.props.getDepartments('');
  }

  render() {
    const { userStatus, navigation, token } = this.props;
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
                <Image source={item.image} style={styles.iconStyle} />
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
