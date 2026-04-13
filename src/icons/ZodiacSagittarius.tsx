import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M15 3h6v6"}],["path",{"d":"M21 3 3 21"}],["path",{"d":"m9 9 6 6"}]];

const ZodiacSagittarius = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ZodiacSagittarius.displayName = 'ZodiacSagittarius';

export default ZodiacSagittarius;
