'use client';
import { useFadeInUp } from '../hooks/useFadeInUp';

export default function EmotionalHook() {
  const { animationClass } = useFadeInUp(1000);

  return (
    <section className={`px-8 py-8 flex justify-center items-center bg-red-100 ${animationClass}`}>
      {/* Top gradient overlay */}
      <div className="absolute left-0 top-0 w-full h-6 bg-gradient-to-b from-white to-red-100 pointer-events-none" />
      <div className="text-center font-['Quicksand'] px-8 max-w-3xl">
        <h1 className="text-5xl text-gray-800 font-['Amatic_SC'] font-bold">
          Modern Life is Noisy
        </h1>
        <p className="text-xl text-gray-500 mt-4">
          Serena helps you turn down the volume.
          <br />
          In a world that never stops, you deserve a space that lets you breathe.
        </p>
      </div>
      {/* Bottom shadow overlay */}
      <div className="absolute left-0 bottom-0 w-full h-6 bg-gradient-to-t from-white to-red-100 pointer-events-none" />
    </section>
  );
}
