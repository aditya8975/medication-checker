// import React, { useState, useEffect } from 'react';
// import Header from './components/Header';
// import InfoSections from './components/InfoSections';
// import ToolSection from './components/ToolSection';
// import Footer from './components/Footer';
// import { analyzeInteraction } from './services/groqService';
// import medicationsData from './data/medications.json';

// function App() {
//   const [selectedMedications, setSelectedMedications] = useState([]);
//   const [interactions, setInteractions] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [showResults, setShowResults] = useState(false);

//   useEffect(() => {
//     const saved = localStorage.getItem('selectedMedications');
//     if (saved) {
//       try {
//         setSelectedMedications(JSON.parse(saved));
//       } catch (e) {
//         console.error('Failed to load saved medications:', e);
//       }
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('selectedMedications', JSON.stringify(selectedMedications));
//   }, [selectedMedications]);

//   const handleAddMedication = (medication) => {
//     setSelectedMedications([...selectedMedications, medication]);
//     setError(null);
//   };

//   const handleRemoveMedication = (medId) => {
//     setSelectedMedications(selectedMedications.filter(m => m.id !== medId));
//   };

//   const handleClearAll = () => {
//     setSelectedMedications([]);
//     setInteractions([]);
//     setShowResults(false);
//   };

//   const findInteractions = () => {
//     if (selectedMedications.length < 2) {
//       setError('Please select at least 2 medications to check for interactions.');
//       return;
//     }

//     const foundInteractions = [];

//     for (let i = 0; i < selectedMedications.length; i++) {
//       for (let j = i + 1; j < selectedMedications.length; j++) {
//         const med1 = selectedMedications[i];
//         const med2 = selectedMedications[j];

//         const med1Data = medicationsData.find(m => m.id === med1.id);
//         if (med1Data && med1Data.interactions) {
//           const interaction = med1Data.interactions.find(
//             inter => inter.drug === med2.name
//           );
//           if (interaction) {
//             foundInteractions.push({
//               medication1: med1.name,
//               medication2: med2.name,
//               severity: interaction.severity,
//               reason: interaction.reason,
//               aiAnalysis: null,
//             });
//           }
//         }

//         const med2Data = medicationsData.find(m => m.id === med2.id);
//         if (med2Data && med2Data.interactions) {
//           const interaction = med2Data.interactions.find(
//             inter => inter.drug === med1.name
//           );
//           if (
//             interaction &&
//             !foundInteractions.some(
//               fi =>
//                 (fi.medication1 === med2.name && fi.medication2 === med1.name) ||
//                 (fi.medication1 === med1.name && fi.medication2 === med2.name)
//             )
//           ) {
//             foundInteractions.push({
//               medication1: med2.name,
//               medication2: med1.name,
//               severity: interaction.severity,
//               reason: interaction.reason,
//               aiAnalysis: null,
//             });
//           }
//         }
//       }
//     }

//     setInteractions(foundInteractions);
//     setShowResults(true);
//     setError(null);

//     if (foundInteractions.length > 0) {
//       getAIAnalysis(foundInteractions);
//     }
//   };

//   const getAIAnalysis = async (foundInteractions) => {
//     setLoading(true);
//     try {
//       const analysisResults = await analyzeInteraction(
//         selectedMedications,
//         foundInteractions
//       );

//       const updatedInteractions = foundInteractions.map(inter => ({
//         ...inter,
//         aiAnalysis: analysisResults,
//       }));

//       setInteractions(updatedInteractions);
//     } catch (err) {
//       console.error('Error getting AI analysis:', err);
//       setError(
//         err.message ||
//           'Failed to get AI analysis. Please check your API key and try again.'
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       <Header />
//       <InfoSections />
//       <ToolSection
//         selectedMedications={selectedMedications}
//         interactions={interactions}
//         loading={loading}
//         error={error}
//         showResults={showResults}
//         onAddMedication={handleAddMedication}
//         onRemoveMedication={handleRemoveMedication}
//         onClearAll={handleClearAll}
//         onCheckInteractions={findInteractions}
//       />
//       <Footer />
//     </div>
//   );
// }

// export default App;
// App.jsx - Light theme, enhanced responsiveness
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import InfoSections from './components/InfoSections';
import ToolSection from './components/ToolSection';
import Footer from './components/Footer';
import { analyzeInteraction } from './services/groqService';
import medicationsData from './data/medications.json';

function App() {
  const [selectedMedications, setSelectedMedications] = useState([]);
  const [interactions, setInteractions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('selectedMedications');
    if (saved) {
      try { setSelectedMedications(JSON.parse(saved)); } catch (e) {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedMedications', JSON.stringify(selectedMedications));
  }, [selectedMedications]);

  const handleAddMedication = (medication) => {
    setSelectedMedications([...selectedMedications, medication]);
    setError(null);
  };

  const handleRemoveMedication = (medId) => {
    setSelectedMedications(selectedMedications.filter(m => m.id !== medId));
  };

  const handleClearAll = () => {
    setSelectedMedications([]);
    setInteractions([]);
    setShowResults(false);
  };

  const findInteractions = () => {
    if (selectedMedications.length < 2) {
      setError('Please select at least 2 medications to check for interactions.');
      return;
    }
    const foundInteractions = [];
    for (let i = 0; i < selectedMedications.length; i++) {
      for (let j = i + 1; j < selectedMedications.length; j++) {
        const med1 = selectedMedications[i];
        const med2 = selectedMedications[j];
        const med1Data = medicationsData.find(m => m.id === med1.id);
        if (med1Data && med1Data.interactions) {
          const interaction = med1Data.interactions.find(inter => inter.drug === med2.name);
          if (interaction) {
            foundInteractions.push({
              medication1: med1.name,
              medication2: med2.name,
              severity: interaction.severity,
              reason: interaction.reason,
              aiAnalysis: null,
            });
          }
        }
        const med2Data = medicationsData.find(m => m.id === med2.id);
        if (med2Data && med2Data.interactions) {
          const interaction = med2Data.interactions.find(inter => inter.drug === med1.name);
          if (interaction && !foundInteractions.some(fi => 
            (fi.medication1 === med2.name && fi.medication2 === med1.name) ||
            (fi.medication1 === med1.name && fi.medication2 === med2.name)
          )) {
            foundInteractions.push({
              medication1: med2.name,
              medication2: med1.name,
              severity: interaction.severity,
              reason: interaction.reason,
              aiAnalysis: null,
            });
          }
        }
      }
    }
    setInteractions(foundInteractions);
    setShowResults(true);
    setError(null);
    if (foundInteractions.length > 0) {
      getAIAnalysis(foundInteractions);
    }
  };

  const getAIAnalysis = async (foundInteractions) => {
    setLoading(true);
    try {
      const analysisResults = await analyzeInteraction(selectedMedications, foundInteractions);
      const updatedInteractions = foundInteractions.map(inter => ({
        ...inter,
        aiAnalysis: analysisResults,
      }));
      setInteractions(updatedInteractions);
    } catch (err) {
      console.error('Error getting AI analysis:', err);
      setError(err.message || 'Failed to get AI analysis.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* <InfoSections /> */}
      <ToolSection
        selectedMedications={selectedMedications}
        interactions={interactions}
        loading={loading}
        error={error}
        showResults={showResults}
        onAddMedication={handleAddMedication}
        onRemoveMedication={handleRemoveMedication}
        onClearAll={handleClearAll}
        onCheckInteractions={findInteractions}
      />
      <Footer />
    </div>
  );
}

export default App;