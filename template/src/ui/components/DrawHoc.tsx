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
  NativeBase,
  Right,
  Text,
  Title
} from "native-base";
import { useNavigation } from "react-navigation-hooks";

export const SampleHeaderLeft = () => {
  const { openDrawer } = useNavigation();
  return (
    <Button
      light
      transparent
      onPress={() => {
        openDrawer();
      }}
    >
      <Icon name="menu" style={styles.menu} />
    </Button>
  );
};

export const SampleHeaderCenter = () => {
  return <Title style={styles.txtMenu}>Home</Title>;
};

export const SampleHeaderRight = () => {
  return (
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
  );
};

interface HeaderParam {
  headerProps?: NativeBase.Header;

  headerLeft?: React.ReactNode;
  headerCenter?: React.ReactNode;
  headerRight?: React.ReactNode;
}

interface ContentParam {
  contentProps?: NativeBase.Container;
  content: React.ReactNode;
}

interface DrawHocParam extends HeaderParam, ContentParam {
  containerProps?: NativeBase.Container;
}

function hoc(param: DrawHocParam) {
  return () => {
    return (
      <Container style={styles.container} {...param.containerProps}>
        <Header
          style={styles.header}
          androidStatusBarColor="#fff"
          {...param.headerProps}
        >
          <Left>{param.headerLeft}</Left>
          <Body>{param.headerCenter}</Body>
          <Right>{param.headerRight}</Right>
        </Header>
        <Content
          contentContainerStyle={styles.contentContainer}
          {...param.contentProps}
        >
          {param.content}
        </Content>
      </Container>
    );
  };
}

export default hoc;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  },
  header: {
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
