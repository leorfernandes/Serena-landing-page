export default function FinalCTA() {
  return (
    <section className="bg-white px-6 py-8 items-center justify-between gap-10 max-w-6xl mx-auto font-['Quicksand']">
      <div className="text-gray-800 text-center">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight font-['Great_Vibes']">
          Take your first

          mindful breath

          with
          {' '}
          <span className="text-violet-400 hover:text-violet-700 transition-colors duration-500">Serena</span>
          {' '}
          today
        </h2>
        <button
          type="button"
          className="mt-8 px-6 py-3 bg-violet-400 hover:bg-violet-700 text-white text-lg rounded-full cursor-pointer focus:outline-none focus:ring-4 focus:ring-violet-300"
        >
          Start Now
        </button>
      </div>
    </section>
  );
}
