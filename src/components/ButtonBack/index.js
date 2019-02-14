import React from 'react';
import {TouchableOpacity} from 'react-native';
import CustomIcon from '../CustomIcon';

class ButtonBack extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={() => this.props.onPress()}>
                <CustomIcon 
                    style={{
                        width: 25,
                        height: 25,
                        marginLeft: 20,
                        fontSize: 23,
                        color: '#fff'
                    }} name="back"/>
            </TouchableOpacity>
        )
    }
}
export default ButtonBack;