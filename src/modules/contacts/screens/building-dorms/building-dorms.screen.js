import { Container, Content, Icon, List, ListItem, Text } from 'native-base';
import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';
import {CustomIcon} from '../../../shared/components/custom-icon';
import { img_campus_dorm } from '../../../../assets/images';
import { ButtonBack, FooterSection } from '../../../shared/components';
import { styles } from './styles';

const itemList = [
  {
    title: 'Корпус 1',
    text: 'Учебный',
    image: 'hostel',
  },
  {
    title: 'Корпус 2',
    text: 'Учебный',
    image: 'hostel',
  },
  {
    title: 'Корпус 3',
    text: 'Учебный',
    image: 'hostel',
  },
  {
    title: 'Корпус 4',
    text: 'Административный',
    image: 'hostel',
  },
  {
    title: 'Корпус 5',
    text: 'Учебный',
    image: 'hostel',
  },
];

class InnerComponent extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Корпуса и общежития',
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
                <View style={styles.viewStyle}>
                  {/* <Image source={item.image} style={styles.imageStyle} /> */}
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
                </View>
                <Icon type="Ionicons" name="ios-arrow-round-forward" style={styles.iconStyle} />
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
  dispatch,
});

export const BuildingDormsScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InnerComponent);
