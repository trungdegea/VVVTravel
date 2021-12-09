import React, { useCallback, useRef, useState } from "react";
import {
  StyleSheet,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Animated
} from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { Theme } from "../../constants";

const AnimatedFeather = Animated.createAnimatedComponent(Feather);
const AnimatedEntypo = Animated.createAnimatedComponent(Entypo);
const AnimatedKeyboardAvoidingView = Animated.createAnimatedComponent(KeyboardAvoidingView);
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const SearchBar = ({
  width,
  height,
  idleBg,
  focusBg,
  placeholder,
  placeholderTextColor,
  color,
  focusColor,
  onFocus,
  onBlur,
  onClose,
  onTextInput,
  onSubmitEditing,
}) => {

  const customContainer = {
    width: width || 200,
    height: height || 35,
    backgroundColor: idleBg || "white",
  };
  const customContainer_focus = {
    backgroundColor: focusBg || Theme.COLORS.INPUT,
  };

  const customSearchBar = {
    width: width - 40,
    color: color,
  };
  const customSearchBar_data = {
    width: width - 60,
    color: color,
  };

  const [focus, setFocus] = useState(false);
  const [hasData, setHasData] = useState(false);

  const input = useRef(null);

  const inputHandler = useCallback((e) => {
    onTextInput && onTextInput();
    const text = e.nativeEvent.text;
    text ? setHasData(true) : setHasData(false);
  }, []);

  const focusHandler = useCallback(() => {
    onFocus && onFocus();
    setFocus(true);
  }, []);

  const blurHandler = () => {
    onBlur && onBlur(text);
    setFocus(false);
  };

  const closeHandler = useCallback(() => {
    onClose && onClose();
    input.current.clear();
    setHasData(false);
    Keyboard.dismiss();
  }, []);

  const submitHandler = useCallback(() => {
    onSubmitEditing && onSubmitEditing();
  });

  return (
    <AnimatedKeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[
        styles.searchBarContainer,
        focus ? styles.searchBarContainer_focus : {},
        customContainer,
        focus ? customContainer_focus : {},
      ]}
    >
      {/* search Icon */}
      <AnimatedFeather
        name="search"
        size={20}
        style={{
          color: focus ? focusColor : color,
        }}
      />
      <AnimatedTextInput
        style={[
          styles.searchBar,
          hasData ? customSearchBar_data : customSearchBar,
        ]}
        editable
        placeholder={placeholder || "Search"}
        placeholderTextColor={placeholderTextColor}
        onFocus={focusHandler}
        onTextInput={inputHandler}
        onBlur={blurHandler}
        onSubmitEditing={submitHandler}
        ref={input}
        returnKeyType={"search"}
      />
      {hasData && (
        <AnimatedEntypo
          name="cross"
          size={20}
          style={{
            color: focus ? focusColor : color,
          }}
          onPress={closeHandler}
        />
      )}
    </AnimatedKeyboardAvoidingView>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: "white",
    width: 200,
    borderRadius: 8,
    minWidth: 100,
    height: 35,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  searchBarContainer_focus: {
    backgroundColor: Theme.COLORS.INPUT,
  },
  searchBar: {
    width: 200 - 60,
    paddingHorizontal: 10,
    paddingVertical: 0,
    height: "100%",
    fontSize: 14,
    backgroundColor: "transparent",
  },
});
