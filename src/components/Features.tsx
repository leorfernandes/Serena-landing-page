export default function Features() {
  return (
    <section className="bg-white px-6 py-20 font-['Quicksand']">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 md:grid-cols-3 text-center">
          {/* Feature 1 */}
          <div className="bg-emerald-100 rounded-3xl p-8 flex flex-col items-center">
            <h3 className="text-gray-800 text-2xl font-bold mb-4">🧘 Guided Meditations</h3>
            <p className="text-gray-600 text-lg">Relax with a soft voice guiding your breathing and awareness.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-emerald-100 rounded-3xl p-8 flex flex-col items-center">
            <h3 className="text-gray-800 text-2xl font-bold mb-4">🌬️ Breathing Tools</h3>
            <p className="text-gray-600 text-lg">Calm your body and mind with focused breathing patterns.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-emerald-100 rounded-3xl p-8 flex flex-col items-center">
            <h3 className="text-gray-800 text-2xl font-bold mb-4">🌙 Sleep Sounds</h3>
            <p className="text-gray-600 text-lg">Drift into deeper sleep with peaceful ambient soundscapes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
