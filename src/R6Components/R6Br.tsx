import React, { Component, CSSProperties } from 'react';
import PropTypes from 'prop-types';

export type R6BrProps = {
    /** "sm" | "lg" | number */
    size?: "lg" | "sm" | number;
}

/**
 * `R6Br`는 size 조정 옵션을 통해 `<br/>` 태그를 조금더 유동적으로 활용할 수 있습니다.
 * 
 * - `size`는 `lg`와 `sm`로 나뉘어지며, 사용자가 커스텀 할 수 있습니다.
 */
const R6Br = ({size}:R6BrProps) => {

    if (size === "lg") {
        size = 12 
    } else if (size === "sm") {
        size = 8
    } else if (typeof size === "number") {
        size = size;
    } else {
        size = 0
    }
    const style : CSSProperties = {height : size}

    return (
        <div style={style}>
        </div>
    )
}

R6Br.defaultProps = {
    size : "20"
}

export default R6Br;