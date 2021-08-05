import React from "react";
import * as Feather from "react-icons/fi";
import { IconBaseProps } from "react-icons";

function DynamicFiIcon({ name, ...props }: DynamicFiIconProps) {
  const IconComponent = Feather[name];

  if (!IconComponent) {
    return <Feather.FiArchive {...props} />;
  }

  return <IconComponent {...props} />;
}

export default DynamicFiIcon;

export type DynamicFiIconProps = {
  name: string;
} & IconBaseProps;
