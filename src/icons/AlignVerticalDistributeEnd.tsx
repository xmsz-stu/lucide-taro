import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"5","y":"14","rx":"2"}],["rect",{"x":"7","y":"4","rx":"2"}],["path",{"d":"M2 20h20"}],["path",{"d":"M2 10h20"}]];

const AlignVerticalDistributeEnd = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

AlignVerticalDistributeEnd.displayName = 'AlignVerticalDistributeEnd';

export default AlignVerticalDistributeEnd;
