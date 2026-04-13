import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M5 12h14"}],["path",{"d":"M12 5v14"}]];

const Plus = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Plus.displayName = 'Plus';

export default Plus;
