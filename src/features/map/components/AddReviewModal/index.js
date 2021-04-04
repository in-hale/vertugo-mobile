import React, {useState} from "react";
import {StyleSheet, View, TextInput, Keyboard} from "react-native";
import Modal from 'react-native-modal';
import {Rating} from "react-native-elements";
import Button from "../../../../components/Button";

const AddReviewModal = ({ visible, onRequestClose }) => {
  const [rating, setRating] = useState(3);
  const [reviewText, setReviewText] = useState('');

  return <Modal onBackdropPress={() => {
    Keyboard.dismiss();
    onRequestClose();
  }} transparent isVisible={visible} avoidKeyboard>
    <View style={styles.container}>
      <View style={styles.modalView}>
        <TextInput
          style={styles.input}
          multiline
          placeholder='Nice Place!'
          value={reviewText}
          onChangeText={setReviewText}
        />
        <View style={styles.ratingAndButtonContainer}>
          <Rating startingValue={rating} onFinishRating={r => {setRating(Math.round(r))}} imageSize={30} />
          <Button title='Send' size={8} style={styles.button} />
        </View>
      </View>
    </View>
  </Modal>
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    alignItems: 'flex-start'
  },
  input: {
    height: 70,
    width: '100%'
  },
  ratingAndButtonContainer: {
    flexDirection: 'row',
    width: '100%'
  },
  button: {
    position: 'absolute',
    right: 0
  }
})

export default AddReviewModal;
