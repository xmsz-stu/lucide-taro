import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"M16 16s-1.5-2-4-2-4 2-4 2"}],["path",{"d":"M7.5 8 10 9"}],["path",{"d":"m14 9 2.5-1"}],["path",{"d":"M9 10h.01"}],["path",{"d":"M15 10h.01"}]];

const Angry = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Angry.displayName = 'Angry';

export default Angry;
