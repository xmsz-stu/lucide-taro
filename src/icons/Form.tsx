import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M4 14h6"}],["path",{"d":"M4 2h10"}],["rect",{"x":"4","y":"18","rx":"1"}],["rect",{"x":"4","y":"6","rx":"1"}]];

const Form = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Form.displayName = 'Form';

export default Form;
