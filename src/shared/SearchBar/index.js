import React, { useCallback, useRef, useState } from "react";
import {
  StyleSheet,
  TextInput,
  SafeAreaView,
  Keyboard,
} from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { Theme } from "../../constants";

const SearchBar = ({ width, height, idleBg, focusBg, placeholder, onFocus, onBlur, onClose}) => {
  const customContainer = {
    width: width || 200,
    height: height || 35,
    backgroundColor: idleBg || "white",
  };

  const customContainer_focus = {
    backgroundColor:  focusBg || Theme.COLORS.INPUT,
  };

  const customSearchBar = {
    width: width - 40,
  };
  const customSearchBar_data = {
    width: width - 60,
  };

  const [focus, setFocus] = useState(false);
  const [hasData, setHasData] = useState(false);


  const input = useRef(null);

  const focusHandler = useCallback(() => {
    onFocus && onFocus();
    setFocus(true);
  }, []);

  const blurHandler = (e) => {
    const text = e.nativeEvent.text;
    onBlur && onBlur(text);
    setFocus(false);
    text ? setHasData(true) : setHasData(false);
  };

  const closeHandler = useCallback(() => {
    onClose && onClose();
    input.current.clear();
    setHasData(false);
  }, []);

  return (
    <SafeAreaView
      style={[
        styles.searchBarContainer,
        focus ? styles.searchBarContainer_focus : {},
        customContainer,
        focus ? customContainer_focus : {},
      ]}
    >
      {/* search Icon */}
      <Feather name="search" size={20} color={Theme.COLORS.BLACK} />
      <TextInput
        style={[styles.searchBar, hasData ? customSearchBar_data : customSearchBar]}
        editable
        placeholder={placeholder || "Search"}
        onFocus={focusHandler}
        onEndEditing={blurHandler}
        ref = {input}
      />
      {hasData && <Entypo name="cross" size={20} color={Theme.COLORS.BLACK} onPress={closeHandler} />}
    </SafeAreaView>
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
