import { Container, Content, Icon, List, Text, Spinner } from 'native-base';
import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import {Navigation} from 'react-native-navigation';
import * as actions from '../../../../actions/questionnairesAction';

import { ButtonBack, FooterSection, CustomIcon } from '../../../shared/components';
import { styles } from './styles';

class InnerComponent extends Component {
  
  static options(passProps) {
    return {
      topBar: {
        title: {
          text: 'Анкетные опросы',
        },
      }
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      styles: styles(props.fontSize),
    };
    this.props.getAllQuestionnaires(this.props.token);
  }

  componentDidUpdate(props) {
    this.props.fontSize !== props.fontSize && this.setState({styles: styles(this.props.fontSize)});
  }

  handleClickQuestionnaire = (id, title) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'QuestionnairesStep',
      },
      passProps: {
        itemId: id,
      itemTitle: title, 
      }
    })
  }

  render() {
    const { userStatus, listQuestionnaires } = this.props;
    const {styles} = this.state;
    
    return (
      <Container style={styles.container}>
        <Content>
          {listQuestionnaires ? <List
            dataArray={listQuestionnaires}
            renderRow={item => (
              <TouchableOpacity
                key={item.id}
                onPress={() => this.handleClickQuestionnaire(item.id, item.value)}
                style={[styles.listStyle, item.passed && styles.opacityStyle]}>
                <View style={styles.listItemStyle}>
                 {item.passed ? <CustomIcon style={styles.icon} name="ok"/> : <View style={styles.octions}/>}
                  <Text style={styles.bookTitle}>{item.value}</Text>
                </View>
                <Text style={styles.bookAuthor}>
                  ~{item.minutes} минут
                </Text>
              </TouchableOpacity>
            )}
          /> : <Spinner color="blue"/>}
          
        </Content>
        <FooterSection componentId={this.props.componentId} userStatus={userStatus} />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.questionnaires,
    ...state.authReducer,
    ...state.settings,
  };
};

// const mapDispatchToProps = dispatch => ({
//   getQuestionnaire: () => dispatch(getQuestionnaire()),
//   dispatch,
// });

export const QuestionnairesScreen = connect(
  mapStateToProps,
  {...actions},
)(InnerComponent);
