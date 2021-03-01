import React, { useContext, useEffect, useRef } from "react";
import { findNodeHandle, View } from "react-native";
import Context from "./Context";
import { debounce } from "lodash";

const SpecialView: React.FC = ({ id, focused, children, ...props }, self) => {
  const context = useContext(Context);

  const ref = useRef();

  const getRelativeLayout = React.useCallback(
    debounce((cb) => {
      if (!context) {
        throw new Error("You need wrap parent with SpecialScrollView");
      }

      const scrollRef = context.get().ref;
      if (ref.current && scrollRef) {
        ref.current.measureLayout(findNodeHandle(scrollRef), (x, y) => {
          cb({ x, y });
        });
      }
    }, 300),
    []
  );

  const focus = React.useCallback(({ animated = true } = {}) => {
    getRelativeLayout(({ y }) => {
      context.get().ref.scrollTo({ y, animated });
    });
  }, []);

  React.useImperativeHandle(self, () => ({
    focus,
  }));

  useEffect(() => {
    if (focused) {
      focus();
    }
  }, [focused]);

  return (
    <View ref={ref} {...props}>
      {children}
    </View>
  );
};

export default React.forwardRef(SpecialView);
