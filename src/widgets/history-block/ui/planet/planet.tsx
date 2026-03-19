import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

interface PlanetProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  className?: string | undefined;
}

export function Planet(props: PlanetProps) {
  const { Icon, className } = props;
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(rootRef.current, {
        opacity: 0,
        scale: 0.7,
        duration: 1,
        ease: 'power2.out',
      });
    },
    { scope: rootRef, dependencies: [Icon] },
  );

  return (
    <div ref={rootRef} className={className}>
      <Icon className={className} />
    </div>
  );
}
