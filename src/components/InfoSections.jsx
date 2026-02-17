// import React from 'react';
// import { CheckCircle2, Zap, Shield, AlertCircle } from 'lucide-react';

// export default function InfoSections() {
//   return (
//     <div className="bg-slate-950 text-white">
//       {/* Hero Section */}
//       <section id="hero" className="max-w-6xl mx-auto px-6 py-20">
//         <div className="space-y-6">
//           <h1 className="text-5xl md:text-6xl font-bold leading-tight">
//             Check Drug <span className="text-amber-400">Interactions</span> Instantly
//           </h1>
//           <p className="text-xl text-slate-300 max-w-2xl">
//             AI-powered medication safety checker. Identify dangerous drug combinations before they cause harm.
//           </p>
//           <button
//             onClick={() => document.getElementById('tool').scrollIntoView({ behavior: 'smooth' })}
//             className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-3 rounded font-bold transition text-lg"
//           >
//             Start Checking
//           </button>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-800">
//         <div className="grid md:grid-cols-2 gap-12">
//           <div>
//             <h2 className="text-4xl font-bold mb-6">What is MedCheck?</h2>
//             <p className="text-slate-300 text-lg leading-relaxed mb-4">
//               MedCheck is an AI-powered medication interaction checker that helps you identify potentially dangerous drug combinations before they cause harm.
//             </p>
//             <p className="text-slate-300 text-lg leading-relaxed">
//               Using advanced AI analysis and a comprehensive medication database, MedCheck provides instant, accurate information about drug interactions with severity levels and personalized recommendations.
//             </p>
//           </div>
//           <div className="space-y-4">
//             <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
//               <div className="flex gap-4">
//                 <CheckCircle2 className="w-6 h-6 text-amber-400 flex-shrink-0" />
//                 <div>
//                   <h3 className="font-bold mb-1">Instant Analysis</h3>
//                   <p className="text-slate-400">Get results in seconds, not hours</p>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
//               <div className="flex gap-4">
//                 <Zap className="w-6 h-6 text-amber-400 flex-shrink-0" />
//                 <div>
//                   <h3 className="font-bold mb-1">AI-Powered</h3>
//                   <p className="text-slate-400">Advanced LLaMA 3 analysis</p>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
//               <div className="flex gap-4">
//                 <Shield className="w-6 h-6 text-amber-400 flex-shrink-0" />
//                 <div>
//                   <h3 className="font-bold mb-1">100% Private</h3>
//                   <p className="text-slate-400">Your data never leaves your browser</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-800">
//         <h2 className="text-4xl font-bold mb-12">Why Choose MedCheck?</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {[
//             { title: 'Lightning Fast', desc: 'Get results instantly' },
//             { title: 'Highly Accurate', desc: 'Comprehensive database' },
//             { title: 'AI-Powered', desc: 'Advanced analysis engine' },
//             { title: 'Severity Levels', desc: 'Clear risk assessment' },
//             { title: 'Mobile Friendly', desc: 'Works on all devices' },
//             { title: 'Always Available', desc: '24/7 access anytime' },
//           ].map((feature, idx) => (
//             <div key={idx} className="bg-slate-800 p-8 rounded-lg border border-slate-700 hover:border-amber-400 transition">
//               <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
//               <p className="text-slate-400">{feature.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* How It Works */}
//       <section id="how-it-works" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-800">
//         <h2 className="text-4xl font-bold mb-12">How It Works</h2>
//         <div className="grid md:grid-cols-5 gap-4">
//           {[
//             { num: '1', title: 'Search', desc: 'Find medications' },
//             { num: '2', title: 'Select', desc: 'Add multiple drugs' },
//             { num: '3', title: 'Analyze', desc: 'AI checks interactions' },
//             { num: '4', title: 'Review', desc: 'Get severity levels' },
//             { num: '5', title: 'Export', desc: 'Download report' },
//           ].map((step, idx) => (
//             <div key={idx} className="text-center">
//               <div className="bg-amber-500 w-12 h-12 rounded-full flex items-center justify-center text-slate-900 font-bold text-lg mx-auto mb-4">
//                 {step.num}
//               </div>
//               <h3 className="font-bold mb-2">{step.title}</h3>
//               <p className="text-sm text-slate-400">{step.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Coming Soon */}
//       <section id="upcoming" className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-800">
//         <h2 className="text-4xl font-bold mb-12">Coming Soon</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {[
//             'Dosage Checker',
//             'Side Effects Database',
//             'Drug Allergy Alerts',
//             'Food Interactions',
//             'Supplement Checker',
//             'Medical History',
//           ].map((feature, idx) => (
//             <div key={idx} className="bg-slate-800 p-6 rounded-lg border border-slate-700">
//               <div className="text-amber-400 text-2xl mb-3">✨</div>
//               <h3 className="font-bold mb-2">{feature}</h3>
//               <span className="text-xs bg-amber-500/20 text-amber-300 px-3 py-1 rounded">Coming Soon</span>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }
// InfoSections.jsx - Light theme, enhanced responsiveness
import React from 'react';
import { CheckCircle2, Zap, Shield } from 'lucide-react';

