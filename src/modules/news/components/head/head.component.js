import React, { Component } from 'react';
import {
    View,
    Animated,
    Spinner,
    Image,
    Dimensions,
} from 'react-native';
import ImageSlider from 'react-native-image-slider';

import { styles } from './styles';

const imagesOnLoading = [{ isLoading: true }];
const { height: NAVBAR_HEIGHT, } = Dimensions.get('window');

export class Head extends Component {

    renderSlider = (slider = []) => {
        return (
            <ImageSlider
                style={styles.customSlide}
                loopBothSides
                images={slider}
                customSlide={({ index, item }) => (
                    <View
                        key={`${index}_slider`}
                        style={[
                            { width: Dimensions.get('window').width },
                            item.isLoading && {
                                backgroundColor: 'silver',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: NAVBAR_HEIGHT / 5,
                            },
                        ]}
                    >
                        {item.isLoading ? (
                            <Spinner color='blue' />
                        ) : (
                                <Image source={{ uri: `data:image/png;base64,${item.image}` }} style={styles.sliderImage} />
                            )}
                    </View>
                )}
                customButtons={(position, move) => (
                    <View style={styles.buttons}>
                        {slider.map((image, index) => {
                            return (
                                <View key={index} style={styles.button}>
                                    <View key={index} style={[
                                        {
                                            backgroundColor: '#163D7D',
                                            width: 12,
                                            height: 12,
                                            borderRadius: 20,
                                            borderWidth: 1,
                                            borderColor: '#fff',
                                            marginLeft: 5,
                                            marginBottom: 10,
                                            marginRight: 5,
                                        },
                                        position === index && styles.buttonSelected]
                                    } />
                                </View>
                            );
                        })}
                    </View>
                )}
            />
        );
    };

    render() {
        const { animation, renderTabBar, slider } = this.props;

        const transformWrapper = animation.getTransformWrapper();
        const opacitySearchBar = animation.getOpacityHead();

        return (
            <Animated.View style={[styles.wrapper, transformWrapper]}>
                <Animated.View style={opacitySearchBar}>
                    <View style={styles.headContainer}>
                        {(slider
                            ? this.renderSlider(slider)
                            : this.renderSlider(imagesOnLoading))}
                    </View>
                </Animated.View>
                {renderTabBar()}
            </Animated.View>
        );
    }
}
