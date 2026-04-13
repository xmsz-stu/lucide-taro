import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M22 17h-3"}],["path",{"d":"M22 7h-5"}],["path",{"d":"M5 17H2"}],["path",{"d":"M7 7H2"}],["rect",{"x":"5","y":"14","rx":"2"}],["rect",{"x":"7","y":"4","rx":"2"}]];

const AlignVerticalDistributeCenter = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

AlignVerticalDistributeCenter.displayName = 'AlignVerticalDistributeCenter';

export default AlignVerticalDistributeCenter;
