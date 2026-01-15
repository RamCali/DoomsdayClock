export interface ClockEvent {
  year: number;
  time: string;
  minutes: number;
  direction: "forward" | "backward" | "initial";
  reason: string;
  details: string;
}

export const clockHistory: ClockEvent[] = [
  {
    year: 1947,
    time: "7 minutes",
    minutes: 7,
    direction: "initial",
    reason: "Clock created",
    details: "The Bulletin of the Atomic Scientists creates the Doomsday Clock to convey threats to humanity and the planet. The initial setting is 7 minutes to midnight."
  },
  {
    year: 1949,
    time: "3 minutes",
    minutes: 3,
    direction: "forward",
    reason: "Soviet atomic bomb",
    details: "The Soviet Union tests its first atomic bomb, ending the US nuclear monopoly and beginning the nuclear arms race."
  },
  {
    year: 1953,
    time: "2 minutes",
    minutes: 2,
    direction: "forward",
    reason: "Hydrogen bomb tests",
    details: "The US and Soviet Union both test thermonuclear devices within months of each other, ushering in the age of hydrogen bombs."
  },
  {
    year: 1960,
    time: "7 minutes",
    minutes: 7,
    direction: "backward",
    reason: "Scientific cooperation",
    details: "Growing public concern about nuclear weapons leads to increased scientific cooperation between East and West."
  },
  {
    year: 1963,
    time: "12 minutes",
    minutes: 12,
    direction: "backward",
    reason: "Partial Test Ban Treaty",
    details: "The US and Soviet Union sign the Partial Test Ban Treaty, limiting nuclear testing."
  },
  {
    year: 1968,
    time: "7 minutes",
    minutes: 7,
    direction: "forward",
    reason: "Global instability",
    details: "France and China acquire nuclear weapons. Wars in the Middle East, Indian subcontinent, and Vietnam create global instability."
  },
  {
    year: 1969,
    time: "10 minutes",
    minutes: 10,
    direction: "backward",
    reason: "Nuclear Non-Proliferation Treaty",
    details: "Nearly all nations sign the Nuclear Non-Proliferation Treaty."
  },
  {
    year: 1972,
    time: "12 minutes",
    minutes: 12,
    direction: "backward",
    reason: "SALT I and ABM Treaty",
    details: "The US and Soviet Union sign SALT I and the Anti-Ballistic Missile Treaty."
  },
  {
    year: 1974,
    time: "9 minutes",
    minutes: 9,
    direction: "forward",
    reason: "India tests nuclear device",
    details: "India tests a nuclear device, SALT II talks stall, and both superpowers modernize their nuclear forces."
  },
  {
    year: 1980,
    time: "7 minutes",
    minutes: 7,
    direction: "forward",
    reason: "Deadlocked negotiations",
    details: "US-Soviet talks are effectively deadlocked.�e global arms race intensifies."
  },
  {
    year: 1981,
    time: "4 minutes",
    minutes: 4,
    direction: "forward",
    reason: "Cold War intensifies",
    details: "The Soviet invasion of Afghanistan, the US boycott of the Olympics, and Reagan's military buildup increase tensions."
  },
  {
    year: 1984,
    time: "3 minutes",
    minutes: 3,
    direction: "forward",
    reason: "US-Soviet relations reach low",
    details: "US-Soviet relations reach their iciest point in decades. Arms control negotiations stall."
  },
  {
    year: 1988,
    time: "6 minutes",
    minutes: 6,
    direction: "backward",
    reason: "INF Treaty signed",
    details: "The US and Soviet Union sign the Intermediate-Range Nuclear Forces Treaty, eliminating an entire class of nuclear weapons."
  },
  {
    year: 1990,
    time: "10 minutes",
    minutes: 10,
    direction: "backward",
    reason: "Cold War ends",
    details: "The Berlin Wall falls, signaling the end of the Cold War."
  },
  {
    year: 1991,
    time: "17 minutes",
    minutes: 17,
    direction: "backward",
    reason: "Strategic Arms Reduction Treaty",
    details: "The US and Soviet Union sign START, the first treaty to require deep cuts in strategic nuclear arsenals."
  },
  {
    year: 1995,
    time: "14 minutes",
    minutes: 14,
    direction: "forward",
    reason: "Post-Cold War concerns",
    details: "Concerns about Russia's nuclear arsenal and the global spread of nuclear weapons technology."
  },
  {
    year: 1998,
    time: "9 minutes",
    minutes: 9,
    direction: "forward",
    reason: "India and Pakistan test nukes",
    details: "India and Pakistan conduct nuclear weapons tests, raising fears of a regional nuclear arms race."
  },
  {
    year: 2002,
    time: "7 minutes",
    minutes: 7,
    direction: "forward",
    reason: "9/11 aftermath",
    details: "The US withdraws from the ABM Treaty. Terrorist attacks raise concerns about nuclear terrorism."
  },
  {
    year: 2007,
    time: "5 minutes",
    minutes: 5,
    direction: "forward",
    reason: "Climate change added",
    details: "For the first time, climate change is factored into the Clock's setting. North Korea tests nuclear weapons."
  },
  {
    year: 2010,
    time: "6 minutes",
    minutes: 6,
    direction: "backward",
    reason: "New START treaty",
    details: "Worldwide cooperation on climate change and nuclear security. New START Treaty negotiations."
  },
  {
    year: 2012,
    time: "5 minutes",
    minutes: 5,
    direction: "forward",
    reason: "Nuclear modernization",
    details: "Lack of progress on nuclear disarmament and climate change mitigation."
  },
  {
    year: 2015,
    time: "3 minutes",
    minutes: 3,
    direction: "forward",
    reason: "Climate inaction",
    details: "Unchecked climate change, nuclear modernization, and outsized nuclear arsenals pose threats."
  },
  {
    year: 2017,
    time: "2.5 minutes",
    minutes: 2.5,
    direction: "forward",
    reason: "Trump administration",
    details: "Rise of nationalism worldwide, US President's comments about nuclear weapons, and climate change denial."
  },
  {
    year: 2018,
    time: "2 minutes",
    minutes: 2,
    direction: "forward",
    reason: "Nuclear risks increase",
    details: "Failure of world leaders to address nuclear threats and climate change."
  },
  {
    year: 2020,
    time: "100 seconds",
    minutes: 1.67,
    direction: "forward",
    reason: "Closest ever",
    details: "Nuclear weapons modernization, climate change, and cyber-enabled information warfare combine to create unprecedented danger."
  },
  {
    year: 2023,
    time: "90 seconds",
    minutes: 1.5,
    direction: "forward",
    reason: "Russia-Ukraine war",
    details: "Russia's invasion of Ukraine raises nuclear tensions to their highest level since the Cold War. Climate change continues unabated."
  },
  {
    year: 2024,
    time: "90 seconds",
    minutes: 1.5,
    direction: "forward",
    reason: "Unchanged",
    details: "The Clock remains at 90 seconds due to ongoing Russia-Ukraine conflict, nuclear threats, and lack of climate action."
  },
  {
    year: 2025,
    time: "89 seconds",
    minutes: 1.483,
    direction: "forward",
    reason: "Closest ever",
    details: "The Clock moves 1 second closer to midnight—the closest it has ever been. Escalating nuclear risks, ongoing Russia-Ukraine war, climate crisis, and AI-related threats contribute to the decision."
  }
];

export const currentTime = {
  seconds: 89,
  display: "89 seconds",
  year: 2025,
  lastUpdated: "January 28, 2025",
  nextUpdate: "January 2026",
  source: "Bulletin of the Atomic Scientists"
};
