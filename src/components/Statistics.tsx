import React, { useRef, useState, useEffect } from 'react';
import { Users, UserCheck, Shield, Award } from 'lucide-react';

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  shouldAnimate: boolean;
}

const statsData = [
  {
    icon: <Users className="text-accent drop-shadow-[0_0_3px_#DDA85380]" size={40} />,
    number: 10000,
    suffix: '+',
    label: 'Customers',
  },
  {
    icon: <UserCheck className="text-white" size={40} />,
    number: 0,
    prefix: '',
    suffix: '',
    label: 'Expert Guidance',
    isText: true,
  },
  {
    icon: <Shield className="text-white" size={40} />,
    number: 0,
    prefix: '',
    suffix: '',
    label: 'Product Warranty',
    isText: true,
  },
  {
    icon: <Award className="text-white" size={40} />,
    number: 0,
    prefix: '',
    suffix: '',
    label: 'Most Trusted',
    isText: true,
  },
];

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  duration = 1000,
  prefix = '',
  suffix = '',
  shouldAnimate,
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (shouldAnimate && !hasAnimated) {
      let start = 0;
      const step = Math.ceil(value / (duration / 30));

      const interval = setInterval(() => {
        start += step;
        if (start >= value) {
          setCount(value);
          setHasAnimated(true);
          clearInterval(interval);
        } else {
          setCount(start);
        }
      }, 30);

      return () => clearInterval(interval);
    }
  }, [value, duration, shouldAnimate, hasAnimated]);

  return (
    <span>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const Statistics: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Make visible always true now since there is no observer/effect
  const [visible] = useState(true);

  return (
    <section className="pt-4 pb-8 sm:pb-16 flex justify-center">
      <div className="w-full max-w-7xl px-4">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-playfair font-bold text-white mb-2">
          {/* Add heading text here if needed */}
        </h2>
        {/* Frosted Glass Card */}
        <div
          ref={containerRef}
          className={`px-6 sm:px-10 py-10 w-full transition-all duration-1000 transform ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderRadius: '24px',
            boxShadow:
              'inset 0 0 10px rgba(255, 255, 255, 0.08), 0 12px 48px rgba(0, 0, 0, 0.25)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-white">
            {statsData.map((stat, index) => (
              <div
                key={index}
                className={`text-center ${
                  index === 0
                    ? 'scale-105 text-accent drop-shadow-[0_0_3px_#DDA85380]'
                    : 'text-white'
                }`}
              >
                <div className="flex justify-center mb-3">{stat.icon}</div>
                <div className="text-base md:text-xl font-normal font-playfair tracking-wide">
                  {stat.isText ? (
                    <div className="flex flex-col">
                      <span>{stat.label.split(' ')[0]}</span>
                      <span>{stat.label.split(' ').slice(1).join(' ')}</span>
                    </div>
                  ) : (
                    <div className="flex flex-col">
                      <span>
                        <AnimatedNumber
                          value={stat.number}
                          prefix={stat.prefix || ''}
                          suffix={stat.suffix || ''}
                          shouldAnimate={visible}
                        />
                      </span>
                      <span className="text-sm md:text-base font-light">{stat.label}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
