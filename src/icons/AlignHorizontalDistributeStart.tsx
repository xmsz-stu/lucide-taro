import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"4","y":"5","rx":"2"}],["rect",{"x":"14","y":"7","rx":"2"}],["path",{"d":"M4 2v20"}],["path",{"d":"M14 2v20"}]];

const AlignHorizontalDistributeStart = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

AlignHorizontalDistributeStart.displayName = 'AlignHorizontalDistributeStart';

export default AlignHorizontalDistributeStart;
