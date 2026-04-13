import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M12 3v6"}],["circle",{"cx":"12","cy":"12","r":"3"}],["path",{"d":"M12 15v6"}]];

const GitCommitVertical = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

GitCommitVertical.displayName = 'GitCommitVertical';

export default GitCommitVertical;
