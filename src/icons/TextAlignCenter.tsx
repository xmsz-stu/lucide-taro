import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M21 5H3"}],["path",{"d":"M17 12H7"}],["path",{"d":"M19 19H5"}]];

const TextAlignCenter = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

TextAlignCenter.displayName = 'TextAlignCenter';

export default TextAlignCenter;
