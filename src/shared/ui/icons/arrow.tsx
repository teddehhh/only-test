import ArrowLeft from '@shared/assets/icons/arrow-left.svg?react';
import styles from './arrow.module.scss';
import type { SVGProps } from 'react';
import { clsx } from 'clsx';

interface ArrowProps extends SVGProps<SVGSVGElement> {
  size?: number;
  direction: 'left' | 'right' | 'up' | 'down';
}

export function Arrow(props: ArrowProps) {
  const { size, direction, className, ...rest } = props;

  return (
    <ArrowLeft
      height={size ?? 24}
      width={size ?? 24}
      className={clsx(styles.arrow, styles[direction], className)}
      {...rest}
    />
  );
}
