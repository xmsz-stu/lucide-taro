import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"14","y":"3","rx":"1"}],["rect",{"x":"5","y":"3","rx":"1"}]];

const Pause = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Pause.displayName = 'Pause';

export default Pause;
