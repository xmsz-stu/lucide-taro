import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z"}],["path",{"d":"M7 21h10"}],["rect",{"x":"2","y":"3","rx":"2"}]];

const TvMinimalPlay = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

TvMinimalPlay.displayName = 'TvMinimalPlay';

export default TvMinimalPlay;
