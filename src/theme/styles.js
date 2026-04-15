export const COLORS = {
  black: 'bg-black text-white',
  white: 'bg-white text-black border border-gray-200',
  textMain: 'text-gray-900',
  textSecondary: 'text-gray-900',
};

export const TYPOGRAPHY = {
  h1: 'text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tighter uppercase',
  h2: 'text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tighter uppercase',
  h3: 'text-xl md:text-2xl lg:text-3xl font-bold leading-snug',
  body: 'text-base md:text-lg leading-relaxed text-gray-900',
};

export const LAYOUT = {
  section: 'max-w-7xl mx-auto px-6 md:px-10 py-5 md:py-10',
  hero: 'w-full px-6 md:px-10 py-24 md:py-40 min-h-[500px] lg:min-h-[70vh]',
  grid3: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8',
  flexCenter: 'flex flex-col justify-center items-center gap-6 text-center',
  grid6: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8',
};

export const CARD = {
  base: 'flex flex-col justify-start items-center gap-6 text-center p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300',
  feature: 'bg-gray-50/50 border border-gray-100 rounded-3xl p-8 md:p-12 flex flex-col items-center gap-8 text-center transition-all duration-300 hover:bg-gray-50',
};

export const BUTTONS = {
  primary: 'w-full md:w-auto px-6 py-2.5 text-base md:text-lg bg-black text-white font-semibold rounded-lg transition-all duration-300 transform active:scale-97 shadow-md cursor-pointer hover:bg-white hover:text-black hover:border-2 border-2 hover:border-black',
  secondary: 'border-2 w-full md:w-auto border-black text-black md:text-lg text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-black hover:text-white transition-all duration-300 cursor-pointer',
  roundedFull: 'px-8 py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 cursor-pointer',
};

export const inputStyle = "w-full px-5 py-3 md:py-4 rounded-full bg-gray-200 text-sm md:text-base outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500 transition-all duration-200";
