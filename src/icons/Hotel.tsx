import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M10 22v-6.57"}],["path",{"d":"M12 11h.01"}],["path",{"d":"M12 7h.01"}],["path",{"d":"M14 15.43V22"}],["path",{"d":"M15 16a5 5 0 0 0-6 0"}],["path",{"d":"M16 11h.01"}],["path",{"d":"M16 7h.01"}],["path",{"d":"M8 11h.01"}],["path",{"d":"M8 7h.01"}],["rect",{"x":"4","y":"2","rx":"2"}]];

const Hotel = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Hotel.displayName = 'Hotel';

export default Hotel;
