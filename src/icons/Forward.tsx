import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m15 17 5-5-5-5"}],["path",{"d":"M4 18v-2a4 4 0 0 1 4-4h12"}]];

const Forward = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Forward.displayName = 'Forward';

export default Forward;
