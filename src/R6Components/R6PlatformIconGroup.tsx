import * as icons from '../@platform-iconsvg';
import React from 'react';
import { PlatformType } from '../util/type'
import { blue } from '@ant-design/colors';
import R6PlatformIcon, { R6PlatformIconProps } from './R6PlatformIcon';
// type R6IconType = keyof typeof icons;
// export const PlatformIcons: PlatformType[] = Object.keys(icons) as PlatformType[]; // 다른파일에서 사용하기 위한 구현체.


// https://egghead.io/lessons/react-use-react-cloneelement-to-extend-functionality-of-children-components
// https://github.com/react-bootstrap/react-bootstrap/blob/master/src/ToggleButtonGroup.js
// https://reactjs.org/docs/react-api.html#reactchildren
// width를 동일하게 해줘야한다.. 모든 width를 동일하게 취해줘야한다.
// http://jsfiddle.net/2nY9N/3/
// https://react-bootstrap.github.io/getting-started/theming/


export type R6PlatformIconGroupProps<T> = {
    value : T;
    className?: string;
    onChange?: (value:T) => void;
    children: React.ReactNode;
};


function map(children : React.ReactNode, func: (child : React.ReactElement, index?:number, total?: number)=>void) {
    let index = 0;
    return React.Children.map(children, (child) =>
      React.isValidElement(child) ? func(child, index++, React.Children.count(children)) : child,
    );
}


const R6PlatformIonGroup = ({ value, onChange, className,children }: R6PlatformIconGroupProps<PlatformType>) => {

    const handleToggles = (inputVal: PlatformType) => {
        if (onChange) {
            onChange(inputVal)
        }
    }

    return (

        <div className={className}>
            {
                map( children, (child, index, total) => {
                    const { value : childVal } = (child.props as R6PlatformIconProps)
                    const handler = (e? : React.MouseEvent<SVGSVGElement>) => { handleToggles(childVal) }   
                    return React.cloneElement<R6PlatformIconProps>(child, {
                        selected: value !== null && value === childVal,
                        value: childVal,
                        onClick:handler
                    })
                })
            }
        </div>
    );
  };

export default R6PlatformIonGroup;
