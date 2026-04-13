import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"1"}],["rect",{"x":"3","y":"14","rx":"1"}],["path",{"d":"M14 4h7"}],["path",{"d":"M14 9h7"}],["path",{"d":"M14 15h7"}],["path",{"d":"M14 20h7"}]];

const LayoutList = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

LayoutList.displayName = 'LayoutList';

export default LayoutList;
