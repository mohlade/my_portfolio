import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Apple Clone Website</h3>
              <p className="text-gray-400 mb-4">
                A visually-rich Apple homepage clone built with HTML, CSS, GSAP,
                and Three.js to recreate smooth animations and 3D-like
                interactions. This project focused on precision, animation
                timing, and responsive layout across devices.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col md:flex-row gap-2 md:items-center justify-between">
                <a
                  href="https://apple-clone-livid-gamma.vercel.app/" // Replace this with the actual deployed site URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Visit Live Site →
                </a>
                <a
                  href="https://github.com/mohlade/apple_clone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Source Code →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Game Website</h3>
              <p className="text-gray-400 mb-4">
                A simple yet engaging game website built with React and
                styled-components, offering an interactive UI and smooth user
                experience. Designed for fun, responsiveness, and clean gameplay
                mechanics.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Styled-components", "JavaScript", "Vite"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="
        bg-blue-500/10 text-blue-500 py-1 px-3 
        rounded-full text-sm
        transition
        hover:bg-blue-500/20 hover:-translate-y-0.5
        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
      "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex flex-col md:flex-row gap-2 md:items-center justify-between">
                <a
                  href="https://gameapp-woad.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-2"
                >
                  Visit Live Site →
                </a>
                <a
                  href="https://github.com/mohlade/gameapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-2"
                >
                  View Source Code →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Brainwave Website</h3>
              <p className="text-gray-400 mb-4">
                A sleek, animated landing page built with React, Tailwind CSS,
                and Framer Motion. Designed to showcase modern web design with
                responsive layouts, smooth transitions, and polished UI elements
                that reflect a high-end tech brand.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Tailwind CSS", "Framer Motion", "Vite"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="
        bg-blue-500/10 text-blue-500 py-1 px-3 
        rounded-full text-sm
        transition
        hover:bg-blue-500/20 hover:-translate-y-0.5
        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
      "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex flex-col md:flex-row gap-2 md:items-center justify-between">
                <a
                  href="https://brainwave-six-henna.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-2"
                >
                  Visit Live Site →
                </a>
                <a
                  href="https://github.com/mohlade/brainwave"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-2"
                >
                  View Source Code →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Strange Chat App</h3>
              <p className="text-gray-400 mb-4">
                A real-time chat application built with React, Firebase, and
                styled-components. Features include user authentication, instant
                messaging with Firestore, smooth UI transitions, and persistent
                chat history across sessions.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Firebase", "Firestore", "Styled-components"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="
        bg-blue-500/10 text-blue-500 py-1 px-3 
        rounded-full text-sm
        transition
        hover:bg-blue-500/20 hover:-translate-y-0.5
        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
      "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex flex-col md:flex-row gap-2 md:items-center justify-between">
                <a
                  href="https://strange-app.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-2"
                >
                  Visit Live Site →
                </a>
                <a
                  href="https://github.com/mohlade/strange-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-2"
                >
                  View Source Code →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
