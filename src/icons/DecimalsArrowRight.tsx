import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M10 18h10"}],["path",{"d":"m17 21 3-3-3-3"}],["path",{"d":"M3 11h.01"}],["rect",{"x":"15","y":"3","rx":"2.5"}],["rect",{"x":"6","y":"3","rx":"2.5"}]];

const DecimalsArrowRight = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

DecimalsArrowRight.displayName = 'DecimalsArrowRight';

export default DecimalsArrowRight;
