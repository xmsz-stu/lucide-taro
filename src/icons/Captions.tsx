import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"5","rx":"2","ry":"2"}],["path",{"d":"M7 15h4M15 15h2M7 11h2M13 11h4"}]];

const Captions = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Captions.displayName = 'Captions';

export default Captions;
