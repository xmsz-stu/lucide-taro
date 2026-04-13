import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"4","y":"2","rx":"2"}],["line",{}],["line",{}],["path",{"d":"M16 10h.01"}],["path",{"d":"M12 10h.01"}],["path",{"d":"M8 10h.01"}],["path",{"d":"M12 14h.01"}],["path",{"d":"M8 14h.01"}],["path",{"d":"M12 18h.01"}],["path",{"d":"M8 18h.01"}]];

const Calculator = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Calculator.displayName = 'Calculator';

export default Calculator;
