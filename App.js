import React, { Component } from 'react';
import { Modal, Button, FlatList, StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seção de comentários</Text>
      <FlatList data={DATA_COMMENTS}
        showsHorizontalScrollIndicator={true}
        renderItem={Comments}
        keyExtractor={item => item.id.toString()}
      >
      </FlatList>
    </View >
  );
}

function showModalComment(commentMessage) {
  <ModalComment commentMessage={commentMessage} modalVisible={true}></ModalComment>
}

class ModalComment extends Component {

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <Text>{this.props.commentMessage}</Text>
            </Pressable>
          </View>
        </View>

      </Modal>
    )
  }
}

const Comments = ({ item }) => (
  <View style={styles.item}>
    <Text>{item.name}</Text>
    <Button onPress={() => showModalComment(item.body)} title='Visualizar'></Button>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    flex: 1,
    marginTop: 60,
    fontSize: 20
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const DATA_COMMENTS = [
  {
    "postId": 1,
    "id": 1,
    "name": "John Travolta",
    "email": "jt@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
  {
    "postId": 1,
    "id": 2,
    "name": "Quentin Tarantino",
    "email": "qt@sydney.com",
    "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
  },
  {
    "postId": 1,
    "id": 3,
    "name": "Uma Thurma",
    "email": "ut@garfield.biz",
    "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
  },
  {
    "postId": 1,
    "id": 4,
    "name": "Bruce Willis",
    "email": "bw@alysha.tv",
    "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
  },
  {
    "postId": 1,
    "id": 5,
    "name": "Tim Roth",
    "email": "tr@althea.biz",
    "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
  }
];
