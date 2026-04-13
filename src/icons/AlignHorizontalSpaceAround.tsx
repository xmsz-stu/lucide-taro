import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"9","y":"7","rx":"2"}],["path",{"d":"M4 22V2"}],["path",{"d":"M20 22V2"}]];

const AlignHorizontalSpaceAround = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

AlignHorizontalSpaceAround.displayName = 'AlignHorizontalSpaceAround';

export default AlignHorizontalSpaceAround;
