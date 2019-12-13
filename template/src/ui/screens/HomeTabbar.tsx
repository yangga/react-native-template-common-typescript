import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { Container, Content, Text } from "native-base";
import { useRedux } from "flow";

export default (props: any) => {
  const [flowState, flowAction] = useRedux();
  console.log("flowState", flowState);
  useEffect(() => {
    flowAction.fetch().then(() => {});
  }, []);

  return (
    <Container style={styles.container}>
      <Content contentContainerStyle={styles.contentContainer}>
        <Text style={styles.txt}>
          You can choose navigators in "AppNavigator.tsx"
        </Text>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  txt: {
    color: "black"
  }
});
