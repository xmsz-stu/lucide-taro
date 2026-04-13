import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m13 21-3-3 3-3"}],["path",{"d":"M20 18H10"}],["path",{"d":"M3 11h.01"}],["rect",{"x":"6","y":"3","rx":"2.5"}]];

const DecimalsArrowLeft = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

DecimalsArrowLeft.displayName = 'DecimalsArrowLeft';

export default DecimalsArrowLeft;
