import { StyleSheet } from 'react-native';
import common from './common';

export default StyleSheet.create({

    room: {
        marginTop: 6
    },

	roomTitle: {
        width: '100%',
        padding: 10,
        fontSize: 12
	},

	info: {
        flex: 1,
	    flexDirection: 'row',
        justifyContent: 'flex-start',
        lineHeight: 40,
	},

	buttons: {
	    flex: 1,
	    flexDirection: 'row',
        justifyContent: 'flex-end'
	},

	button: {
	    flexDirection: 'row',
        justifyContent: 'center',
	    borderWidth: 1,
        borderRadius: 3,
        width: 40,
        padding: 4,
        color: common.colors.black,
        borderColor: common.colors.black,
        marginLeft: 2
	}
});