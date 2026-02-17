// import React from 'react';
// import { AlertCircle } from 'lucide-react';

// export default function Footer() {
//   return (
//     <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
//       <div className="max-w-6xl mx-auto px-6 py-12">
//         {/* Disclaimer */}
//         <div className="bg-red-900/20 border border-red-800 rounded-lg p-6 mb-8">
//           <div className="flex gap-4">
//             <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
//             <div>
//               <h3 className="font-bold text-white mb-2">Medical Disclaimer</h3>
//               <p className="text-sm">
//                 This tool is for educational purposes only and does not replace professional medical advice. Always consult with a qualified healthcare provider before making any changes to your medications.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Bottom */}
//         <div className="text-center text-sm">
//           <p>© 2026 MedCheck. All rights reserved. Powered by Groq AI.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }
// Footer.jsx - Light theme, enhanced responsiveness
import React from 'react';
import { AlertCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-600 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="flex gap-4">
            <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Medical Disclaimer</h3>
              <p className="text-xs sm:text-sm">
                This tool is for educational purposes only and does not replace professional medical advice. Always consult with a qualified healthcare provider before making any changes to your medications.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center text-xs sm:text-sm">
          <p>© 2026 MedCheck.</p>
        </div>
      </div>
    </footer>
  );
}