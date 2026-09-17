"use client";

import { useState } from "react";

type CalendarDay = {
  date: number;
  weekday: string;
  tithi: string;
  paksa: "G" | "K";
  naksatra: string;
  fast: boolean;
  events: string[];
  breakFast?: string;
};

const september2026: CalendarDay[] = [
  {
    date: 1,
    weekday: "Tuesday",
    tithi: "Caturthi",
    paksa: "K",
    naksatra: "Revati",
    fast: false,
    events: [],
  },
  {
    date: 2,
    weekday: "Wednesday",
    tithi: "Pancami",
    paksa: "K",
    naksatra: "Asvini",
    fast: false,
    events: [],
  },
  {
    date: 3,
    weekday: "Thursday",
    tithi: "Sasti",
    paksa: "K",
    naksatra: "Bharani",
    fast: false,
    events: [],
  },
  {
    date: 4,
    weekday: "Friday",
    tithi: "Saptami",
    paksa: "K",
    naksatra: "Krittika",
    fast: false,
    events: [],
  },
  {
    date: 5,
    weekday: "Saturday",
    tithi: "Astami",
    paksa: "K",
    naksatra: "Mrigasira",
    fast: true,
    events: [
      "Sri Krsna Janmastami: Appearance of Lord Sri Krsna",
      "(Fast till midnight)",
    ],
  },
  {
    date: 6,
    weekday: "Sunday",
    tithi: "Dasami",
    paksa: "K",
    naksatra: "Ardra",
    fast: true,
    events: [
      "Nandotsava",
      "Srila Prabhupada -- Appearance",
      "(Fast till noon)",
    ],
  },
  {
    date: 7,
    weekday: "Monday",
    tithi: "Ekadasi (suitable for fasting)",
    paksa: "K",
    naksatra: "Punarvasu",
    fast: true,
    events: ["Fasting for Annada Ekadasi"],
  },
  {
    date: 8,
    weekday: "Tuesday",
    tithi: "Dvadasi",
    paksa: "K",
    naksatra: "Pusyami",
    fast: false,
    events: [],
    breakFast: "06:32 (sunrise) - 10:23 (1/3 of daylight) LT",
  },
  {
    date: 9,
    weekday: "Wednesday",
    tithi: "Trayodasi",
    paksa: "K",
    naksatra: "Aslesa",
    fast: false,
    events: [],
  },
  {
    date: 10,
    weekday: "Thursday",
    tithi: "Caturdasi",
    paksa: "K",
    naksatra: "Magha",
    fast: false,
    events: [],
  },
  {
    date: 11,
    weekday: "Friday",
    tithi: "Amavasya",
    paksa: "K",
    naksatra: "Purva-phalguni",
    fast: false,
    events: [],
  },
  {
    date: 12,
    weekday: "Saturday",
    tithi: "Pratipat",
    paksa: "G",
    naksatra: "Uttara-phalguni",
    fast: false,
    events: [],
  },
  {
    date: 13,
    weekday: "Sunday",
    tithi: "Dvitiya",
    paksa: "G",
    naksatra: "Hasta",
    fast: false,
    events: [],
  },
  {
    date: 14,
    weekday: "Monday",
    tithi: "Tritiya",
    paksa: "G",
    naksatra: "Citra",
    fast: false,
    events: [],
  },
  {
    date: 15,
    weekday: "Tuesday",
    tithi: "Caturthi",
    paksa: "G",
    naksatra: "Swati",
    fast: false,
    events: [],
  },
  {
    date: 16,
    weekday: "Wednesday",
    tithi: "Pancami",
    paksa: "G",
    naksatra: "Visakha",
    fast: false,
    events: [
      "Srimati Sita Thakurani (Sri Advaita's consort) -- Appearance",
    ],
  },
  {
    date: 17,
    weekday: "Thursday",
    tithi: "Sasti",
    paksa: "G",
    naksatra: "Anuradha",
    fast: false,
    events: [],
  },
  {
    date: 18,
    weekday: "Friday",
    tithi: "Saptami",
    paksa: "G",
    naksatra: "Jyestha",
    fast: false,
    events: [],
  },
  {
    date: 19,
    weekday: "Saturday",
    tithi: "Astami",
    paksa: "G",
    naksatra: "Mula",
    fast: true,
    events: [
      "Radhastami: Appearance of Srimati Radharani",
      "(Fast till noon)",
    ],
  },
  {
    date: 20,
    weekday: "Sunday",
    tithi: "Navami",
    paksa: "G",
    naksatra: "Mula",
    fast: false,
    events: [],
  },
  {
    date: 21,
    weekday: "Monday",
    tithi: "Dasami",
    paksa: "G",
    naksatra: "Purva-asadha",
    fast: false,
    events: [],
  },
  {
    date: 22,
    weekday: "Tuesday",
    tithi: "Ekadasi (suitable for fasting)",
    paksa: "G",
    naksatra: "Uttara-asadha",
    fast: true,
    events: [
      "Fasting for Parsva Ekadasi",
      "(Fast till noon for Vamanadeva, with feast tomorrow)",
    ],
  },
  {
    date: 23,
    weekday: "Wednesday",
    tithi: "Dvadasi",
    paksa: "G",
    naksatra: "Sravana",
    fast: false,
    events: [
      "Sri Vamana Dvadasi: Appearance of Lord Vamanadeva",
      "(Fasting is done yesterday, today is feast)",
      "Srila Jiva Gosvami -- Appearance",
    ],
    breakFast: "after 10:31 (1/4 of tithi) LT",
  },
  {
    date: 24,
    weekday: "Thursday",
    tithi: "Trayodasi",
    paksa: "G",
    naksatra: "Dhanista",
    fast: true,
    events: [
      "Srila Bhaktivinoda Thakura -- Appearance",
      "(Fast till noon)",
    ],
  },
  {
    date: 25,
    weekday: "Friday",
    tithi: "Caturdasi",
    paksa: "G",
    naksatra: "Satabhisa",
    fast: false,
    events: [
      "Ananta Caturdasi Vrata",
      "Srila Haridasa Thakura -- Disappearance",
      "Last day of the second Caturmasya month [PURNIMA SYSTEM]",
    ],
  },
  {
    date: 26,
    weekday: "Saturday",
    tithi: "Purnima",
    paksa: "G",
    naksatra: "Purva-bhadra",
    fast: false,
    events: [
      "Sri Visvarupa Mahotsava",
      "Bhadra Purnima",
      "Acceptance of sannyasa by Srila Prabhupada",
      "Third month of Caturmasya begins [PURNIMA SYSTEM]",
      "(milk fast for one month)",
    ],
  },
  {
    date: 27,
    weekday: "Sunday",
    tithi: "Pratipat",
    paksa: "K",
    naksatra: "Uttara-bhadra",
    fast: false,
    events: ["First day of Daylight Saving Time"],
  },
  {
    date: 28,
    weekday: "Monday",
    tithi: "Dvitiya",
    paksa: "K",
    naksatra: "Revati",
    fast: false,
    events: [],
  },
  {
    date: 29,
    weekday: "Tuesday",
    tithi: "Tritiya",
    paksa: "K",
    naksatra: "Asvini",
    fast: false,
    events: [],
  },
  {
    date: 30,
    weekday: "Wednesday",
    tithi: "Caturthi",
    paksa: "K",
    naksatra: "Bharani",
    fast: false,
    events: [],
  },
];

