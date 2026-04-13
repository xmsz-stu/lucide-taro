import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"7","y":"9","rx":"2"}],["path",{"d":"M22 20H2"}],["path",{"d":"M22 4H2"}]];

const AlignVerticalSpaceAround = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

AlignVerticalSpaceAround.displayName = 'AlignVerticalSpaceAround';

export default AlignVerticalSpaceAround;
