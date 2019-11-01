import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, View } from 'react-native';
import TempHumBox from './TempHumBox';
import WashmachineBox from './WashmachineBox';
import SprinklersBox from './SprinklersBox';
import FanBox from './FanBox';
import PoolBox from './PoolBox';
import OutsideBox from './OutsideBox';
import FilteringBox from './FilteringBox';
import HeatingBox from './HeatingBox';
import BlindsBox from './BlindsBox';
import styles from '../styles/nodesList';

export default class NodesList extends Component {

    static propTypes = {
        nodes: PropTypes.array.isRequired,
        pending: PropTypes.bool,
        onCommand: PropTypes.func.isRequired,
        onWashmachineAck: PropTypes.func
    }

    static defaultProps = {
        pending: false
    }

    renderNode(node) {
        switch(node.item.id) {
            case 'washmachine' :
                return <WashmachineBox node={node.item} index={node.index}
                            onAck={() => this.props.onWashmachineAck()} />
            case 'sprinklers' :
                return <SprinklersBox node={node.item} index={node.index} />
            case 'fan' :
                return <FanBox node={node.item} index={node.index}
                            onCommand={(param) => this.props.onCommand('fan', param)} />
            case 'poolWater' :
                return <PoolBox node={node.item} index={node.index} />
            case 'heating' :
                return <HeatingBox node={node.item} index={node.index}
                            onCommand={(param) => this.props.onCommand('pool', {action: 'heating', status: param})}/>
            case 'filtering' :
                return <FilteringBox node={node.item} index={node.index}
                            onCommand={(param) => this.props.onCommand('pool', {action: 'filtering', status: param})}/>
            case 'outside' :
                return <OutsideBox node={node.item} index={node.index} />
            case 'blinds' :
                return <BlindsBox node={node.item} index={node.index}
                            onCommand={(param) => this.props.onCommand('blinds', {...param})}/>

            default :
                return <TempHumBox node={node.item} index={node.index} />
        }
    }

    renderSeparator() {
        return (
            <View style={styles.separator} />
        );
    }

    render() {
        return (
            <FlatList data={this.props.nodes}
                style={styles.container}
                ItemSeparatorComponent={(index) => this.renderSeparator(index)}
                keyExtractor={(node) => node.id}
                renderItem={(node) => this.renderNode(node)} />
        );
    }

}