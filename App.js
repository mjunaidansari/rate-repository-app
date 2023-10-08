// import { View } from "react-native"

// import Main from "./src/components/Main"
// import RepositoryList from "./src/components/RepositoryList"

// const App = () => {
// 	return (
// 		<View>
// 			<Main/>
// 			<RepositoryList/>
// 		</View>
// 	)
// }

// export default App

import { Text, StyleSheet } from "react-native"

const styles = StyleSheet.create({

	text: {
		color: 'grey',
		fontSize: 14,
	},
	blueText: {
		color: 'blue'
	},
	bigText: {
		fontSize: 24,
		fontWeight: '700',
	}

})

const FancyText = ({ isBlue, isBig, children }) => {
	
	const textStyles = [
		styles.text,
		isBlue && styles.blueText,
		isBig && styles.bigText
	]

	return <Text style={textStyles}>{children}</Text>
}

const App = () => {

	return (
		<>
			<FancyText>Simple Text</FancyText>
			<FancyText isBlue>Blue Text</FancyText>
			<FancyText isBig>Big Text</FancyText>
			<FancyText isBig isBlue>
				Big Blue Text
			</FancyText>
		</>
	)

}

export default App