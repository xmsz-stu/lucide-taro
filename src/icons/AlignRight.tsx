import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M21 5H3"}],["path",{"d":"M21 12H9"}],["path",{"d":"M21 19H7"}]];

const AlignRight = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

AlignRight.displayName = 'AlignRight';

export default AlignRight;
