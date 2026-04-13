import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"12","cy":"12","r":"3"}],["line",{}],["line",{}]];

const GitCommitHorizontal = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

GitCommitHorizontal.displayName = 'GitCommitHorizontal';

export default GitCommitHorizontal;
