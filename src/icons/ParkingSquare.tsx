import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["path",{"d":"M9 17V7h4a3 3 0 0 1 0 6H9"}]];

const ParkingSquare = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ParkingSquare.displayName = 'ParkingSquare';

export default ParkingSquare;
