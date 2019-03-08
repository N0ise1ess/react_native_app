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
    return(
      <Collapsible collapsed={!this.state.expanded}>
      <View style={styles.content}>
        <View style={{flex:1,justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor:'grey', marginBottom: 5}}>
          <View style={{alignSelf:'flex-start'}}>
            {this.renderLabel("Адрес")}
            <Text>Адрес адрес</Text>
          </View>
        </View>
        <View style={{flex:1,justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor:'grey', marginBottom: 5}}>
          <View style={{marginTop: 10, alignSelf:'flex-start'}}>
            {this.renderLabel("Директор академии")}
            <Text>Имя имя имя</Text>
          </View>
          <View style={[styles.dataSection]}>
            <View style={{ flexDirection: 'column' }}>
              {this.renderLabel('Телефон')}
              <Text style={styles.dataStyle}>+79999999</Text>
            </View>
            <Button style={styles.btnImageStyle} info>
              <CustomIcon name={'call'} style={styles.imageStyle}
                          onPress={() => this.makeACall('')} />
            </Button>
          </View>
          <View style={[styles.dataSection]}>
            <View style={{ flexDirection: 'column' }}>
              {this.renderLabel('Email')}
              <Text style={styles.dataStyle}>test@yandex.ru</Text>
            </View>
            <Button style={styles.btnImageStyle} info>
              <CustomIcon name={'call'} style={styles.imageStyle}
                          onPress={() => this.makeACall('')} />
            </Button>
          </View>
        </View>
        <View style={{flex:1,justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor:'grey', marginBottom: 5}}>
          <View style={{alignSelf:'flex-start'}}>
            {this.renderLabel("Зам директора академии")}
            <Text>Имя имя имя</Text>
          </View>
          <View style={{alignSelf:'flex-start'}}>
            {this.renderLabel("Телефон")}
            <Text>+7 921 981 28 78</Text>
          </View>
          <View style={{alignSelf:'flex-start'}}>
            {this.renderLabel("Email")}
            <Text>test@gmail.com</Text>
          </View>
        </View>
      </View>
    </Collapsible>
    )
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
