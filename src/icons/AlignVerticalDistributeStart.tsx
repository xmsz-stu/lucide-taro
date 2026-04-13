import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"5","y":"14","rx":"2"}],["rect",{"x":"7","y":"4","rx":"2"}],["path",{"d":"M2 14h20"}],["path",{"d":"M2 4h20"}]];

const AlignVerticalDistributeStart = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

AlignVerticalDistributeStart.displayName = 'AlignVerticalDistributeStart';

export default AlignVerticalDistributeStart;
