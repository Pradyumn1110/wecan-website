const navItems = [
  { label: "Home", href: "#" },
  { label: "Info", href: "#about" },
  { label: "Prabhupada", href: "#prabhupada" },
  { label: "Gurudeva", href: "#gurudeva" },
  { label: "Media", href: "#media" },
  { label: "Projects", href: "#projects" },
  { label: "Photos", href: "#photos" },
  { label: "Calendar", href: "/calendar" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f3eb] text-[#30251f]">
      <header className="sticky top-0 z-50 border-b border-[#4b2e24]/10 bg-[#f7f3eb]/95 backdrop-blur-md">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#" className="flex items-center" aria-label="Home">
            <img
              src="/We%20can%20Logo.png"
              alt="Hare Krishna WECAN"
              className="h-16 w-auto object-contain"
            />
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#6f4939] transition hover:text-[#a66a35]"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              className="rounded-full bg-[#6f4939] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#54372c]"
            >
              Contact us
            </a>
          </nav>

          <details className="relative lg:hidden">
            <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-[#4b2e24]/15 text-[#6f4939]">
              <span className="text-xl">☰</span>
            </summary>

            <div className="absolute right-0 top-14 w-56 rounded-2xl border border-[#4b2e24]/10 bg-[#fffdf9] p-3 shadow-xl">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block rounded-xl px-4 py-3 text-sm text-[#4f392f] hover:bg-[#f3ede3]"
                >
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="block rounded-xl px-4 py-3 text-sm text-[#4f392f] hover:bg-[#f3ede3]">
                Contact us
              </a>
            </div>
          </details>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-[#c58b55]/12 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-[#8c6049]/10 blur-3xl" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),_transparent_45%)]" />

        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-20 sm:px-8 lg:px-12 lg:pb-28 lg:pt-16">
          <div className="overflow-hidden rounded-[2.25rem] border border-[#4b2e24]/10 bg-[#fffdf9]/80 shadow-[0_24px_70px_rgba(74,44,30,0.08)] backdrop-blur-sm">
            <div className="grid gap-8 p-5 lg:grid-cols-[1.15fr_0.85fr] lg:p-8">
              <div className="flex flex-col justify-center">
                <div className="mb-7 flex items-center gap-4">
                  <span className="h-px w-12 bg-[#a66a35]" />
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a66a35]">
                    Hare Krishna - WECAN
                  </span>
                </div>

                <h1 className="max-w-4xl text-4xl font-medium leading-[1.08] tracking-[-0.03em] text-[#392820] sm:text-5xl lg:text-7xl">
                  Welcome to Hare Krishna - WECAN:
                  <span className="mt-3 block text-[#8b6854]">(Est: 19th April 2002)</span>
                </h1>

                <div className="mt-10 max-w-3xl space-y-6 text-base leading-8 text-[#654d40] sm:text-lg">
                  <p>May the blessings of our Dear Lordships Sri Sri Radha Krishna be on us all.</p>

                  <p>
                    This is the resource website of various outreach projects conducted under the
                    instructions of His Holiness Mahavishnu Goswami Mahārāja, Srila Gurudeva with its
                    Headquarters in Auckland, New Zealand. Under Mahārāja’s order, various Krishna
                    Conscious outreach programs are being conducted by Hare Krishna - WECAN around the
                    world, to serve and please Jagat-guru His Divine Grace A.C. Bhaktivedanta Swami
                    Prabhupada, founder Acharya ISKCON.
                  </p>

                  <p>
                    “WECAN” stands for ‘West and Central Auckland Nama-hatta’, established in 19th
                    April 2002 in Auckland, New Zealand. We organise Krishna Conscious programs in
                    different countries and use various online tools to support our activities. We also
                    actively support Krishna Conscious activities of other like-minded people in different
                    parts of the world.
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a
                    href="#about"
                    className="rounded-full bg-[#6f4939] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#54372c]"
                  >
                    Explore our website
                  </a>
                  <a
                    href="#contact"
                    className="rounded-full border border-[#6f4939]/20 bg-white/40 px-6 py-3 text-sm font-semibold text-[#6f4939] transition hover:border-[#6f4939]/40 hover:bg-white/80"
                  >
                    Contact us
                  </a>
                </div>
              </div>

              <div className="relative min-h-[380px] overflow-hidden rounded-[2rem] border border-[#4b2e24]/10 bg-[#f1e7dc]">
                <img
                  src="/radhaneelmadhav.jpg"
                  alt="Radha Neel Madhav"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2f231d]/55 via-[#2f231d]/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="rounded-2xl border border-white/20 bg-[#fffdf9]/10 p-4 backdrop-blur-sm">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#f4e4d0]">
                      Hare Krishna - WECAN
                    </p>
                    <p className="mt-2 text-base font-medium text-white">
                      Hare Krishna - WECAN (Registered New Zealand Charity Trust)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-[#4b2e24]/10 bg-[#fffdf9]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a66a35]">
                Mission statement
              </p>

              <div className="mt-5 h-px w-16 bg-[#c58b55]" />
            </div>

            <div>
              <p className="text-xl leading-9 text-[#574238] sm:text-2xl sm:leading-10">
                "Under the auspice and careful guidance of His Holiness Mahavishnu Goswami Maharaj,
                Srila Gurudeva, to undertake systematic study of the science of Krsna Consciousness as
                taught by Jagat-guru, His Divine Grace A.C. Bhaktivedanta Swami Prabhupada, founder
                Acharya ISKCON. And to share our practical realisations with as many living beings as
                possible so as to purify our existence."
              </p>

              <div className="mt-14">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a66a35]">
                  Mottos
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-[#4b2e24]/10 bg-[#f7f3eb] p-7 shadow-[0_12px_30px_rgba(61,41,33,0.04)]">
                    <p className="text-lg leading-8 text-[#574238]">“Give Krishna a chance”</p>
                  </div>

                  <div className="rounded-2xl border border-[#4b2e24]/10 bg-[#f7f3eb] p-7 shadow-[0_12px_30px_rgba(61,41,33,0.04)]">
                    <p className="text-lg leading-8 text-[#574238]">
                      “Challenge your devotional service to do better”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-[#4b2e24]/10 bg-[#fffdf9] p-8 shadow-[0_18px_40px_rgba(92,60,46,0.04)]">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a66a35]">
              Prabhupada
            </p>
            <h2 id="prabhupada" className="mt-4 text-3xl font-medium text-[#392820]">
              His Divine Grace A.C. Bhaktivedanta Swami Prabhupada
            </h2>
          </div>

          <div className="rounded-[2rem] border border-[#4b2e24]/10 bg-[#f7f3eb] p-8 shadow-[0_18px_40px_rgba(92,60,46,0.04)]">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a66a35]">
              Gurudeva
            </p>
            <h2 id="gurudeva" className="mt-4 text-3xl font-medium text-[#392820]">
              His Holiness Mahavishnu Goswami Mahārāja, Srila Gurudeva
            </h2>
          </div>
        </div>
      </section>

      <section id="projects" className="border-y border-[#4b2e24]/10 bg-[#f1e7dc]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a66a35]">
              Explore our website
            </p>
            <div className="mt-6 h-px w-16 bg-[#c58b55]" />
          </div>

          <div className="grid gap-5 lg:grid-cols-4">
            <a href="#projects" className="rounded-[1.6rem] border border-[#4b2e24]/10 bg-[#fffdf9] p-6 shadow-[0_12px_30px_rgba(61,41,33,0.04)] transition hover:-translate-y-1">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#a66a35]">Projects</p>
              <p className="mt-3 text-lg font-medium text-[#392820]">Projects Tab</p>
            </a>
            <a href="#photos" className="rounded-[1.6rem] border border-[#4b2e24]/10 bg-[#fffdf9] p-6 shadow-[0_12px_30px_rgba(61,41,33,0.04)] transition hover:-translate-y-1">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#a66a35]">Photos</p>
              <p className="mt-3 text-lg font-medium text-[#392820]">Photos Tab</p>
            </a>
            <a href="#media" className="rounded-[1.6rem] border border-[#4b2e24]/10 bg-[#fffdf9] p-6 shadow-[0_12px_30px_rgba(61,41,33,0.04)] transition hover:-translate-y-1">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#a66a35]">Media</p>
              <p className="mt-3 text-lg font-medium text-[#392820]">Media Tab</p>
            </a>
            <a href="/calendar" className="rounded-[1.6rem] border border-[#4b2e24]/10 bg-[#fffdf9] p-6 shadow-[0_12px_30px_rgba(61,41,33,0.04)] transition hover:-translate-y-1">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#a66a35]">Calendar</p>
              <p className="mt-3 text-lg font-medium text-[#392820]">Calendar</p>
            </a>
          </div>
        </div>
      </section>

      <section id="media" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a66a35]">
            Explore our website
          </p>

          <div className="mt-6 h-px w-16 bg-[#c58b55]" />

          <p className="mt-8 text-lg leading-8 text-[#654d40] sm:text-xl sm:leading-9">
            Please take time and explore our website. Look up the different Tabs in the Main menu. Check
            various activities we undertake (Projects Tab), view Photos Gallery (Photos Tab), listen to
            Srila Gurudevas lectures (New lectures are added regularly). Look at our Free Food
            Distribution Project (in Projects Tab) and also Listen/View our Krishna Conscious outreach
            Programs which are uploaded weekly (Media Tab). You can also participate in these programs,
            go to "Contact us" Tab for more info.
          </p>
        </div>
      </section>

      <section id="contact" className="bg-[#30251f]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d9b089]">Contact us</p>
              <h2 className="mt-6 text-3xl font-medium text-white sm:text-5xl">
                Please take time and explore our website.
              </h2>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="rounded-full bg-[#f0d0a5] px-6 py-3 text-sm font-semibold text-[#3b2a22] transition hover:bg-[#e3b67f]"
              >
                Contact us
              </a>
              <a
                href="#"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Get involved
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#4b2e24]/10 bg-[#2a201d]">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <img
              src="/We%20can%20Logo.png"
              alt="Hare Krishna WECAN"
              className="h-14 w-auto brightness-0 invert"
            />

            <p className="max-w-xl text-sm leading-7 text-white/65">
              Please Chant - "Hare Krishna Hare Krishna Krishna Krishna Hare Hare Hare Rama Hare Rama
              Rama Rama Hare Hare" - and be happy.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}