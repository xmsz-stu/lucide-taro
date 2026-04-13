import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M12 3v14"}],["path",{"d":"M5 10h14"}],["path",{"d":"M5 21h14"}]];

const Diff = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Diff.displayName = 'Diff';

export default Diff;
