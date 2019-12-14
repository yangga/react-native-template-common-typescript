import React from "react";
import {
  Content,
  List,
  Header,
  Body,
  Title,
  ListItem,
  Container,
  Left,
  Right,
  Icon,
  Text
} from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "react-navigation-hooks";

export default (props: any) => {
  const { closeDrawer } = useNavigation();

  return (
    <ScrollView>
      <Container>
        <Header>
          <Left />
          <Body style={{ flexDirection: "row" }}>
            <Title>HelloWorld</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List>
            <ListItem onPress={() => closeDrawer()} selected={true}>
              <Left>
                <Text>First</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem onPress={() => closeDrawer()}>
              <Left>
                <Text>Second</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    </ScrollView>
  );
};
