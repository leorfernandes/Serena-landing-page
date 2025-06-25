'use client';
import { useFadeInUp } from '../hooks/useFadeInUp';

export default function LifestyleSnapshots() {
  const { animationClass } = useFadeInUp();

  return (
    <section className={`bg-gray-100 py-16 px-8 text-center font-['Quicksand'] ${animationClass}`}>
      <h2 className="text-5xl text-gray-800 mb-6 font-['Great_Vibes']">A Moment of Calm, Wherever You Are</h2>
      <p className="text-gray-500 max-w-2xl mx-auto mb-10">
        Whether you need to refocus, wind down, or breathe deeply between meetings, Serena is just a tap away.
      </p>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div>
          <div className="text-3xl mb-2">🚇</div>
          <p className="text-gray-600 text-lg">On your commute</p>
        </div>
        <div>
          <div className="text-3xl mb-2">🧑‍💻</div>
          <p className="text-gray-600 text-lg">Between meetings</p>
        </div>
        <div>
          <div className="text-3xl mb-2">🛏️</div>
          <p className="text-gray-600 text-lg">Before sleep</p>
        </div>
      </div>
    </section>
  );
}
