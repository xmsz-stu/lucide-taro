import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"4","y":"5","rx":"2"}],["rect",{"x":"14","y":"7","rx":"2"}],["path",{"d":"M17 22v-5"}],["path",{"d":"M17 7V2"}],["path",{"d":"M7 22v-3"}],["path",{"d":"M7 5V2"}]];

const AlignHorizontalDistributeCenter = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

AlignHorizontalDistributeCenter.displayName = 'AlignHorizontalDistributeCenter';

export default AlignHorizontalDistributeCenter;
