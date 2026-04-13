import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M12 15v7"}],["path",{"d":"M9 19h6"}],["circle",{"cx":"12","cy":"9","r":"6"}]];

const Venus = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Venus.displayName = 'Venus';

export default Venus;
