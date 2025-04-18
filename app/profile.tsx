import { useRouter } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function Profile() {
    const router = useRouter();
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile Screen</Text>
        <Button title="Go Back" onPress={() => router.back()} />
      </View>
    );
  }