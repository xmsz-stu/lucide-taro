import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"5","y":"2","rx":"2"}],["path",{"d":"M15 14h.01"}],["path",{"d":"M9 6h6"}],["path",{"d":"M9 10h6"}]];

const PcCase = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

PcCase.displayName = 'PcCase';

export default PcCase;
