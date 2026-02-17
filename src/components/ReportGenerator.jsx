// import React from 'react';
// import { Download, Printer } from 'lucide-react';

// export default function ReportGenerator({ medications, interactions }) {
//   const handlePrint = () => {
//     window.print();
//   };

//   const handleDownload = () => {
//     const reportContent = generateReportHTML();
//     const element = document.createElement('a');
//     element.setAttribute(
//       'href',
//       'data:text/html;charset=utf-8,' + encodeURIComponent(reportContent)
//     );
//     element.setAttribute('download', 'medication-interaction-report.html');
//     element.style.display = 'none';
//     document.body.appendChild(element);
//     element.click();
//     document.body.removeChild(element);
//   };

//   const generateReportHTML = () => {
//     return `
//       <!DOCTYPE html>
//       <html>
//       <head>
//         <title>Medication Interaction Report</title>
//         <style>
//           body { font-family: Arial, sans-serif; margin: 20px; }
//           h1 { color: #1e40af; }
//           h2 { color: #3b82f6; margin-top: 20px; }
//           .medication { background: #f0f9ff; padding: 10px; margin: 5px 0; border-radius: 5px; }
//           .interaction { border-left: 4px solid #3b82f6; padding: 15px; margin: 10px 0; background: #f8fafc; }
//           .severity { font-weight: bold; }
//           .severe { color: #dc2626; }
//           .moderate { color: #f59e0b; }
//           .mild { color: #10b981; }
//           .disclaimer { background: #fef3c7; padding: 15px; border-radius: 5px; margin-top: 20px; }
//           @media print { body { margin: 0; } }
//         </style>
//       </head>
//       <body>
//         <h1>Medication Interaction Report</h1>
//         <p>Generated on: ${new Date().toLocaleString()}</p>
        
//         <h2>Medications Checked:</h2>
//         <div>
//           ${medications.map(m => `<div class="medication">${m.name} (${m.class})</div>`).join('')}
//         </div>
        
//         <h2>Interactions Found:</h2>
//         ${
//           interactions.length > 0
//             ? interactions
//                 .map(
//                   i => `
//                 <div class="interaction">
//                   <h3>${i.medication1} + ${i.medication2}</h3>
//                   <p><span class="severity ${i.severity.toLowerCase()}">${i.severity}</span></p>
//                   <p><strong>Reason:</strong> ${i.reason}</p>
//                 </div>
//               `
//                 )
//                 .join('')
//             : '<p>No interactions found.</p>'
//         }
        
//         <div class="disclaimer">
//           <strong>⚠️ Medical Disclaimer:</strong><br/>
//           This tool is for educational purposes only and does not replace professional medical advice. 
//           Always consult with a qualified healthcare provider before making any changes to your medications.
//         </div>
//       </body>
//       </html>
//     `;
//   };

//   return (
//     <div className="flex gap-3">
//       <button
//         onClick={handlePrint}
//         className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//       >
//         <Printer className="w-4 h-4" />
//         Print Report
//       </button>
//       <button
//         onClick={handleDownload}
//         className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
//       >
//         <Download className="w-4 h-4" />
//         Download Report
//       </button>
//     </div>
//   );
// }
// ReportGenerator.jsx - Light theme, enhanced responsiveness
import React from 'react';
import { Download, Printer } from 'lucide-react';

export default function ReportGenerator({ medications, interactions }) {
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const reportContent = generateReportHTML();
    const element = document.createElement('a');
    element.setAttribute(
      'href',
      'data:text/html;charset=utf-8,' + encodeURIComponent(reportContent)
    );
    element.setAttribute('download', 'medication-interaction-report.html');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const generateReportHTML = () => {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Medication Interaction Report</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 20px; background: #fff; color: #333; }
          h1 { color: #1e40af; }
          h2 { color: #3b82f6; margin-top: 20px; }
          .medication { background: #f0f9ff; padding: 10px; margin: 5px 0; border-radius: 5px; }
          .interaction { border-left: 4px solid #3b82f6; padding: 15px; margin: 10px 0; background: #f8fafc; }
          .severity { font-weight: bold; }
          .severe { color: #dc2626; }
          .moderate { color: #f59e0b; }
          .mild { color: #10b981; }
          .disclaimer { background: #fef3c7; padding: 15px; border-radius: 5px; margin-top: 20px; }
          @media print { body { margin: 0; } }
        </style>
      </head>
      <body>
        <h1>Medication Interaction Report</h1>
        <p>Generated on: ${new Date().toLocaleString()}</p>
        
        <h2>Medications Checked:</h2>
        <div>
          ${medications.map(m => `<div class="medication">${m.name} (${m.class})</div>`).join('')}
        </div>
        
        <h2>Interactions Found:</h2>
        ${
          interactions.length > 0
            ? interactions
                .map(
                  i => `
                <div class="interaction">
                  <h3>${i.medication1} + ${i.medication2}</h3>
                  <p><span class="severity ${i.severity.toLowerCase()}">${i.severity}</span></p>
                  <p><strong>Reason:</strong> ${i.reason}</p>
                </div>
              `
                )
                .join('')
            : '<p>No interactions found.</p>'
        }
        
        <div class="disclaimer">
          <strong>⚠️ Medical Disclaimer:</strong><br/>
          This tool is for educational purposes only and does not replace professional medical advice. 
          Always consult with a qualified healthcare provider before making any changes to your medications.
        </div>
      </body>
      </html>
    `;
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <button
        onClick={handlePrint}
        className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-sm sm:text-base"
      >
        <Printer className="w-4 h-4" />
        Print Report
      </button>
      <button
        onClick={handleDownload}
        className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition text-sm sm:text-base"
      >
        <Download className="w-4 h-4" />
        Download Report
      </button>
    </div>
  );
}