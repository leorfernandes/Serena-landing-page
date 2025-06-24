'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setShow(true);
  }, []);

  return (
    <section className={`bg-white px-6 py-20 flex flex-col items-center justify-between gap-20 font-['Quicksand'] transition-all duration-1400 ${
      show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}
    >
      <div className="text-gray-800 text-center max-w-xl">
        <h1 className="text-5xl md:text-7xl ld:text-9x1 font-bold font-['Great_Vibes'] leading-normal">
          Find your calm.
          Anytime.
          Anywhere.
        </h1>
      </div>

      <div className="w-full">
        <Image
          src="/assets/images/meditation.jpg"
          alt="Person meditating peacefully"
          width={600}
          height={400}
          className="w-full h-auto rounded-3xl"
        />
      </div>

      <div className="text-center max-w-3xl font-['Quicksand']">
        <button className="mt-6 px-40 py-3 bg-violet-400 hover:bg-violet-700 text-white text-2xl rounded-lg" type="button">
          Start Now
        </button>
      </div>
    </section>
  );
}
