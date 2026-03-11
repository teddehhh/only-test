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

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from(rootRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: 'power2.out',
      });
    }, rootRef);

    return () => ctx.revert();
  }, [Icon]);

  return (
    <div key={Icon.displayName || Icon.name} ref={rootRef} className={className}>
      <Icon className={className} />
    </div>
  );
}
