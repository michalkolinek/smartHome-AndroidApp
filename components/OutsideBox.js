import React from 'react';
import { View } from 'react-native';
import NodeBox from './NodeBox';
import BoxTemp from './BoxTemp';
import BoxHum from './BoxHum';
import BoxPress from './BoxPress';
import BoxWeather from './BoxWeather';
import BoxWaterColumn from './BoxWaterColumn';
import styles from '../styles/nodeBox';

export default class OutsideBox extends NodeBox {

    renderContent() {
        return [
            <View style={styles.data} key={'row-1'}>
                <BoxTemp key="temp" value={this.props.node.temp} />
                <BoxHum key="hum" value={this.props.node.hum} />
            </View>,
            <View style={styles.data} key={'row-2'}>
                 <BoxPress key="press" value={this.props.node.press} />
                 <BoxWeather key="wind" value={{avg: this.props.node.windAvg, max: this.props.node.windMax}} />
            </View>,
            <View style={styles.data} key={'row-3'}>
                 <BoxWaterColumn key="rainHour" value={this.props.node.waterColumn} />
                 <BoxWaterColumn key="rainDay" value={this.props.node.waterColumn} period="day" unit="mm/den" />
            </View>
        ];
    }
}