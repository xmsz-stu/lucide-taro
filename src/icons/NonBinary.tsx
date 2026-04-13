import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M12 2v10"}],["path",{"d":"m8.5 4 7 4"}],["path",{"d":"m8.5 8 7-4"}],["circle",{"cx":"12","cy":"17","r":"5"}]];

const NonBinary = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

NonBinary.displayName = 'NonBinary';

export default NonBinary;
