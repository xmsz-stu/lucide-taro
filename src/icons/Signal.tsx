import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M2 20h.01"}],["path",{"d":"M7 20v-4"}],["path",{"d":"M12 20v-8"}],["path",{"d":"M17 20V8"}],["path",{"d":"M22 4v16"}]];

const Signal = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Signal.displayName = 'Signal';

export default Signal;
