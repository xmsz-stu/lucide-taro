import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"7","cy":"7","r":"5"}],["circle",{"cx":"17","cy":"17","r":"5"}],["path",{"d":"M12 17h10"}],["path",{"d":"m3.46 10.54 7.08-7.08"}]];

const Tablets = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Tablets.displayName = 'Tablets';

export default Tablets;
