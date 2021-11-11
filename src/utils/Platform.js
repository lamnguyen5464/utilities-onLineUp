import {
	isAndroid,
	isIOS,
} from "react-device-detect";

module.exports = {
	OS = {
		android: "android",
		ios: 'ios',
		other: 'other',
	},

	get() {
		return isAndroid 
			? this.OS.android 
			: isIOS 
				? this.OS.ios 
				: this.OS.other
	}

}