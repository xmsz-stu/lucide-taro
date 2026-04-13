import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["circle",{"cx":"6","cy":"6","r":"3"}],["path",{"d":"M6 9v12"}],["path",{"d":"m21 3-6 6"}],["path",{"d":"m21 9-6-6"}],["path",{"d":"M18 11.5V15"}],["circle",{"cx":"18","cy":"18","r":"3"}]];

const GitPullRequestClosed = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

GitPullRequestClosed.displayName = 'GitPullRequestClosed';

export default GitPullRequestClosed;
