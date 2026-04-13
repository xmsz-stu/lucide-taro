import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M10 15v-3"}],["path",{"d":"M14 15v-3"}],["path",{"d":"M18 15v-3"}],["path",{"d":"M2 8V4"}],["path",{"d":"M22 6H2"}],["path",{"d":"M22 8V4"}],["path",{"d":"M6 15v-3"}],["rect",{"x":"2","y":"12","rx":"2"}]];

const RulerDimensionLine = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

RulerDimensionLine.displayName = 'RulerDimensionLine';

export default RulerDimensionLine;
