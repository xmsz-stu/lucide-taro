import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M14 12h2v8"}],["path",{"d":"M14 20h4"}],["path",{"d":"M6 12h4"}],["path",{"d":"M6 20h4"}],["path",{"d":"M8 20V8a4 4 0 0 1 7.464-2"}]];

const Ligature = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Ligature.displayName = 'Ligature';

export default Ligature;
