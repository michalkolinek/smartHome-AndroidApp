import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import moment from 'moment';
import styles from '../styles/nodeBox';
import common from '../styles/common';
import Icon from './Icon';

export default class BoxStatus extends Component {

    static propTypes = {
        value: PropTypes.bool
    }

    render() {
        if(this.props.value !== null) {

            let style = [styles.diode];
            if(this.props.value) {
                style.push(styles.diodeActive);
            }
            const diode = <View style={style} />

            return (
                <View style={[styles.box, styles.boxBlack]}>
                    <Icon name={'power'} color={common.colors.black} />
                    <Text style={[styles.boxText, styles.blackText]}>
                        {this.props.value ? 'ON' : 'OFF'}
                    </Text>
                    {diode}
                </View>
            );
        } else {
            return false;
        }
    }

}