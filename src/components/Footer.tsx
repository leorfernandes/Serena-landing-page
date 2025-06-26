export default function Footer() {
  return (
    <footer className="bg-white px-6 py-10 font-['Quicksand']">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-4 text-gray-500 text-base text-center md:grid md:grid-cols-2">
        <p className="text-violet-400/25 hover:text-violet-700/25 font-['Great_Vibes'] text-5xl">
          Serena
        </p>
        <p>
          Made with care
          <br />
          by Leo Fernandes
        </p>
        <div className="flex flex-col items-center justify-center space-y-3">
          <a
            href="http://linkedin.com/in/leonardodosreisfernandes"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-600 transition flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.75v2.25h.07c.66-1.25 2.27-2.58 4.67-2.58 5 0 5.93 3.3 5.93 7.58V24H18v-7.45c0-1.78-.03-4.08-2.5-4.08-2.5 0-2.88 1.96-2.88 3.98V24H7.5V8z" />
            </svg>
            LinkedIn
          </a>

          <a
            href="http://github.com/leorfernandes"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-600 transition flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <path d="M12 0a12 12 0 00-3.79 23.39c.6.11.82-.26.82-.58v-2.16c-3.34.73-4.04-1.61-4.04-1.61a3.18 3.18 0 00-1.34-1.76c-1.1-.75.08-.73.08-.73a2.52 2.52 0 011.84 1.23 2.56 2.56 0 003.5 1 2.56 2.56 0 01.76-1.6c-2.67-.3-5.47-1.33-5.47-5.94a4.64 4.64 0 011.23-3.21 4.3 4.3 0 01.12-3.17s1-.32 3.3 1.23a11.42 11.42 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23a4.3 4.3 0 01.12 3.17 4.64 4.64 0 011.23 3.21c0 4.61-2.8 5.63-5.47 5.93a2.86 2.86 0 01.81 2.21v3.28c0 .32.21.69.82.58A12 12 0 0012 0z" />
            </svg>
            GitHub
          </a>
        </div>
        <p className="text-gray-500 text-sm font-sans mt-1 max-w-xs md:flex md:items-center">
          This is a mockup page, not a real product or service
        </p>
      </div>
    </footer>
  );
}
