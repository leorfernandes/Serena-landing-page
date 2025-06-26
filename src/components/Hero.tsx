'use client';
import { useFadeInUp } from '../hooks/useFadeInUp';

export default function Hero() {
  const { animationClass } = useFadeInUp();

  return (
    <section className={`bg-white px-6 py-20 flex flex-col items-center justify-between gap-10 md:gap-20 font-['Quicksand'] transition-all duration-1400 ${animationClass}`}>
      <div className="text-gray-800 text-center max-w-xl">
        <h1 className="text-5xl md:text-7xl ld:text-9x1 font-bold font-['Great_Vibes'] leading-normal">
          Find your calm.
          <br />
          Anytime. Anywhere.
        </h1>
      </div>

      <div className="w-full">
        <video
          src="/assets/videos/meditation.mp4"

          width={600}
          height={400}
          className="w-full h-auto rounded-full md:px-8"
          autoPlay
          loop
          muted
          playsInline
          aria-label="Meditation demonstration video"
        >
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>

      <div className="text-center max-w-3xl font-['Quicksand']">
        <button
          className="
        mt-6 px-8 py-4
        bg-violet-400 hover:bg-violet-700
        transition-colors duration-500
        text-white text-2xl
        rounded-full
        relative
        overflow-hidden
        "
          type="button"
        >
          <div className="absolute left-0 top-0 w-full h-1/2 bg-gradient-to-b from-violet-200 via-transparent to-transparent"></div>
          START NOW
        </button>
      </div>
    </section>
  );
}
