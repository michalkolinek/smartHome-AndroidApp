import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import moment from 'moment';
import styles from '../styles/nodeBox';
import common from '../styles/common';
import Icon from './Icon';

export default class BoxWaterColumn extends Component {

    static propTypes = {
        value: PropTypes.object,
        period: PropTypes.string,
        unit: PropTypes.string
    };
    static defaultProps = {
        period: 'hour',
        unit: 'mm/h'
    };

    render() {
        if(this.props.value !== null && this.props.value[this.props.period] !== null) {
            const value = Math.round(this.props.value[this.props.period] * 100) / 100;
            return (
                <View style={[styles.box, styles.boxBlue]}>
                    <Icon name="water" color={common.colors.blue} size={28} />
                    <Text style={[styles.boxText, styles.blueText]}>
                        {value} <Text style={styles.unit}>{this.props.unit}</Text>
                    </Text>
                </View>
            );
        } else {
            return false;
        }
    }

}