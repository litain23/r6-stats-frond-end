import * as icons from '../@platform-iconsvg';
import React from 'react';
import { PlatformType } from '../util/type'
import { blue } from '@ant-design/colors';
// type R6IconType = keyof typeof icons;
// export const PlatformIcons: PlatformType[] = Object.keys(icons) as PlatformType[]; // 다른파일에서 사용하기 위한 구현체.

export type R6PlatformIconProps = {
  value: PlatformType;
  size?: string | number;
  className?: string;
  selected?:boolean;
  onClick?: (e?: React.MouseEvent<SVGSVGElement>) => void;
};

const R6PlatformIcon = ({ value, size, onClick, selected }: R6PlatformIconProps) => {

    const SVGIcon = icons[value];
    let color = (selected) ? (blue.primary)? blue.primary : "#1890ff" : "black"
    // className={className}

    return (
      <SVGIcon
        style={{ fill: color, width: size, height: 'auto' }}
        onClick={onClick}
      />
    );
  };

export default R6PlatformIcon;