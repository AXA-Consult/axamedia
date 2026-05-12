"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function BokaMote() {
  const bookingUrl =
    "https://outlook.office.com/bookwithme/user/90e6dd1aa16b4e24b37a37e47b12928d@axaconsult.se/meetingtype/dzez0tJUQ0OBLcMcVAeM5w2?anonymous&ismsaljsauthenabled&ep=mlink";

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[999] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Hoppa till innehåll
      </a>

      <main id="main-content" className="relative min-h-screen overflow-x-hidden text-white">
        <div className="fixed inset-x-0 top-0 z-[160] h-[10px]">
          <Image
            src="/line-axa.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <Header variant="boka" />

        <section className="relative isolate overflow-hidden bg-[#08121d] px-6 pb-28 pt-20 md:px-10 md:pb-32 md:pt-[205px] lg:px-16 lg:pb-36 lg:pt-[235px]">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#07111c_0%,#0a1724_38%,#102238_72%,#142b44_100%)]" />
            <div className="hidden md:block hero-particles absolute inset-0" />
            <div className="hidden md:block hero-wave absolute inset-x-0 bottom-0 h-[42%]" />
            <div className="hidden md:block absolute right-[6%] top-[22%] h-[420px] w-[420px] rounded-full bg-[#F5B74E]/20 blur-[140px]" />
            <div className="hidden md:block absolute left-[2%] bottom-[8%] h-[360px] w-[360px] rounded-full bg-[#8fb3da]/18 blur-[130px]" />
          </div>

          <div className="relative mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-20 xl:pt-6">
              <div>
                <div className="max-w-3xl">
                  <p className="text-[12px] font-medium uppercase tracking-[0.26em] text-[#F5B74E]/80">
                    Boka ett första samtal
                  </p>

                  <h1 className="mt-3 text-[42px] font-semibold leading-[0.95] tracking-[-0.05em] md:text-[64px]">
                    Bara ett samtal
                    <br />
                    om vad ni behöver.
                  </h1>

                  <p className="mt-6 max-w-2xl text-[18px] leading-[1.8] text-white/80 md:text-[20px]">
                    Välj en tid som passar dig direkt i kalendern. Vi pratar om vart ni står,
                    vad som inte fungerar och vad som vore rimligt att börja med.
                  </p>
                </div>

                <div className="mt-14 max-w-xl space-y-4">
                  <div className="rounded-[24px] border border-white/12 bg-white/[0.06] p-5 md:backdrop-blur-md">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#F5B74E]/70">
                      Vad vi pratar om
                    </p>
                    <p className="mt-3 text-[17px] leading-[1.75] text-white/90">
                      Er marknadsföring idag, vad som fungerar, vad som inte fungerar
                      och vad som borde prioriteras först.
                    </p>
                  </div>

                  <div className="rounded-[24px] border border-white/12 bg-white/[0.06] p-5 md:backdrop-blur-md">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#F5B74E]/70">
                      Innan mötet
                    </p>
                    <p className="mt-3 text-[17px] leading-[1.75] text-white/90">
                      Du behöver inte förbereda något stort. Boka en tid och ta med
                      det du funderar på.
                    </p>
                  </div>

                  <div className="rounded-[24px] border border-white/12 bg-white/[0.06] p-5 md:backdrop-blur-md">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#F5B74E]/70">
                      Efteråt
                    </p>
                    <p className="mt-3 text-[17px] leading-[1.75] text-white/90">
                      Ni vet vad nästa steg är. Konkret, enkelt och utan krångel.
                    </p>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-[28px] border border-[#ddd6cc] bg-[#f7f3eb] p-2 text-[#1A2430] shadow-[0_30px_80px_rgba(0,0,0,0.18)] sm:p-4 lg:p-5">
                <iframe
                  src={bookingUrl}
                  title="Boka ett första samtal med AXA Consult"
                  className="h-[760px] w-full rounded-[20px] bg-white md:h-[720px]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <Footer />

        <style jsx>{`
          .hero-particles {
            opacity: 0.48;
            background-image:
              radial-gradient(circle, rgba(245, 183, 78, 0.48) 1px, transparent 1.8px),
              radial-gradient(circle, rgba(143, 179, 218, 0.38) 1px, transparent 1.7px),
              radial-gradient(circle, rgba(255, 255, 255, 0.22) 0.7px, transparent 1.4px);
            background-size: 96px 88px, 142px 132px, 210px 190px;
            background-position: 0 0, 42px 64px, 90px 30px;
          }

          .hero-wave {
            opacity: 0.7;
            background:
              radial-gradient(ellipse at 20% 85%, rgba(143, 179, 218, 0.32), transparent 34%),
              radial-gradient(ellipse at 78% 75%, rgba(245, 183, 78, 0.28), transparent 36%),
              linear-gradient(115deg, transparent 0%, rgba(143, 179, 218, 0.15) 38%, rgba(245, 183, 78, 0.18) 62%, transparent 100%);
            filter: blur(1px);
          }

          @media (min-width: 768px) {
            .hero-particles {
              animation: particlesMove 32s linear infinite;
            }

            .hero-wave {
              animation: waveMove 12s ease-in-out infinite alternate;
            }
          }

          @keyframes particlesMove {
            from {
              background-position: 0 0, 42px 64px, 90px 30px;
            }
            to {
              background-position: 180px 90px, -90px 190px, 230px 120px;
            }
          }

          @keyframes waveMove {
            from {
              transform: translate3d(-3%, 8px, 0) scale(1);
            }
            to {
              transform: translate3d(4%, -10px, 0) scale(1.04);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .hero-particles,
            .hero-wave {
              animation: none;
            }
          }
        `}</style>
      </main>
    </>
  );
}