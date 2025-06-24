export default function HowItWorks() {
  return (
    <section className="bg-white px-6 py-20 font-['Quicksand']">
      <div className="max-w-6xl mx-auto bg-emerald-100 rounded-lg p-8 md:grid md:grid-cols-2 gap-12">
        {/* Title */}
        <div className="flex items-center">
          <h2 className="text-gray-800 text-3xl font-bold">
            How does it work?
          </h2>
        </div>

        {/* Steps */}
        <div className="flex flex-col justify-center space-y-8 text-gray-800">
          <div>
            <span className="font-bold text-xl mr-2">1.</span>
            Pick a mode: Meditation, Breathing, or Sleep
          </div>

          <div>
            <span className="font-bold text-xl mr-2">2.</span>
            Let Serina guide you with calming voice and sounds
          </div>

          <div>
            <span className="font-bold text-xl mr-2">3.</span>
            Feel better in minutes
          </div>
        </div>
      </div>
    </section>
  );
}
