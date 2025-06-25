'use client';
import { useFadeInUp } from '../hooks/useFadeInUp';

export default function EmotionalHook() {
  const { animationClass } = useFadeInUp(1000);

  return (
    <section className={`px-8 py-8 flex justify-center items-center bg-white ${animationClass}`}>
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
    </section>
  );
}
