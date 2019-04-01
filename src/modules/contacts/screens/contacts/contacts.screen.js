import { Container, Content, List, ListItem, Text } from 'native-base';
import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';
import {Navigation} from 'react-native-navigation';
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

  static options(passProps) {
    return {
      topBar: {
        title: {
          text: 'Контакты университета',
        },
      }
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      styles: styles(props.fontSize),
    };
  }
  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({styles: styles(this.props.fontSize)});
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
                onPress={() => item.route ? Navigation.push(this.props.componentId, {
                  component: {
                    name: item.route,
                  }
                }) : ''}
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
                    color: '#3587fa',
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
        <FooterSection componentId={this.props.componentId} userStatus={userStatus} />
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
  dispatch,
});

export const ContactsScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InnerComponent);
