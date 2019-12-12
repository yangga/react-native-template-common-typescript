import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "react-navigation-hooks";
import SplashScreen from "react-native-splash-screen";
import localize from "localize";

export default props => {
  const { navigate } = useNavigation();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 1000);

    Promise.all([
      localize.initAsync(),
      (async () => {
        return new Promise(resolve => {
          console.log("sample loading...");
          setTimeout(() => resolve(), 3000);
        });
      })()
    ])
      .then(() => {
        setLoading(false);
        setTimeout(() => navigate("Main"));
      })
      .catch((e: Error) => {
        console.error(e);
      });
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? <Text>Loading...</Text> : <Text>{localize.t("hello")}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
