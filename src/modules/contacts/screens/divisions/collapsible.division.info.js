import {styles} from "./styles";
import {Animated, Linking, Text, View} from "react-native";
import React from "react";
import Collapsible from "react-native-collapsible";
import {CustomIcon} from "../../../shared/components/custom-icon";
import {Button} from "native-base";

export default class CollapsibleDivisionInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: styles(props.fontSize),
      expanded: false
    };
  }

  render() {
    const {item} = this.props
    return <Collapsible collapsed={!this.state.expanded}>
      <View style={styles.content}>
        <View style={{flex:1,justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor:'grey', marginBottom: 5}}>
          {this.renderLabel("Адрес")}
          <Text>Адрес адрес</Text>
        </View>
        <View style={{flex:1,justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor:'grey', marginBottom: 5}}>
          <View style={{marginTop: 10}}>
            {this.renderLabel("Директор академии")}
            <Text>Имя имя имя</Text>
          </View>
          <View style={{marginTop: 10}}>
          {this.renderLabel("Телефон")}
            <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
              <Text>+7 921 981 28 78</Text>
              <Button style={styles.btnImageStyle} info>
                <CustomIcon name={'call'} style={styles.imageStyle}
                            onPress={() => this.sendEmail('email')} />
              </Button>
            </View>
          </View>
          <View style={{marginTop: 10}}>
            {this.renderLabel("Email")}
            <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
              <Text>test@gmail.com</Text>
              <Button style={styles.btnImageStyle} info>
                <CustomIcon name={'call'} style={styles.imageStyle}
                            onPress={() => this.sendEmail('email')} />
              </Button>
            </View>
          </View>
        </View>
        <View style={{flex:1,justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor:'grey', marginBottom: 5}}>
          {this.renderLabel("Зам директора академии")}
          <Text>Имя имя имя</Text>
          {this.renderLabel("Телефон")}
          <Text>+7 921 981 28 78</Text>
          {this.renderLabel("Email")}
          <Text>test@gmail.com</Text>
        </View>
      </View>
    </Collapsible>
  }

  renderLabel = text => <Text style={styles.label}>{text.toUpperCase()}</Text>;

  makeACall(phoneNumber) {
    if (phoneNumber.length > 0) {
      Linking.openURL(`tel://${phoneNumber}`)
    }
  }

  sendEmail(email) {
    if (email.length > 0) {
      Linking.openURL(`mailto:${email}`)
    }
  }

  toggle() {
    this.setState({
      expanded: !this.state.expanded
    });
  }
}
