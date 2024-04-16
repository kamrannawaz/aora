import {
  ActivityIndicator,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Redirect } from "expo-router";
import { useGlobalContext } from "../context/GlobalProvider";

const Splash = () => {
    const { loading, isLogged } = useGlobalContext();

  if(!loading && !isLogged){
    return <Redirect href="/start" />;
  }

  if(!loading && isLogged){
    return <Redirect href="/home" />;
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator />
          <Text className="mt-4 text-center text-white">Loading...</Text>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Splash;
