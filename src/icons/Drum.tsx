import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m2 2 8 8"}],["path",{"d":"m22 2-8 8"}],["ellipse",{"cx":"12","cy":"9","rx":"10","ry":"5"}],["path",{"d":"M7 13.4v7.9"}],["path",{"d":"M12 14v8"}],["path",{"d":"M17 13.4v7.9"}],["path",{"d":"M2 9v8a10 5 0 0 0 20 0V9"}]];

const Drum = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Drum.displayName = 'Drum';

export default Drum;
