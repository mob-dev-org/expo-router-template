/* eslint-disable @typescript-eslint/no-empty-function */
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import React, { useRef } from "react";
import { Button, StyleSheet, View } from "react-native";

import BottomSheetCombined from "../components/BottomSheetCombined";
import BottomSheetDynamic from "../components/BottomSheetDynamic";
import BottomSheetScrollable from "../components/BottomSheetScrollable";
import BottomSheet, { BottomSheetRef } from "../index";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const BottomSheetExample = () => {
  const sheetRef = useRef<BottomSheetRef>();
  const sheetWithInputRef = useRef<BottomSheetRef>();
  const sheetRefScrollable = useRef<BottomSheetRef>();
  const sheetRefDynamic = useRef<BottomSheetRef>();
  const combinedRefDynamic = useRef<BottomSheetRef>();

  return (
    <View style={{ flex: 1 }}>
      {/* <Header />
            <Title name="Sheet examples" /> */}
      <View style={styles.container}>
        <Button
          //   style={{ marginBottom: 8 }}
          onPress={() => sheetRef?.current?.showModal()}
          title="Simple sheet"></Button>
        <BottomSheet ref={sheetRef} snapPoints={["30%"]} />

        {/* ------------------------------------------------------------------------------------ */}

        <Button
          //   style={{ marginBottom: 8 }}
          onPress={() => sheetWithInputRef?.current?.showModal()}
          title="Sheet with input"></Button>

        <BottomSheet ref={sheetWithInputRef} snapPoints={["70%"]}>
          <BottomSheetTextInput
            style={{
              borderColor: "#fff",
              borderWidth: 1,
              margin: 16,
            }}
          />
        </BottomSheet>

        {/* ------------------------------------------------------------------------------------ */}
        <Button
          //   style={{ marginBottom: 8 }}
          onPress={() => sheetRefScrollable?.current?.showModal()}
          title="Scrollable sheet"></Button>
        <BottomSheetScrollable
          ref={sheetRefScrollable}
          // example
          // snapPoints={["30%", "50%"]}
        />

        {/* ------------------------------------------------------------------------------------ */}

        <Button
          //   style={{ marginBottom: 8 }}
          onPress={() => sheetRefDynamic?.current?.showModal()}
          title="Dynamic sheet"></Button>
        <BottomSheetDynamic ref={sheetRefDynamic} />

        {/* ------------------------------------------------------------------------------------ */}

        <Button
          //   style={{ marginBottom: 8 }}
          onPress={() => combinedRefDynamic?.current?.showModal()}
          title="Combined sheet"></Button>
        <BottomSheetCombined ref={combinedRefDynamic}>
          <View
            style={{
              // Example of dynamic sheet and how it works, play around with height
              height: 200, // comment to see dynamic sheet
              // height: 1200, // uncomment to see scrollable sheet
              // for you to be able to see that the sheet is scrollable
              backgroundColor: "red",
            }}
          />
        </BottomSheetCombined>
      </View>
    </View>
  );
};

export default BottomSheetExample;
