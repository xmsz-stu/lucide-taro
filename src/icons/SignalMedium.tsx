import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M2 20h.01"}],["path",{"d":"M7 20v-4"}],["path",{"d":"M12 20v-8"}]];

const SignalMedium = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

SignalMedium.displayName = 'SignalMedium';

export default SignalMedium;
