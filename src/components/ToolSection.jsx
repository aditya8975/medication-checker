// import React from 'react';
// import { AlertCircle, Loader } from 'lucide-react';
// import MedicationSearch from './MedicationSearch';
// import SelectedMedications from './SelectedMedications';
// import InteractionCard from './InteractionCard';
// import ReportGenerator from './ReportGenerator';

// export default function ToolSection({
//   selectedMedications,
//   interactions,
//   loading,
//   error,
//   showResults,
//   onAddMedication,
//   onRemoveMedication,
//   onClearAll,
//   onCheckInteractions,
// }) {
//   return (
//     <section id="tool" className="bg-white">
//       <div className="max-w-6xl mx-auto px-6 py-20">
//         <h2 className="text-4xl font-bold text-gray-900 mb-12">Check Interactions</h2>

//         <div className="grid md:grid-cols-3 gap-8">
//           {/* Main Content */}
//           <div className="md:col-span-2 space-y-6">
//             {/* Search */}
//             <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
//               <h3 className="text-xl font-bold text-gray-900 mb-6">Search Medications</h3>
//               <MedicationSearch
//                 onAdd={onAddMedication}
//                 selectedMedications={selectedMedications}
//               />
//             </div>

//             {/* Selected */}
//             {selectedMedications.length > 0 && (
//               <SelectedMedications
//                 medications={selectedMedications}
//                 onRemove={onRemoveMedication}
//                 onClearAll={onClearAll}
//               />
//             )}

//             {/* Check Button */}
//             {selectedMedications.length >= 2 && (
//               <button
//                 onClick={onCheckInteractions}
//                 disabled={loading}
//                 className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-gray-400 text-slate-900 py-4 rounded font-bold transition flex items-center justify-center gap-2 text-lg"
//               >
//                 {loading ? (
//                   <>
//                     <Loader className="w-6 h-6 animate-spin" />
//                     Analyzing...
//                   </>
//                 ) : (
//                   'Check Interactions'
//                 )}
//               </button>
//             )}

//             {/* Error */}
//             {error && (
//               <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex gap-3">
//                 <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
//                 <p className="text-red-700">{error}</p>
//               </div>
//             )}

//             {/* Results */}
//             {showResults && (
//               <div className="space-y-6">
//                 <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
//                   <h3 className="text-xl font-bold text-gray-900 mb-6">Results</h3>

//                   {interactions.length === 0 ? (
//                     <div className="bg-green-50 border border-green-200 rounded-lg p-6">
//                       <p className="text-green-800 font-semibold">
//                         ✓ No interactions detected
//                       </p>
//                       <p className="text-green-700 text-sm mt-2">
//                         Always consult your doctor before combining medications.
//                       </p>
//                     </div>
//                   ) : (
//                     <div className="space-y-4">
//                       {interactions.map((interaction, idx) => (
//                         <InteractionCard key={idx} interaction={interaction} />
//                       ))}
//                     </div>
//                   )}
//                 </div>

//                 {/* Export */}
//                 <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
//                   <h3 className="text-lg font-bold text-gray-900 mb-4">Export</h3>
//                   <ReportGenerator
//                     medications={selectedMedications}
//                     interactions={interactions}
//                   />
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Sidebar */}
//           <div className="md:col-span-1">
//             <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 sticky top-24">
//               <h3 className="text-lg font-bold text-gray-900 mb-6">Severity Levels</h3>
//               <div className="space-y-4 text-sm">
//                 <div className="flex items-center gap-3">
//                   <div className="w-4 h-4 bg-red-500 rounded-full"></div>
//                   <span><strong>Severe</strong> - Avoid</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
//                   <span><strong>Moderate</strong> - Caution</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <div className="w-4 h-4 bg-green-500 rounded-full"></div>
//                   <span><strong>Mild</strong> - Safe</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// ToolSection.jsx - Light theme, enhanced responsiveness
import React from 'react';
import { AlertCircle, Loader } from 'lucide-react';
import MedicationSearch from './MedicationSearch';
import SelectedMedications from './SelectedMedications';
import InteractionCard from './InteractionCard';
import ReportGenerator from './ReportGenerator';

export default function ToolSection({
  selectedMedications,
  interactions,
  loading,
  error,
  showResults,
  onAddMedication,
  onRemoveMedication,
  onClearAll,
  onCheckInteractions,
}) {
  return (
    <section id="tool" className="bg-gray-50 py-20 sm:py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 border-2 border-dashed border-gray-300 rounded-xl bg-white shadow-lg p-8 sm:p-12 lg:p-16 space-y-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">Check Interactions</h2>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <div className="md:col-span-2 space-y-8">
            <div className="bg-gray-50 rounded-lg p-8 sm:p-10 border border-gray-200">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">Search Medications</h3>
              <MedicationSearch
                onAdd={onAddMedication}
                selectedMedications={selectedMedications}
              />
            </div>

            {selectedMedications.length > 0 && (
              <SelectedMedications
                medications={selectedMedications}
                onRemove={onRemoveMedication}
                onClearAll={onClearAll}
              />
            )}

            {selectedMedications.length >= 2 && (
              <button
                onClick={onCheckInteractions}
                disabled={loading}
                className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-gray-400 text-white py-4 sm:py-5 rounded-lg font-bold transition flex items-center justify-center gap-2 text-lg sm:text-xl"
              >
                {loading ? (
                  <>
                    <Loader className="w-6 h-6 sm:w-7 sm:h-7 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  'Check Interactions'
                )}
              </button>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 flex gap-4">
                <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-red-700 text-base sm:text-lg">{error}</p>
              </div>
            )}

            {showResults && (
              <div className="space-y-8">
                <div className="bg-gray-50 rounded-lg p-8 sm:p-10 border border-gray-200">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">Results</h3>

                  {interactions.length === 0 ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 sm:p-8">
                      <p className="text-green-800 font-semibold text-base sm:text-lg">
                        ✓ No interactions detected
                      </p>
                      <p className="text-green-700 text-sm sm:text-base mt-3">
                        Always consult your doctor before combining medications.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {interactions.map((interaction, idx) => (
                        <InteractionCard key={idx} interaction={interaction} />
                      ))}
                    </div>
                  )}
                </div>

                <div className="bg-gray-50 rounded-lg p-8 sm:p-10 border border-gray-200">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Export</h3>
                  <ReportGenerator
                    medications={selectedMedications}
                    interactions={interactions}
                  />
                </div>
              </div>
            )}
          </div>

          <div className="md:col-span-1">
            <div className="bg-gray-50 rounded-lg p-8 sm:p-10 border border-gray-200 sticky top-28">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">Severity Levels</h3>
              <div className="space-y-5 text-sm sm:text-base">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-red-500 rounded-full"></div>
                  <span><strong>Severe</strong> - Avoid</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-yellow-500 rounded-full"></div>
                  <span><strong>Moderate</strong> - Caution</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full"></div>
                  <span><strong>Mild</strong> - Safe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}