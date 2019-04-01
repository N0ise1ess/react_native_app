import { styles } from "./styles";
import { Animated, Linking, NativeModules, Text, View } from "react-native";
import React, { Component } from "react";
import {
  CustomIcon,
  CustomSnackbar
} from "../../../../shared/components";
import { Button } from "native-base";

export class DivisionInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: styles(props.fontSize),
    };
  }

  render() {
    const { item, isOpened } = this.props
    const { directors, building } = item;
    const { styles } = this.state;
    return <React.Fragment>
      {
        isOpened ? <View style={styles.container}>
          <View style={styles.content}>
            <View style={styles.dummy} />
            <View style={[styles.section, styles.borderLine]}>
              <View style={styles.universityInfo}>
                {this.renderLabel("Адрес")}
                <Text style={styles.nameStyle}>{building || ''}</Text>
              </View>
            </View>
          </View>
          {directors && directors.map((item, index) => this.renderDirectorSection(item, index, directors.length))}
        </View> : <View />
      }
    </React.Fragment>
  }

  renderDirectorSection(directorInfo, index, arrayLength) {
    const { styles } = this.state;
    return <View style={styles.content} key={index}>
      <View style={styles.dummy} />
      <View style={[styles.section, index !== arrayLength - 1 ? styles.borderLine : {}]}>
        {directorInfo && directorInfo.name !== null && <View style={styles.directorSection}>
          {this.renderLabel(directorInfo.post)}
          <Text style={styles.nameStyle}>{directorInfo.name}</Text>
        </View>}
        {directorInfo && directorInfo.phoneNumber !== null && <View style={[styles.dataSection]}>
          <View style={{ flexDirection: 'column' }}>
            {this.renderLabel('Телефон')}
            <Text style={styles.dataStyle}>{directorInfo.phoneNumber}</Text>
          </View>
          <Button style={styles.btnImageStyle} info>
            <CustomIcon name="call" style={styles.imageStyle}
              onPress={() => this.makeACall(directorInfo.phoneNumber)} />
          </Button>
        </View>}
        {directorInfo && directorInfo.email !== null && <View style={[styles.dataSection]}>
          <View style={{ flexDirection: 'column' }}>
            {this.renderLabel('E-Mail')}
            <Text style={styles.dataStyle}>{directorInfo.email}</Text>
          </View>
          <Button style={styles.btnImageStyle} info>
            <CustomIcon name="message" style={styles.imageStyle}
              onPress={() => this.handleSendEmail(directorInfo.email)} />
          </Button>
        </View>}
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
            CustomSnackbar.show({
              title: "Почтовая программа недоступна"
            });
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

  collapse() {
    this.setState({
      expanded: false
    });
  }
}
