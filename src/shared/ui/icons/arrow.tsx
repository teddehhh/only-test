import ArrowLeft from '@shared/assets/icons/arrow-left.svg?react';
import type { SVGProps } from 'react';

interface ArrowProps extends SVGProps<SVGSVGElement> {
  size?: number;
  direction: 'left' | 'right' | 'up' | 'down';
}

export function Arrow(props: ArrowProps) {
  const { size, direction, style, ...rest } = props;

  const rotation = {
    left: '0deg',
    right: '180deg',
    up: '90deg',
    down: '-90deg',
  };

  return (
    <ArrowLeft
      stroke="currentColor"
      height={size ?? 24}
      width={size ?? 24}
      {...rest}
      style={{
        transform: `rotate(${rotation[direction]})`,
        transition: 'transform 0.3s ease',
        ...style,
      }}
    />
  );
}
