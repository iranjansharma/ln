import Link from "next/link";
import BlurText from "../gsap-ani/BlurText";

const Hero = () => {
  return (
    <div className="min-h-screen w-full bg-[#020617] relative">
      {/* Magenta Orb Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#020617",
          backgroundImage: `
        linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
        radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)
      `,
          backgroundSize: "40px 40px, 40px 40px, 100% 100%",
        }}
      />
      <section className="container mx-auto flex py-40 sm:py-12 md:py-16 lg:py-40 text-center relative overflow-hidden px-4 sm:px-6 lg:px-8 items-center justify-center">
        <div className="mx-auto relative z-10">
          <div className="mb-6 sm:mb-8 md:mb-10 flex justify-center">
            <a
              href="https://github.com/iranjansharma"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <span
                data-slot="badge"
                className="inline-flex items-center justify-center font-medium w-fit whitespace-nowrap shrink-0 [&amp;>svg]:size-3 [&amp;>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden [a&amp;]:hover:bg-secondary/90 gap-2 py-2 px-3 sm:px-4 text-xs sm:text-sm rounded-full shadow-lg backdrop-blur-md transition-all duration-300 border bg-white/80 border-gray-200/50 text-gray-900 hover:bg-white/90"
              >
                <div className="relative flex h-2 w-2 border-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </div>
                <span className="font-medium">iranjansharma</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-zap h-3 w-3 text-orange-500"
                  aria-hidden="true"
                >
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                </svg>
                <span className="hidden sm:inline-flex items-center">
                  Github
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right h-3 w-3"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
            </a>
          </div>
          <div className="mb-6 sm:mb-8">
            <BlurText
              text="Welcome To The"
              delay={200}
              animateBy="words"
              direction="top"
              className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-1 sm:mb-3 font-bold flex justify-center items-center transition-colors duration-300 text-gray-900 dark:text-gray-50"
            />
            <BlurText
              text="Allen Exam Room Allotment !"
              delay={250}
              animateBy="words"
              direction="top"
              className="text-3xl text-white font-normal mb-8 flex justify-center items-center"
            />
          </div>
          <BlurText
            text="Effortlessly manage and view your Allen exam room allotments.
            Instantly check your assigned room, seat, and exam details—all in
            one place. Designed for convenience and accuracy for every Allen student."
            delay={200}
            animateBy="words"
            direction="top"
            className="text-base px-4 lg:w-xl text-white font-light mb-8 flex justify-center items-center"
          />
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-10 sm:mb-14 max-w-4xl mx-auto px-4 sm:px-0">
            <div className="flex items-center gap-3 p-3 sm:p-4 rounded-xl shadow-lg backdrop-blur-md transition-all duration-300 border w-full sm:w-auto bg-white/70 border-gray-200/30 hover:bg-white/80">
              <div className="p-2 rounded-lg transition-colors duration-300 bg-violet-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-eye h-4 sm:h-5 w-4 sm:w-5 transition-colors duration-300 text-pink-600"
                  aria-hidden="true"
                >
                  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <div className="text-left">
                <Link href="/room">
                  <h3 className="font-semibold text-sm transition-colors duration-300 text-gray-900">
                    Exam Room Allotment
                  </h3>
                  <p className="text-xs transition-colors duration-300 text-gray-600">
                    Start Room Allotment Now ✅
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6 sm:gap-8 md:gap-12 mt-12 sm:mt-16 md:mt-18 pt-6 sm:pt-8 border-t transition-all duration-300 border-gray-300 dark:border-gray-700">
            <div className="text-center">
              <div className="text-xl text-white sm:text-2xl font-bold transition-colors duration-300 ">
                100%
              </div>
              <div className="text-xs text-white sm:text-sm transition-colors duration-300 ">
                convenience
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl text-white sm:text-2xl font-bold transition-colors duration-300 ">
                100%
              </div>
              <div className="text-xs text-white sm:text-sm transition-colors duration-300 ">
                Easy
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl text-white sm:text-2xl font-bold transition-colors duration-300 ">
                Room
              </div>
              <div className="text-xs text-white sm:text-sm transition-colors duration-300 ">
                Alot Now
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
