import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M6 2v14a2 2 0 0 0 2 2h14"}],["path",{"d":"M18 22V8a2 2 0 0 0-2-2H2"}]];

const Crop = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Crop.displayName = 'Crop';

export default Crop;
