import React, { memo, useMemo } from "react";
import { Image } from "@tarojs/components";
import { getIconDataUrl } from "../utils/base64";

export interface LucideIconProps {
	color?: string;
	size?: number | string;
	strokeWidth?: number | string;
	style?: React.CSSProperties;
	className?: string;
	[key: string]: any;
}

interface InternalIconProps extends LucideIconProps {
	iconNode: [string, Record<string, string>][];
}

const LucideIcon: React.FC<InternalIconProps> = memo(
	({
		iconNode,
		color = "currentColor",
		size = 24,
		strokeWidth = 2,
		style,
		className,
		...props
	}) => {
		const dataUrl = useMemo(() => {
			return getIconDataUrl(iconNode, { color, size, strokeWidth });
		}, [iconNode, color, size, strokeWidth]);

		return (
			<Image
				src={dataUrl}
				className={className}
				style={{
					width: typeof size === "number" ? `${size}rpx` : size,
					height: typeof size === "number" ? `${size}rpx` : size,
					...style,
				}}
				{...props}
			/>
		);
	},
);

LucideIcon.displayName = "LucideIcon";

export default LucideIcon;
