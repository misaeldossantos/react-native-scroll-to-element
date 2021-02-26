import React from "react";
import Context from "./Context";
import { ScrollView } from "react-native";
import { debounce } from "lodash";
import { useMobxBox } from "./hooks";

const SpecialScrollView = ({ children, ...props }) => {
  const value = useMobxBox({});

  const ref = React.useCallback(
    debounce((ref) => {
      value.set({ ref });
    }, 300),
    []
  );

  return (
    <Context.Provider value={value}>
      <ScrollView ref={ref} {...props}>{children}</ScrollView>
    </Context.Provider>
  );
};

export default SpecialScrollView;
