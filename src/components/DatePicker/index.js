import React, { useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./style";

export default function DatePicker({ date, setDate }) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [isChoose, setIsChoose] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(date.toDateString());
    setIsChoose(true);
    hideDatePicker();
  };
  return (
    <TouchableOpacity onPress={showDatePicker} style={styles.container}>
      <Text>
        <MaterialIcons name="calendar-today" size={24} color="black" />
      </Text>
      {isChoose ? <Text>selected</Text> : <Text>Check vailability</Text>}
      <Text style={styles.date}>{date}</Text>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
    </TouchableOpacity>
  );
}
