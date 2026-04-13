import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"5","y":"2","rx":"2","ry":"2"}],["path",{"d":"M12 18h.01"}]];

const Smartphone = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Smartphone.displayName = 'Smartphone';

export default Smartphone;
