import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M12 12h.01"}],["path",{"d":"M16 12h.01"}],["path",{"d":"m17 7 5 5-5 5"}],["path",{"d":"m7 7-5 5 5 5"}],["path",{"d":"M8 12h.01"}]];

const ChevronsLeftRightEllipsis = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

ChevronsLeftRightEllipsis.displayName = 'ChevronsLeftRightEllipsis';

export default ChevronsLeftRightEllipsis;
