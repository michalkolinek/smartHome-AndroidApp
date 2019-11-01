import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import NodeBox from './NodeBox';
import Icon from './Icon';

import styles from '../styles/nodeBox';
import blinds from '../styles/blinds';

export default class BlindsBox extends NodeBox {

    handleClick(action, room) {
        this.props.onCommand({action, room});
    }

    renderContent() {
        return this.props.node.rooms.map((room, i) => {
            let style = [styles.diode];
            let stop = false;
            if(room.moving) {
                style.push(styles.diodeActive);
                stop = (
                    <TouchableHighlight onPress={() => this.handleClick('stop', room.id)}>
                        <Icon name={'remove'} />
                    </TouchableHighlight>
                );
            }
            const diode = <View style={style} />

            return (
                <View style={blinds.room} key={'row-' + i}>
                    <View style={blinds.roomTitle}>
                        <Text>{room.title}</Text>
                    </View>
                    <View style={blinds.info}>
                        <Text><Icon name={'position'} /> {room.position}%</Text>
                        <Text><Icon name={'angle'} /> {room.angle}%</Text>
                    </View>
                    <View style={blinds.buttons}>
                        <TouchableHighlight onPress={() => this.handleClick('full-up', room.id)}>
                            <View style={blinds.button}>
                                <Icon name={'full-up'} />
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => this.handleClick('step-up', room.id)}>
                            <View style={blinds.button}>
                                <Icon name={'arrow-up'} />
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => this.handleClick('step-down', room.id)}>
                            <View style={blinds.button}>
                                <Icon name={'arrow-down'} />
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => this.handleClick('full-down', room.id)}>
                            <View style={blinds.button}>
                                <Icon name={'full-down'} />
                            </View>
                        </TouchableHighlight>
                        {stop}
                    </View>
                    {diode}
                </View>
            );
        });
    }
}