export default function HowItWorks() {
  return (
    <section className="py-16 px-8 bg-white text-center font-['Quicksand']">
      <div className="max-w-6xl mx-auto bg-emerald-100 rounded-3xl p-8 md:grid md:grid-cols-2 gap-8">
        {/* Title */}
        <div className="flex items-center justify-center h-full">
          <h2 className="text-gray-800 text-3xl font-bold">
            How Serena Works
          </h2>
        </div>

        {/* Steps */}
        <ol className="flex flex-col justify-center space-y-8 text-gray-800 mt-4">
          <li>
            <strong>Open the app</strong>
            – No account needed. Just tap and begin.
          </li>

          <li>
            <strong>Choose your mode</strong>
            – Select meditation, breathing, or sleep.
          </li>

          <li>
            <strong>Start relaxing</strong>
            – Breathe, listen, and let go.
          </li>
        </ol>
      </div>
    </section>
  );
}
