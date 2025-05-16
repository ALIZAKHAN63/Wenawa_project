import React, { useEffect, useState } from 'react';

const countersData = [
  { id: 1, number: 400, suffix: '+', title: 'Successful Projects' },
  { id: 2, number: 1000000, suffix: '+', title: 'Lines of Code Written', formatNumber: true },
  { id: 3, number: 15000, suffix: '+', title: 'Dedicated Hours' },
  { id: 4, number: 100, suffix: '%', title: 'Client Retention' }
];

const Counter = ({ number, suffix, duration = 3000, formatNumber }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = number;
    if (start === end) return;

    let incrementTime = 10; // ms
    let totalIncrements = duration / incrementTime;
    let incrementValue = end / totalIncrements;

    const timer = setInterval(() => {
      start += incrementValue;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [number, duration]);

  const displayCount = formatNumber ? count.toLocaleString() : count;

  return (
    <span className="font-bold text-xl md:text-2xl text-blue-900">
      {displayCount}{suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section className="py-10 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-blue-900">
        {countersData.map(({ id, number, suffix, title, formatNumber }) => (
          <div key={id} className="flex flex-col items-center gap-2">
            <Counter number={number} suffix={suffix} formatNumber={formatNumber} />
            <p className="text-sm md:text-base">{title}</p>
          </div>
        ))}
      </div>

        <img
        src="/Afterstats.png"
        alt="Decorative"
        className="mt-8 w-full object-contain"
      />

    </section>
  );
};

export default StatsSection;