export default function InfoSections() {
  return (
    <div className="bg-white text-gray-900">
      <section id="hero" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="space-y-6 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Check Drug <span className="text-amber-600">Interactions</span> Instantly
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl">
            AI-powered medication safety checker. Identify dangerous drug combinations before they cause harm.
          </p>
          <button
            onClick={() => document.getElementById('tool').scrollIntoView({ behavior: 'smooth' })}
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded font-bold transition text-base sm:text-lg"
          >
            Start Checking
          </button>
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">What is MedCheck?</h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
              MedCheck is an AI-powered medication interaction checker that helps you identify potentially dangerous drug combinations before they cause harm.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Using advanced AI analysis and a comprehensive medication database, MedCheck provides instant, accurate information about drug interactions with severity levels and personalized recommendations.
            </p>
          </div>
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-200">
              <div className="flex gap-4">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">Instant Analysis</h3>
                  <p className="text-gray-500">Get results in seconds, not hours</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-200">
              <div className="flex gap-4">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">AI-Powered</h3>
                  <p className="text-gray-500">Advanced LLaMA 3 analysis</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-200">
              <div className="flex gap-4">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">100% Private</h3>
                  <p className="text-gray-500">Your data never leaves your browser</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-gray-200">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">Why Choose MedCheck?</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            { title: 'Lightning Fast', desc: 'Get results instantly' },
            { title: 'Highly Accurate', desc: 'Comprehensive database' },
            { title: 'AI-Powered', desc: 'Advanced analysis engine' },
            { title: 'Severity Levels', desc: 'Clear risk assessment' },
            { title: 'Mobile Friendly', desc: 'Works on all devices' },
            { title: 'Always Available', desc: '24/7 access anytime' },
          ].map((feature, idx) => (
            <div key={idx} className="bg-gray-50 p-6 sm:p-8 rounded-lg border border-gray-200 hover:border-amber-600 transition">
              <h3 className="text-lg sm:text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-gray-200">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">How It Works</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
          {[
            { num: '1', title: 'Search', desc: 'Find medications' },
            { num: '2', title: 'Select', desc: 'Add multiple drugs' },
            { num: '3', title: 'Analyze', desc: 'AI checks interactions' },
            { num: '4', title: 'Review', desc: 'Get severity levels' },
            { num: '5', title: 'Export', desc: 'Download report' },
          ].map((step, idx) => (
            <div key={idx} className="text-center">
              <div className="bg-amber-500 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg mx-auto mb-4">
                {step.num}
              </div>
              <h3 className="font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* <section id="upcoming" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-gray-200">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">Coming Soon</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            'Dosage Checker',
            'Side Effects Database',
            'Drug Allergy Alerts',
            'Food Interactions',
            'Supplement Checker',
            'Medical History',
          ].map((feature, idx) => (
            <div key={idx} className="bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-200">
              <div className="text-amber-600 text-xl sm:text-2xl mb-3">✨</div>
              <h3 className="font-bold mb-2">{feature}</h3>
              <span className="text-xs bg-amber-100 text-amber-600 px-3 py-1 rounded">Coming Soon</span>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
}