import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M21 12a9 9 0 1 1-6.219-8.56"}]];

const LoaderCircle = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

LoaderCircle.displayName = 'LoaderCircle';

export default LoaderCircle;
