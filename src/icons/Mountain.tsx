import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m8 3 4 8 5-5 5 15H2L8 3z"}]];

const Mountain = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Mountain.displayName = 'Mountain';

export default Mountain;
