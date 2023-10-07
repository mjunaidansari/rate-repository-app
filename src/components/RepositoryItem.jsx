import { Text } from "react-native"

const RepositoryItem = ({item}) => {

	const {id, fullName, description, language, forksCount, stargazersCount, ratingAverage, reviewCount, ownerAvatarUrl} = item

	return (
		<Text>
			<Text>{id + '\n' + fullName + '\n' + description + '\n' + language + '\n' + forksCount + '\n' + stargazersCount + '\n' + ratingAverage + '\n' + reviewCount + '\n' + ownerAvatarUrl}</Text>
		</Text>
	)

} 

export default RepositoryItem