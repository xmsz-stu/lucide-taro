import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"2","y":"5","rx":"2"}],["line",{}]];

const CreditCard = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

CreditCard.displayName = 'CreditCard';

export default CreditCard;
