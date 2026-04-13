import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M21 5H3"}],["path",{"d":"M15 12H3"}],["path",{"d":"M17 19H3"}]];

const TextAlignStart = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

TextAlignStart.displayName = 'TextAlignStart';

export default TextAlignStart;
