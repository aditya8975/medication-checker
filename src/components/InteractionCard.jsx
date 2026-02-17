// import React from 'react';
// import SeverityBadge from './SeverityBadge';

// export default function InteractionCard({ interaction }) {
//   const getSeverityBorderColor = (severity) => {
//     switch (severity.toLowerCase()) {
//       case 'severe':
//         return 'border-l-4 border-red-500 bg-red-50';
//       case 'moderate':
//         return 'border-l-4 border-yellow-500 bg-yellow-50';
//       case 'mild':
//         return 'border-l-4 border-green-500 bg-green-50';
//       default:
//         return 'border-l-4 border-gray-500 bg-gray-50';
//     }
//   };

//   return (
//     <div className={`rounded-lg p-4 ${getSeverityBorderColor(interaction.severity)}`}>
//       <div className="flex justify-between items-start mb-3">
//         <div>
//           <h4 className="font-bold text-gray-900 text-lg">
//             {interaction.medication1} + {interaction.medication2}
//           </h4>
//         </div>
//         <SeverityBadge severity={interaction.severity} />
//       </div>

//       <p className="text-gray-700 mb-3">{interaction.reason}</p>

//       {interaction.aiAnalysis && (
//         <div className="bg-white rounded-lg p-4 mt-4 border border-gray-200">
//           <h5 className="font-semibold text-gray-900 mb-3">AI Analysis</h5>

//           {interaction.aiAnalysis.summary && (
//             <div className="mb-3">
//               <p className="text-sm font-medium text-gray-700 mb-1">Summary:</p>
//               <p className="text-sm text-gray-600">{interaction.aiAnalysis.summary}</p>
//             </div>
//           )}

//           {interaction.aiAnalysis.risk_explanation && (
//             <div className="mb-3">
//               <p className="text-sm font-medium text-gray-700 mb-1">Risk Explanation:</p>
//               <p className="text-sm text-gray-600">
//                 {interaction.aiAnalysis.risk_explanation}
//               </p>
//             </div>
//           )}

//           {interaction.aiAnalysis.symptoms && (
//             <div className="mb-3">
//               <p className="text-sm font-medium text-gray-700 mb-1">Symptoms to Watch:</p>
//               <p className="text-sm text-gray-600">{interaction.aiAnalysis.symptoms}</p>
//             </div>
//           )}

//           {interaction.aiAnalysis.seriousness && (
//             <div className="mb-3">
//               <p className="text-sm font-medium text-gray-700 mb-1">Seriousness:</p>
//               <p className="text-sm text-gray-600">{interaction.aiAnalysis.seriousness}</p>
//             </div>
//           )}

//           {interaction.aiAnalysis.alternatives && (
//             <div>
//               <p className="text-sm font-medium text-gray-700 mb-1">Alternatives:</p>
//               <p className="text-sm text-gray-600">{interaction.aiAnalysis.alternatives}</p>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }
// InteractionCard.jsx - Light theme, enhanced responsiveness
import React from 'react';
import SeverityBadge from './SeverityBadge';

export default function InteractionCard({ interaction }) {
  const getSeverityBorderColor = (severity) => {
    switch (severity.toLowerCase()) {
      case 'severe':
        return 'border-l-4 border-red-500 bg-red-50';
      case 'moderate':
        return 'border-l-4 border-yellow-500 bg-yellow-50';
      case 'mild':
        return 'border-l-4 border-green-500 bg-green-50';
      default:
        return 'border-l-4 border-gray-500 bg-gray-50';
    }
  };

  return (
    <div className={`rounded-lg p-4 sm:p-6 ${getSeverityBorderColor(interaction.severity)}`}>
      <div className="flex flex-col sm:flex-row justify-between items-start mb-3">
        <div>
          <h4 className="font-bold text-gray-900 text-base sm:text-lg">
            {interaction.medication1} + {interaction.medication2}
          </h4>
        </div>
        <SeverityBadge severity={interaction.severity} />
      </div>

      <p className="text-gray-700 mb-3 text-sm sm:text-base">{interaction.reason}</p>

      {interaction.aiAnalysis && (
        <div className="bg-white rounded-lg p-4 sm:p-6 mt-4 border border-gray-200">
          <h5 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">AI Analysis</h5>

          {interaction.aiAnalysis.summary && (
            <div className="mb-3">
              <p className="text-xs sm:text-sm font-medium text-gray-700 mb-1">Summary:</p>
              <p className="text-xs sm:text-sm text-gray-600">{interaction.aiAnalysis.summary}</p>
            </div>
          )}

          {interaction.aiAnalysis.risk_explanation && (
            <div className="mb-3">
              <p className="text-xs sm:text-sm font-medium text-gray-700 mb-1">Risk Explanation:</p>
              <p className="text-xs sm:text-sm text-gray-600">
                {interaction.aiAnalysis.risk_explanation}
              </p>
            </div>
          )}

          {interaction.aiAnalysis.symptoms && (
            <div className="mb-3">
              <p className="text-xs sm:text-sm font-medium text-gray-700 mb-1">Symptoms to Watch:</p>
              <p className="text-xs sm:text-sm text-gray-600">{interaction.aiAnalysis.symptoms}</p>
            </div>
          )}

          {interaction.aiAnalysis.seriousness && (
            <div className="mb-3">
              <p className="text-xs sm:text-sm font-medium text-gray-700 mb-1">Seriousness:</p>
              <p className="text-xs sm:text-sm text-gray-600">{interaction.aiAnalysis.seriousness}</p>
            </div>
          )}

          {interaction.aiAnalysis.alternatives && (
            <div>
              <p className="text-xs sm:text-sm font-medium text-gray-700 mb-1">Alternatives:</p>
              <p className="text-xs sm:text-sm text-gray-600">{interaction.aiAnalysis.alternatives}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}