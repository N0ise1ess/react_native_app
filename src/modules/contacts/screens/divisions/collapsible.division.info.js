import {styles} from "./styles";
import {Animated, Text, View} from "react-native";
import React from "react";
import Collapsible from "react-native-collapsible";

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
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text>TEST TEXTS MOTHER</Text>
      </View>
    </Collapsible>
  }

  toggle() {
    this.setState({
      expanded: !this.state.expanded
    });
  }
}
