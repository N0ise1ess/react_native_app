import {StyleSheet, Dimensions} from 'react-native';
import * as settingsFonts from '../../../../../constants/styles';
import {getSizeFonts} from '../../../../shared/functions/styles';

const {width, height} = Dimensions.get('window');

export const styles = (fontSize) => StyleSheet.create({
    container: {
        backgroundColor: '#CED8DA',
        flex: 1,
        alignItems: 'center'
    },
    scrollContainer: {
        backgroundColor: '#CED8DA',
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
    }
});
