import React from "react";
import { Linking, StyleSheet } from "react-native";
import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Icon,
  Left,
  Right,
  Text,
  Title,
  View
} from "native-base";
import { useNavigation } from "react-navigation-hooks";

export default (props: any) => {
  const { openDrawer } = useNavigation();

  return (
    <Container style={styles.container}>
      <Header style={{ backgroundColor: "#fff" }} androidStatusBarColor="#fff">
        <Left>
          <Button light transparent onPress={() => openDrawer()}>
            <Icon name="menu" style={styles.menu} />
          </Button>
        </Left>
        <Body>
          <Title style={styles.txtMenu}>Home</Title>
        </Body>
        <Right>
          <Button
            transparent
            onPress={() =>
              Linking.openURL(
                "https://github.com/yangga/react-native-template-common-typescript"
              )
            }
          >
            <Text style={styles.txtMenu}>GitHub</Text>
          </Button>
        </Right>
      </Header>
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
  menu: {
    color: "#007bfc"
  },
  txtMenu: {
    color: "#007bfc"
  },
  txt: {
    color: "black"
  }
});
