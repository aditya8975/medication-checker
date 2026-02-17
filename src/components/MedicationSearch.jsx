// import React, { useState, useEffect } from 'react';
// import { Search, X } from 'lucide-react';
// import medicationsData from '../data/medications.json';

// export default function MedicationSearch({ onAdd, selectedMedications }) {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [suggestions, setSuggestions] = useState([]);
//   const [showSuggestions, setShowSuggestions] = useState(false);

//   useEffect(() => {
//     if (searchTerm.trim() === '') {
//       setSuggestions([]);
//       setShowSuggestions(false);
//       return;
//     }

//     const filtered = medicationsData.filter(
//       med =>
//         med.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
//         !selectedMedications.some(s => s.id === med.id)
//     );

//     setSuggestions(filtered);
//     setShowSuggestions(true);
//   }, [searchTerm, selectedMedications]);

//   const handleSelect = (medication) => {
//     onAdd(medication);
//     setSearchTerm('');
//     setSuggestions([]);
//     setShowSuggestions(false);
//   };

//   return (
//     <div className="relative">
//       <div className="relative">
//         <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
//         <input
//           type="text"
//           placeholder="Search medications (e.g., Aspirin, Warfarin)..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           onFocus={() => searchTerm && setShowSuggestions(true)}
//           className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//         />
//       </div>

//       {showSuggestions && suggestions.length > 0 && (
//         <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-64 overflow-y-auto">
//           {suggestions.map((med) => (
//             <button
//               key={med.id}
//               onClick={() => handleSelect(med)}
//               className="w-full text-left px-4 py-3 hover:bg-blue-50 border-b border-gray-200 last:border-b-0 transition"
//             >
//               <div className="font-semibold text-gray-900">{med.name}</div>
//               <div className="text-sm text-gray-600">{med.class}</div>
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
// MedicationSearch.jsx - Light theme, enhanced responsiveness
import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import medicationsData from '../data/medications.json';

export default function MedicationSearch({ onAdd, selectedMedications }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    const filtered = medicationsData.filter(
      med =>
        med.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !selectedMedications.some(s => s.id === med.id)
    );

    setSuggestions(filtered);
    setShowSuggestions(true);
  }, [searchTerm, selectedMedications]);

  const handleSelect = (medication) => {
    onAdd(medication);
    setSearchTerm('');
    setSuggestions([]);
    setShowSuggestions(false);
  };

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search medications (e.g., Aspirin, Warfarin)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => searchTerm && setShowSuggestions(true)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm sm:text-base"
        />
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-64 overflow-y-auto">
          {suggestions.map((med) => (
            <button
              key={med.id}
              onClick={() => handleSelect(med)}
              className="w-full text-left px-4 py-3 hover:bg-amber-50 border-b border-gray-200 last:border-b-0 transition text-sm sm:text-base"
            >
              <div className="font-semibold text-gray-900">{med.name}</div>
              <div className="text-sm text-gray-600">{med.class}</div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}