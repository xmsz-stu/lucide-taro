import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M7 21h10"}],["rect",{"x":"2","y":"3","rx":"2"}]];

const TvMinimal = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

TvMinimal.displayName = 'TvMinimal';

export default TvMinimal;
