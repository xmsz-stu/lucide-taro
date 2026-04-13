import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M3 5h18"}],["path",{"d":"M3 12h18"}],["path",{"d":"M3 19h18"}]];

const AlignJustify = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

AlignJustify.displayName = 'AlignJustify';

export default AlignJustify;
