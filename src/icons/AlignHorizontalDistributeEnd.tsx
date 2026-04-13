import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"4","y":"5","rx":"2"}],["rect",{"x":"14","y":"7","rx":"2"}],["path",{"d":"M10 2v20"}],["path",{"d":"M20 2v20"}]];

const AlignHorizontalDistributeEnd = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

AlignHorizontalDistributeEnd.displayName = 'AlignHorizontalDistributeEnd';

export default AlignHorizontalDistributeEnd;
