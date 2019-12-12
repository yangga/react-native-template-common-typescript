import React from "react";
import { StyleSheet } from "react-native";
import { Container, Content, Text } from "native-base";

export default (props: any) => {
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
