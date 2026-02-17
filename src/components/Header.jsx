// import React from 'react';
// import { Pill } from 'lucide-react';

// export default function Header() {
//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white sticky top-0 z-50 border-b border-slate-700">
//       <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
//           <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-2 rounded">
//             <Pill className="w-5 h-5 text-slate-900" />
//           </div>
//           <h1 className="text-xl font-bold">MedCheck</h1>
//         </div>

//         {/* Navigation */}
//         <nav className="hidden md:flex items-center gap-8">
//           <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-white transition text-sm">
//             About
//           </button>
//           <button onClick={() => scrollToSection('features')} className="text-slate-300 hover:text-white transition text-sm">
//             Features
//           </button>
//           <button onClick={() => scrollToSection('tool')} className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-5 py-2 rounded font-semibold transition text-sm">
//             Try Now
//           </button>
//         </nav>
//       </div>
//     </header>
//   );
// }
// Header.jsx - Light theme, enhanced responsiveness
import React from 'react';
import { Pill } from 'lucide-react';

export default function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-gradient-to-r from-gray-50 via-white to-gray-50 text-gray-900 sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-2 rounded">
            <Pill className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          <h1 className="text-lg sm:text-xl font-bold">MedCheck</h1>
        </div>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-gray-900 transition text-sm">
            About
          </button>
          <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-gray-900 transition text-sm">
            Features
          </button>
          <button onClick={() => scrollToSection('tool')} className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded font-semibold transition text-sm">
            Try Now
          </button>
        </nav>
      </div>
    </header>
  );
}