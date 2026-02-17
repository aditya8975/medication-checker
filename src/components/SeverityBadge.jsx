// import React from 'react';
// import { AlertCircle, AlertTriangle, Info } from 'lucide-react';

// export default function SeverityBadge({ severity }) {
//   const getSeverityStyles = (sev) => {
//     switch (sev.toLowerCase()) {
//       case 'severe':
//         return {
//           bg: 'bg-red-100',
//           text: 'text-red-800',
//           border: 'border-red-300',
//           icon: AlertTriangle,
//         };
//       case 'moderate':
//         return {
//           bg: 'bg-yellow-100',
//           text: 'text-yellow-800',
//           border: 'border-yellow-300',
//           icon: AlertCircle,
//         };
//       case 'mild':
//         return {
//           bg: 'bg-green-100',
//           text: 'text-green-800',
//           border: 'border-green-300',
//           icon: Info,
//         };
//       default:
//         return {
//           bg: 'bg-gray-100',
//           text: 'text-gray-800',
//           border: 'border-gray-300',
//           icon: Info,
//         };
//     }
//   };

//   const styles = getSeverityStyles(severity);
//   const Icon = styles.icon;

//   return (
//     <span
//       className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold border ${styles.bg} ${styles.text} ${styles.border}`}
//     >
//       <Icon className="w-4 h-4" />
//       {severity}
//     </span>
//   );
// }
// SeverityBadge.jsx - Light theme, enhanced responsiveness
import React from 'react';
import { AlertCircle, AlertTriangle, Info } from 'lucide-react';

export default function SeverityBadge({ severity }) {
  const getSeverityStyles = (sev) => {
    switch (sev.toLowerCase()) {
      case 'severe':
        return {
          bg: 'bg-red-100',
          text: 'text-red-800',
          border: 'border-red-300',
          icon: AlertTriangle,
        };
      case 'moderate':
        return {
          bg: 'bg-yellow-100',
          text: 'text-yellow-800',
          border: 'border-yellow-300',
          icon: AlertCircle,
        };
      case 'mild':
        return {
          bg: 'bg-green-100',
          text: 'text-green-800',
          border: 'border-green-300',
          icon: Info,
        };
      default:
        return {
          bg: 'bg-gray-100',
          text: 'text-gray-800',
          border: 'border-gray-300',
          icon: Info,
        };
    }
  };

  const styles = getSeverityStyles(severity);
  const Icon = styles.icon;

  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold border ${styles.bg} ${styles.text} ${styles.border}`}
    >
      <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
      {severity}
    </span>
  );
}