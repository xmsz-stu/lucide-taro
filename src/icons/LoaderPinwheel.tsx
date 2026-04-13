import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0"}],["path",{"d":"M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6"}],["path",{"d":"M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6"}],["circle",{"cx":"12","cy":"12","r":"10"}]];

const LoaderPinwheel = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

LoaderPinwheel.displayName = 'LoaderPinwheel';

export default LoaderPinwheel;
