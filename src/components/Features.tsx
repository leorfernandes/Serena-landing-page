'use client';
import { useFadeInUp } from '../hooks/useFadeInUp';

export default function Features() {
  const { animationClass } = useFadeInUp();

  return (
    <section className={`bg-white px-6 py-20 font-['Quicksand'] text-center ${animationClass}`}>
      <h2 className="text-5xl text-gray-800 mb-8 font-['Great_Vibes']">What Serena Offers</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Feature 1 */}
        <div className="relative bg-emerald-200 rounded-3xl p-8 flex flex-col items-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('/assets/images/background-pattern-1.jpg')] bg-cover bg-center opacity-25 pointer-events-none" />
          <div className="relative z-10">
            <div className="text-4xl mb-2">🧘</div>
            <h3 className="text-2xl text-gray-700 font-semibold">Guided Meditations</h3>
            <p className="text-gray-600 text-lg mt-4">
              Relax with a soft voice guiding your breathing and awareness.
              <br />
              Calming audio sessions led by mindful guides to help you center your thoughts and ease anxiety—anytime, anywhere.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="relative bg-emerald-300 rounded-3xl p-8 flex flex-col items-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('/assets/images/background-pattern-2.jpg')] bg-cover bg-center opacity-25 pointer-events-none" />
          <div className="relative z-10">
            <div className="text-4xl mb-2">🌬️</div>
            <h3 className="text-2xl text-gray-700 font-semibold">Breathing Tools</h3>
            <p className="text-gray-600 text-lg mt-4">
              Calm your body and mind with focused breathing patterns.
              <br />
              Simple, scientifically-backed breathing techniques to reduce stress, sharpen focus, and balance your mood in minutes.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="relative bg-emerald-200 rounded-3xl p-8 flex flex-col items-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('/assets/images/background-pattern-3.jpg')] bg-cover bg-center opacity-25 pointer-events-none" />
          <div className="relative z-10">
            <div className="text-4xl mb-2">🌙</div>
            <h3 className="text-2xl text-gray-700 font-semibold">Sleep Sounds</h3>
            <p className="text-gray-600 text-lg mt-4">
              Drift into deeper sleep with peaceful ambient soundscapes.
              <br />
              Soothing soundscapes, ambient music, and soft tones designed to help you fall asleep faster and stay asleep longer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