const weekdays = [
  { short: "SUN", full: "Sunday" },
  { short: "MON", full: "Monday" },
  { short: "TUE", full: "Tuesday" },
  { short: "WED", full: "Wednesday" },
  { short: "THU", full: "Thursday" },
  { short: "FRI", full: "Friday" },
  { short: "SAT", full: "Saturday" },
];

export default function CalendarPage() {
  const [selectedDay, setSelectedDay] = useState<CalendarDay | null>(null);

  /*
   * September 1, 2026 is Tuesday.
   * Sunday = 0, Monday = 1, Tuesday = 2.
   */
  const firstDayOffset = 2;

  const cells = [
    ...Array(firstDayOffset).fill(null),
    ...september2026,
  ];

  // Current date for this prototype.
  // September 15 is highlighted as "Today".
  const todayDate = 15;

  const today = september2026.find(
    (day) => day.date === todayDate
  );

  return (
    <main className="min-h-screen bg-[#f5efe7] text-[#33251f]">

      {/* ================= HEADER ================= */}

      <header className="border-b border-[#5c3928]/10 bg-[#fffdf9]">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

          <a href="/" aria-label="WECAN Home">
            <img
              src="/We%20can%20Logo.png"
              alt="Hare Krishna WECAN"
              className="h-14 w-auto object-contain"
            />
          </a>

          <a
            href="/"
            className="rounded-full border border-[#7c4b2f]/20 bg-white px-5 py-2.5 text-sm font-medium text-[#70452f] transition hover:bg-[#f7eee4]"
          >
            ← Back to Home
          </a>

        </div>
      </header>


      {/* ================= MAIN CALENDAR ================= */}

      <section className="mx-auto max-w-6xl px-3 py-8 sm:px-6 sm:py-12 lg:px-8">

        {/* Entire calendar artwork */}
        <div className="overflow-hidden rounded-[2rem] border border-[#8b5638]/15 bg-[#fffaf5] shadow-[0_25px_70px_rgba(76,45,30,0.12)]">


          {/* ================= RADHA KRISHNA IMAGE ================= */}

          <div className="relative w-full bg-[#3d2117]">

            <img
              src="/radhaneelmadhav.jpg"
              alt="Radha Neel Madhav"
              className="block h-auto max-h-[620px] w-full object-contain"
            />

          </div>


          {/* ================= CALENDAR TITLE AREA ================= */}

          <div className="relative border-b border-[#8b5638]/15 bg-[#fff8ef] px-5 py-7 text-center sm:px-8 sm:py-9">

            {/* Small decorative line */}
            <div className="mx-auto mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-[#c47a35]" />
              <span className="text-[#b9692e]">✦</span>
              <span className="h-px w-12 bg-[#c47a35]" />
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a85f2c]">
              Vaishnava Calendar
            </p>

            <h1 className="mt-2 font-serif text-4xl font-bold tracking-wide text-[#8e3f20] sm:text-5xl">
              SEPTEMBER 2026
            </h1>

            <p className="mt-3 text-sm font-medium text-[#68483a] sm:text-base">
              Auckland [New Zealand]
            </p>

            <p className="mt-1 text-xs text-[#977665] sm:text-sm">
              Bhadra (Hrsikesa) Masa, Gaurabda 540
            </p>

          </div>


          {/* ================= TODAY BAR ================= */}

          {today && (
            <div className="border-b border-[#8b5638]/15 bg-[#f8ead8] px-4 py-4 sm:px-7">

              <div className="mx-auto flex max-w-5xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#b76b30] text-white">
                    <span className="text-lg">•</span>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a85f2c]">
                      Today
                    </p>

                    <p className="text-base font-semibold text-[#442c22]">
                      {today.date} September 2026
                    </p>
                  </div>

                </div>


                <div className="sm:text-right">

                  <p className="text-sm font-medium text-[#5f4437]">
                    {today.tithi}
                  </p>

                  <p className="text-xs text-[#977665]">
                    {today.paksa} · {today.naksatra}
                  </p>

                </div>

              </div>

            </div>
          )}


          {/* ================= WEEKDAY HEADERS ================= */}

          <div className="grid grid-cols-7 gap-[2px] bg-[#f0d6c0] p-[2px]">

            {weekdays.map((day) => (
              <div
                key={day.short}
                title={day.full}
                className="bg-[#c95722] px-1 py-3 text-center text-[9px] font-bold tracking-wide text-white sm:py-3.5 sm:text-xs"
              >
                <span className="sm:hidden">
                  {day.short}
                </span>

                <span className="hidden sm:inline">
                  {day.full.toUpperCase()}
                </span>
              </div>
            ))}

          </div>


          {/* ================= CALENDAR DAYS ================= */}

          <div className="grid grid-cols-7 gap-[2px] bg-[#ead8ca] p-[2px]">

            {cells.map((day, index) => {

              if (!day) {
                return (
                  <div
                    key={`empty-${index}`}
                    className="min-h-[120px] bg-[#faf5ef] sm:min-h-[170px]"
                  />
                );
              }

              const isToday = day.date === todayDate;
              const hasEvents = day.events.length > 0;

              return (
                <button
                  key={day.date}
                  type="button"
                  onClick={() => setSelectedDay(day)}
                  className={`
                    group relative flex min-h-[120px] flex-col
                    bg-[#fffdf9] p-2 text-left
                    transition-all duration-200
                    hover:z-10 hover:bg-[#fff3e4]
                    hover:shadow-[inset_0_0_0_2px_#c47a35]
                    sm:min-h-[170px] sm:p-3
                    ${isToday ? "bg-[#fff4cf]" : ""}
                    ${hasEvents ? "bg-[#fffaf1]" : ""}
                  `}
                >

                  {/* TODAY marker */}
                  {isToday && (
                    <span className="absolute right-2 top-2 rounded-full bg-[#c47a35] px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-white sm:right-3 sm:top-3 sm:text-[9px]">
                      Today
                    </span>
                  )}


                  {/* Date number */}

                  <div
                    className={`
                      flex h-8 w-8 shrink-0 items-center justify-center
                      rounded-full text-sm font-bold
                      sm:h-10 sm:w-10 sm:text-base
                      ${
                        day.fast
                          ? "bg-[#b86d32] text-white"
                          : isToday
                            ? "bg-[#d18a18] text-white"
                            : "text-[#17467c]"
                      }
                    `}
                  >
                    {day.date}
                  </div>


                  {/* Tithi */}

                  <div className="mt-2 min-w-0">

                    <p className="truncate text-[9px] font-semibold leading-4 text-[#50382e] sm:text-xs">
                      {day.tithi}
                    </p>

                    <p className="mt-0.5 truncate text-[8px] leading-3 text-[#9a7562] sm:text-[10px]">
                      {day.paksa} · {day.naksatra}
                    </p>

                  </div>


                  {/* Events */}

                  {hasEvents && (
                    <div className="mt-2 min-w-0 space-y-1 overflow-hidden">

                      {day.events.slice(0, 2).map((event, eventIndex) => (
                        <p
                          key={eventIndex}
                          className="line-clamp-2 text-[8px] font-medium leading-[1.3] text-[#a23f25] sm:text-[10px]"
                        >
                          {event}
                        </p>
                      ))}

                      {day.events.length > 2 && (
                        <p className="text-[8px] font-semibold text-[#8d6958] sm:text-[9px]">
                          +{day.events.length - 2} more
                        </p>
                      )}

                    </div>
                  )}

                </button>
              );
            })}

          </div>


          {/* ================= LEGEND ================= */}

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#8b5638]/15 bg-[#fff8ef] px-5 py-4 text-[10px] text-[#735344] sm:px-7 sm:text-xs">

            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#b86d32]" />
              Fast day
            </div>

            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#d18a18]" />
              Today
            </div>

            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full border border-[#a23f25]" />
              Festival / event
            </div>

            <span className="text-[#987768]">
              Click any date for details
            </span>

          </div>

        </div>

      </section>


      {/* ================= DATE DETAILS ================= */}

      {selectedDay && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-[#24150f]/55 p-3 sm:items-center sm:p-6"
          onClick={() => setSelectedDay(null)}
        >

          <div
            className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-[2rem] bg-[#fffdf9] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Modal header */}

            <div className="flex items-start justify-between border-b border-[#6b432f]/10 px-6 py-6 sm:px-8">

              <div>

                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#aa632e]">
                  September 2026
                </p>

                <h2 className="mt-2 text-3xl font-semibold text-[#392820]">
                  {selectedDay.date} September
                </h2>

              </div>

              <button
                type="button"
                onClick={() => setSelectedDay(null)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#6b432f]/10 text-xl text-[#6f4939] transition hover:bg-[#f7eee4]"
                aria-label="Close"
              >
                ×
              </button>

            </div>


            {/* Details */}

            <div className="space-y-6 px-6 py-6 sm:px-8 sm:py-8">

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">

                <div className="rounded-xl bg-[#f7eee4] p-4">
                  <p className="text-[9px] font-bold uppercase tracking-wider text-[#aa632e]">
                    Weekday
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#3f2d25]">
                    {selectedDay.weekday}
                  </p>
                </div>

                <div className="rounded-xl bg-[#f7eee4] p-4">
                  <p className="text-[9px] font-bold uppercase tracking-wider text-[#aa632e]">
                    Tithi
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#3f2d25]">
                    {selectedDay.tithi}
                  </p>
                </div>

                <div className="rounded-xl bg-[#f7eee4] p-4">
                  <p className="text-[9px] font-bold uppercase tracking-wider text-[#aa632e]">
                    Paksa
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#3f2d25]">
                    {selectedDay.paksa}
                  </p>
                </div>

                <div className="rounded-xl bg-[#f7eee4] p-4">
                  <p className="text-[9px] font-bold uppercase tracking-wider text-[#aa632e]">
                    Naksatra
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#3f2d25]">
                    {selectedDay.naksatra}
                  </p>
                </div>

              </div>


              {/* Events */}

              {selectedDay.events.length > 0 && (
                <div>

                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#aa632e]">
                    Events
                  </p>

                  <div className="mt-3 space-y-2">

                    {selectedDay.events.map((event, index) => (
                      <div
                        key={index}
                        className="rounded-xl border border-[#a23f25]/10 bg-[#fff7ee] p-4 text-sm leading-6 text-[#513a30]"
                      >
                        {event}
                      </div>
                    ))}

                  </div>

                </div>
              )}


              {/* Break fast */}

              {selectedDay.breakFast && (
                <div className="rounded-xl border border-[#c47a35]/20 bg-[#f8ead8] p-5">

                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#aa632e]">
                    Break fast
                  </p>

                  <p className="mt-2 text-base font-semibold text-[#432e24]">
                    {selectedDay.breakFast}
                  </p>

                </div>
              )}


              {/* Fast */}

              {selectedDay.fast && (
                <div className="rounded-xl bg-[#9f4a27] p-5 text-white">

                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#f5d3ae]">
                    Fast
                  </p>

                  <p className="mt-2 text-base font-semibold">
                    This date is marked with *
                  </p>

                </div>
              )}

            </div>

          </div>

        </div>
      )}

    </main>
  );
}