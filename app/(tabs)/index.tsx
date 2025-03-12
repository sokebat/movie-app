import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
    className="flex items-center justify-center h-full text-primary"
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    
      <Text> hello world </Text>
      <Link href={{
        pathname: "/movie/[id]",
        params: { id: "1" },
      }}>Go to Movie 1</Link>
      <Link href={{
        pathname: "/movie/[id]",
        params: { id: "2" },
      }}>Go to Movie 2</Link>
      <Link href={{
        pathname: "/saved",
      }}>Go to Saved</Link>
      
    </View>
  );
}
