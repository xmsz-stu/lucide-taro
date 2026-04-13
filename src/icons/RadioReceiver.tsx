import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M5 16v2"}],["path",{"d":"M19 16v2"}],["rect",{"x":"2","y":"8","rx":"2"}],["path",{"d":"M18 12h.01"}]];

const RadioReceiver = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

RadioReceiver.displayName = 'RadioReceiver';

export default RadioReceiver;
