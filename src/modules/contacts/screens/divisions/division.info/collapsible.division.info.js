import {styles} from "./styles";
import {Animated, Linking, NativeModules, Text, View} from "react-native";
import React, {Component} from "react";
import Collapsible from "react-native-collapsible";
import {CustomIcon} from "../../../../shared/components/custom-icon/index";
import {Button} from "native-base";

export default class CollapsibleDivisionInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: styles(props.fontSize),
      expanded: false
    };
  }

  render() {
    const {item} = this.props
    const { directors } = item;
    const {styles} = this.state;
    if (item.departments === null) {
      return (
        <Collapsible collapsed={!this.state.expanded} style={{flex: 1}}>
          <View style={styles.content}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
              <View style={styles.dummy}/>
              <View style={[styles.section, styles.borderLine]}>
                <View style={{alignSelf: 'flex-start', marginBottom: 5}}>
                  {this.renderLabel("Адрес")}
                  <Text style={styles.nameStyle}>{item.building || ''}</Text>
                </View>
              </View>
            </View>
            {directors ? directors.map((item, index) => this.renderDirectorSection(item, index, directors.length)) : null}
          </View>
        </Collapsible>
      )
    } else {
      return null;
    }
  }

  renderDirectorSection(directorInfo, index, arrayLength) {
    const { styles } = this.state;
    return <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}} key={index}>
      <View style={styles.dummy}/>
      <View style={[styles.section, index !== arrayLength - 1 ? styles.borderLine : {}]}>
        <View style={{marginTop: 10, alignSelf: 'flex-start'}}>
          {this.renderLabel(directorInfo.post)}
          <Text style={styles.nameStyle}>{directorInfo.name}</Text>
        </View>
        <View style={[styles.dataSection]}>
          <View style={{flexDirection: 'column'}}>
            {this.renderLabel('Телефон')}
            <Text style={styles.dataStyle}>{directorInfo.phoneNumber}</Text>
          </View>
          <Button style={styles.btnImageStyle} info>
            <CustomIcon name={'call'} style={styles.imageStyle}
                        onPress={() => this.makeACall('')}/>
          </Button>
        </View>
        <View style={[styles.dataSection]}>
          <View style={{flexDirection: 'column'}}>
            {this.renderLabel('E-Mail')}
            <Text style={styles.dataStyle}>{directorInfo.email}</Text>
          </View>
          <Button style={styles.btnImageStyle} info>
            <CustomIcon name={'message'} style={styles.imageStyle}
                        onPress={() => this.handleSendEmail('')}/>
          </Button>
        </View>
      </View>
    </View>
  }

  renderLabel = text => <Text style={this.state.styles.label}>{text.toUpperCase()}</Text>;

  makeACall(phoneNumber) {
    if (phoneNumber.length > 0) {
      Linking.openURL(`tel://${phoneNumber}`)
    }
  }

  handleSendEmail(email) {
    if (email.length > 0) {
      NativeModules.CampusModule.sendEmail(email, () => {
        Linking.canOpenURL(`mailto:${email}`).then((supported) => {
          if (supported) {
            Linking.openURL(`mailto:${email}`)
          } else {
            alert('Cannot send email');
          }
        })
      })
    }
  }

  toggle() {
    this.setState({
      expanded: !this.state.expanded
    });
  }
}
