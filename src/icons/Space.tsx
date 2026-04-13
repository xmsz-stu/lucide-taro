import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"}]];

const Space = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Space.displayName = 'Space';

export default Space;
