/* eslint-disable react/display-name */
import { Checkbox, type CheckboxProps } from "@chakra-ui/react";
import { ReactNode, Ref, forwardRef } from "react";
import React from "react";

interface Props extends CheckboxProps {
  children: ReactNode;
}

const _CheckBox = forwardRef(
  ({ children, ...rest }: Props, ref: Ref<HTMLInputElement>) => {
    return (
      <Checkbox
        ref={ref}
        size={"md"}
        fontWeight={"700"}
        textColor={"#131316"}
        colorScheme="rgba(19, 19, 22, 1)"
        borderColor={"rgba(219, 222, 229, 1)"}
        {...rest}
      >
        {children}
      </Checkbox>
    );
  }
);

export default _CheckBox;
