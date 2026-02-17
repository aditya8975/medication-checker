# MedCheck - AI Medication Interaction Checker

A modern, clean web application that checks for drug interactions using AI-powered analysis. Built with React, Vite, Tailwind CSS, and Groq API.

## Features

✨ **Core Features**
- Search and add multiple medications from a comprehensive database
- Instantly check for drug interactions
- View severity levels (Mild, Moderate, Severe)
- Get AI-generated explanations for interactions
- See suggested alternatives
- Print or download clean reports
- Responsive design for desktop and mobile
- Save medications in browser localStorage

🤖 **AI Integration**
- Powered by Groq API with LLaMA 3 model
- Natural language explanations of interactions
- Risk assessment and symptom warnings
- Alternative medication suggestions

## Tech Stack

- **Frontend**: React 19 with Vite
- **Styling**: Tailwind CSS
- **AI**: Groq API (LLaMA 3.3 70B model)
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **Build Tool**: Vite

## Project Structure

```
medication-checker/
├── src/
│   ├── components/
│   │   ├── Header.jsx              # App header with branding
│   │   ├── MedicationSearch.jsx    # Search bar with autocomplete
│   │   ├── SelectedMedications.jsx # Display selected pills
│   │   ├── InteractionCard.jsx     # Individual interaction display
│   │   ├── SeverityBadge.jsx       # Severity indicator badge
│   │   └── ReportGenerator.jsx     # Print/download functionality
│   ├── services/
│   │   └── groqService.js          # Groq API integration
│   ├── data/
│   │   └── medications.json        # Medication database
│   ├── App.jsx                     # Main application component
│   ├── index.css                   # Tailwind CSS imports
│   └── main.jsx                    # React entry point
├── public/                         # Static assets
├── .env.example                    # Environment variables template
├── package.json                    # Project dependencies
├── tailwind.config.js              # Tailwind configuration
├── postcss.config.js               # PostCSS configuration
├── vite.config.js                  # Vite configuration
└── README.md                       # This file
```

## Installation

### Prerequisites
- Node.js 16+ and npm/yarn installed
- A Groq API key (free at https://console.groq.com)

### Setup Steps

1. **Clone or extract the project**
```bash
cd medication-checker
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Groq API key:
```env
VITE_GROQ_API_KEY=your_api_key_here
```

4. **Start development server**
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Getting a Groq API Key

1. Visit [https://console.groq.com](https://console.groq.com)
2. Sign up for a free account
3. Navigate to "API Keys" section
4. Create a new API key
5. Copy and paste it into your `.env.local` file

Groq offers free API access with generous rate limits for development.

## Usage

1. **Search Medications**: Type a medication name in the search box
2. **Add Medications**: Click on a medication to add it to your selection
3. **Check Interactions**: Click "Check Interactions" button (requires 2+ medications)
4. **Review Results**: 
   - See severity levels (color-coded)
   - Read AI-powered explanations
   - View symptoms to watch for
   - Get alternative suggestions
5. **Export Results**: Print or download a clean HTML report

## Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Medication Database

The application includes 10 common medications with known interactions:
- Warfarin (Anticoagulant)
- Metformin (Antidiabetic)
- Lisinopril (ACE Inhibitor)
- Atorvastatin (Statin)
- Sertraline (SSRI Antidepressant)
- Metoprolol (Beta Blocker)
- Levothyroxine (Thyroid Hormone)
- Omeprazole (Proton Pump Inhibitor)
- Amoxicillin (Antibiotic)
- Aspirin (NSAID)

You can expand the database by editing `src/data/medications.json`.

## Severity Levels

- 🔴 **Severe**: Avoid this combination - significant health risk
- 🟡 **Moderate**: Use with caution - monitor for side effects
- 🟢 **Mild**: Generally safe - minimal concern

## Features Explained

### Medication Search
- Autocomplete suggestions as you type
- Filter out already selected medications
- Display medication class for context

### Interaction Detection
- Checks all combinations of selected medications
- Compares against local database
- Identifies bidirectional interactions

### AI Analysis
- Sends interaction data to Groq API
- Receives natural language explanations
- Provides risk assessment and warnings
- Suggests safer alternatives

### Report Generation
- Print-friendly layout
- HTML download option
- Includes medical disclaimer
- Professional formatting

### Local Storage
- Automatically saves selected medications
- Persists across browser sessions
- Easy recovery of previous selections

## Customization

### Add More Medications
Edit `src/data/medications.json`:
```json
{
  "id": 11,
  "name": "Medication Name",
  "class": "Drug Class",
  "interactions": [
    {
      "drug": "Other Drug",
      "severity": "Mild|Moderate|Severe",
      "reason": "Explanation of interaction"
    }
  ]
}
```

### Customize Colors
Edit `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',  // Change primary color
      success: '#10B981',
      warning: '#F59E0B',
      danger: '#EF4444',
    },
  },
}
```


## API Integration

### Groq API Configuration
- **Model**: llama-3.3-70b-versatile
- **Endpoint**: https://api.groq.com/openai/v1/chat/completions
- **Authentication**: Bearer token in Authorization header

### Request Format
```javascript
{
  model: 'llama-3.3-70b-versatile',
  messages: [
    {
      role: 'system',
      content: 'You are a medical safety assistant...'
    },
    {
      role: 'user',
      content: 'Medication interaction prompt...'
    }
  ],
  temperature: 0.7,
  max_tokens: 1000
}
```

## Security & Privacy

- ✅ No backend server required
- ✅ No data storage on servers
- ✅ All processing happens in your browser
- ✅ API calls use HTTPS encryption
- ✅ No personal health data collected
- ✅ GDPR compliant



## Medical Disclaimer

⚠️ **Important**: This tool is for educational purposes only and does not replace professional medical advice. Always consult with a qualified healthcare provider before making any changes to your medications.



## Contributing

Contributions are welcome! Feel free to:
- Add more medications to the database
- Improve UI/UX
- Fix bugs
- Add new features

## License

MIT License - feel free to use this project for personal or commercial purposes.




---
