import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M2 20h.01"}],["path",{"d":"M7 20v-4"}]];

const SignalLow = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

SignalLow.displayName = 'SignalLow';

export default SignalLow;
