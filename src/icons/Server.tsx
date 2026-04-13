import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"2","y":"2","rx":"2","ry":"2"}],["rect",{"x":"2","y":"14","rx":"2","ry":"2"}],["line",{}],["line",{}]];

const Server = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Server.displayName = 'Server';

export default Server;
