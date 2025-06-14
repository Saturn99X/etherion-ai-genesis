
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="@container">
      <div className="@[480px]:p-2 sm:@[480px]:p-4"> {/* Adjusted container query padding slightly */}
        <div
          className="flex min-h-[560px] sm:min-h-[640px] lg:min-h-[720px] w-full max-w-10xl mx-auto flex-col gap-8 sm:gap-12 bg-cover bg-center bg-no-repeat rounded-3xl items-center justify-center p-6 sm:p-10 md:px-16 md:pb-20 md:pt-10 shadow-2xl"
          style={{ position: 'relative', overflow: 'hidden', borderRadius: '2rem' }}
        >
          {/* Blurred Animated Background */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 0,
              pointerEvents: 'none',
              filter: 'blur(48px)',
              overflow: 'hidden',
            }}
            aria-hidden="true"
          >
            {/* Lime Green */}
            <div style={{
              position: 'absolute',
              width: 600,
              height: 600,
              left: '-8%',
              top: '-12%',
              background: 'radial-gradient(circle, #aaff00 0%, #aaff00 60%, rgba(170,255,0,0.0) 70%)',
              borderRadius: '50%',
              opacity: 0.7,
              animation: 'moveLime 19s ease-in-out infinite',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                pointerEvents: 'none',
                opacity: 0.18,
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='800' height='800' filter='url(%23n)' opacity='0.7'/%3E%3C/svg%3E")`,
              }} />
            </div>
            {/* Cobalt Blue */}
            <div style={{
              position: 'absolute',
              width: 700,
              height: 700,
              left: '-18%',
              top: '10%',
              background: 'radial-gradient(circle, #0020c2 0%, #0020c2 60%, rgba(0,32,194,0.0) 70%)',
              borderRadius: '50%',
              opacity: 0.85,
              animation: 'moveBlue 14s ease-in-out infinite',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                pointerEvents: 'none',
                opacity: 0.18,
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1000' height='1000'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='1000' height='1000' filter='url(%23n)' opacity='0.7'/%3E%3C/svg%3E")`,
              }} />
            </div>
            {/* Carmine Red */}
            <div style={{
              position: 'absolute',
              width: 700,
              height: 700,
              left: '-20%',
              bottom: '-25%',
              background: 'radial-gradient(circle, #c2002f 0%, #c2002f 60%, rgba(194,0,47,0.0) 70%)',
              borderRadius: '50%',
              opacity: 0.7,
              animation: 'moveRed 18s ease-in-out infinite',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                pointerEvents: 'none',
                opacity: 0.18,
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1000' height='1000'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='1000' height='1000' filter='url(%23n)' opacity='0.7'/%3E%3C/svg%3E")`,
              }} />
            </div>
            {/* Pink */}
            <div style={{
              position: 'absolute',
              width: 650,
              height: 650,
              right: '-18%',
              bottom: '-15%',
              background: 'radial-gradient(circle, #ff5ac8 0%, #ff5ac8 60%, rgba(255,90,200,0.0) 70%)',
              borderRadius: '50%',
              opacity: 0.7,
              animation: 'movePink 16s ease-in-out infinite',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                pointerEvents: 'none',
                opacity: 0.18,
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='900'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='900' height='900' filter='url(%23n)' opacity='0.7'/%3E%3C/svg%3E")`,
              }} />
            </div>
            {/* Purple */}
            <div style={{
              position: 'absolute',
              width: 650,
              height: 650,
              right: '-15%',
              top: '-12%',
              background: 'radial-gradient(circle, #8e44ad 0%, #8e44ad 60%, rgba(142,68,173,0.0) 70%)',
              borderRadius: '50%',
              opacity: 0.7,
              animation: 'movePurple 20s ease-in-out infinite',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                pointerEvents: 'none',
                opacity: 0.18,
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='900' height='900'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='900' height='900' filter='url(%23n)' opacity='0.7'/%3E%3C/svg%3E")`,
              }} />
            </div>
          </div>

          {/* SVG Noise Overlay (above blur) */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 1,
              pointerEvents: 'none',
              opacity: 0.38,
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            }}
            aria-hidden="true"
          />

          <div className="flex flex-col items-center gap-6 sm:gap-8 w-full" style={{ position: 'relative', zIndex: 2 }}>
            <h1
              className="text-white text-center text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-black leading-tight tracking-[-0.03em] sm:tracking-[-0.04em] mt-4 sm:mt-6 mb-4 sm:mb-6 drop-shadow-lg"
              style={{ lineHeight: 1.05 }}
            >
              Supercharge Your Business With AI
            </h1>
            <h2 className="text-white text-center text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mb-6 sm:mb-8 opacity-90">
              Take a glimpse at the pinnacle of the AI era, let's build your AI-powered cash machine.
            </h2>
            <Link
              to="/get-started"
              className="flex min-w-[140px] sm:min-w-[160px] max-w-[480px] sm:max-w-[520px] mx-auto cursor-pointer items-center justify-center overflow-hidden rounded-xl sm:rounded-2xl h-12 px-8 sm:h-14 sm:px-10 md:h-16 md:px-14 bg-etherion-blue text-white text-lg sm:text-xl md:text-2xl font-bold leading-normal tracking-[0.015em] sm:tracking-[0.018em] shadow-xl hover:bg-blue-700 transition"
              style={{ zIndex: 3 }}
            >
              <span className="truncate">Get Started</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Keyframes for animated circles
if (typeof window !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes moveLime {
      0% { transform: translate(0, 0); }
      50% { transform: translate(0px, 40px); }
      100% { transform: translate(0, 0); }
    }
    @keyframes moveBlue {
      0% { transform: translate(0, 0); }
      50% { transform: translate(40px, 60px); }
      100% { transform: translate(0, 0); }
    }
    @keyframes moveRed {
      0% { transform: translate(0, 0); }
      50% { transform: translate(-60px, 40px); }
      100% { transform: translate(0, 0); }
    }
    @keyframes movePink {
      0% { transform: translate(0, 0); }
      50% { transform: translate(60px, -40px); }
      100% { transform: translate(0, 0); }
    }
    @keyframes movePurple {
      0% { transform: translate(0, 0); }
      50% { transform: translate(-40px, -50px); }
      100% { transform: translate(0, 0); }
    }
  `;
  style.id = 'hero-circles-anim';
  if (!document.head.querySelector('#hero-circles-anim')) {
    document.head.appendChild(style);
  }
}

export default HeroSection;
