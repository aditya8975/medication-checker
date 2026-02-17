// import React from 'react';
// import { X } from 'lucide-react';

// export default function SelectedMedications({ medications, onRemove, onClearAll }) {
//   if (medications.length === 0) {
//     return null;
//   }

//   return (
//     <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
//       <div className="flex justify-between items-center mb-3">
//         <h3 className="font-semibold text-gray-900">
//           Selected Medications ({medications.length})
//         </h3>
//         {medications.length > 1 && (
//           <button
//             onClick={onClearAll}
//             className="text-sm text-red-600 hover:text-red-700 font-medium"
//           >
//             Clear All
//           </button>
//         )}
//       </div>

//       <div className="flex flex-wrap gap-2">
//         {medications.map((med) => (
//           <div
//             key={med.id}
//             className="bg-white border border-blue-300 rounded-full px-4 py-2 flex items-center gap-2 shadow-sm"
//           >
//             <span className="font-medium text-gray-900">{med.name}</span>
//             <button
//               onClick={() => onRemove(med.id)}
//               className="text-gray-500 hover:text-red-600 transition"
//               title="Remove medication"
//             >
//               <X className="w-4 h-4" />
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// SelectedMedications.jsx - Light theme, enhanced responsiveness
import React from 'react';
import { X } from 'lucide-react';

export default function SelectedMedications({ medications, onRemove, onClearAll }) {
  if (medications.length === 0) {
    return null;
  }

  return (
    <div className="bg-amber-50 rounded-lg p-4 sm:p-6 border border-amber-200">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
          Selected Medications ({medications.length})
        </h3>
        {medications.length > 1 && (
          <button
            onClick={onClearAll}
            className="text-sm text-red-600 hover:text-red-700 font-medium"
          >
            Clear All
          </button>
        )}
      </div>

      <div className="flex flex-wrap gap-2 sm:gap-3">
        {medications.map((med) => (
          <div
            key={med.id}
            className="bg-white border border-amber-300 rounded-full px-3 py-1 sm:px-4 sm:py-2 flex items-center gap-2 shadow-sm text-sm sm:text-base"
          >
            <span className="font-medium text-gray-900">{med.name}</span>
            <button
              onClick={() => onRemove(med.id)}
              className="text-gray-500 hover:text-red-600 transition"
              title="Remove medication"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}