import React from 'react';
import * as NB from 'native-base';
import { View, Linking } from 'react-native';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import { FooterSection, CustomIcon } from '../../../shared';
import { styles } from './styles';

class InnerComponent extends React.Component {
  static options(passProps) {
    return {
      topBar: {
        title: {
          text: 'Корпуса и общежития',
        },
      },
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      styles: styles(props.fontSize),
    };
  }

  render() {
    const { styles } = this.state;
    const item = this.props.dataNavigation.item;

    return (
      <NB.Container style={styles.container}>
        <NB.Grid>
          <NB.Col size={20}>
            <CustomIcon style={styles.icon} name={'hostel'} />
          </NB.Col>
          <NB.Col size={80}>
            <NB.Text style={styles.titleStyle}>{item.name}</NB.Text>
            <NB.Text style={styles.textStyle}>{'Учебный'}</NB.Text>
            <NB.Grid style={styles.containerBorder}>
              <NB.Col size={75}>
                <NB.Text style={styles.textStyle}>{'Телефон'}</NB.Text>
                <NB.Text style={[styles.titleStyle, styles.titleStyleBlue]}>{'+7(999)243-12-44'}</NB.Text>
              </NB.Col>
              <NB.Col size={25}>
                <NB.Button style={styles.btnImageStyle} info onPress={() => Linking.openURL(`tel://+7(999)243-12-44`)}>
                  <CustomIcon name="call" style={styles.imageStyle} />
                </NB.Button>
              </NB.Col>
            </NB.Grid>
            <View style={styles.containerBorder}>
              <NB.Text style={styles.textStyle}>{'Адрес:'}</NB.Text>
              <NB.Text style={styles.titleStyle}>{item.address}</NB.Text>
            </View>
          </NB.Col>
        </NB.Grid>
        <NB.Grid>
          <MapView
            style={{ flex: 1 }}
          />
        </NB.Grid>
      </NB.Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.authReducer,
    ...state.settings,
    ...state.contactsReducer,
  };
};

export const BuildingDormsCardScreen = connect(
  mapStateToProps,
  {},
)(InnerComponent);
