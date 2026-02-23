# MedCheck - AI Medication Interaction Checker

A clean web app that checks for drug interactions using AI-powered analysis. Built with React, Vite, Tailwind CSS, and Groq API.

---

## Features

- Search and add multiple medications
- Instant interaction checking with severity levels (Mild, Moderate, Severe)
- AI-generated explanations, risk warnings, and alternative suggestions
- Print / download clean reports
- Saves medications in browser localStorage
- Fully responsive

---

## Tech Stack

- **React 19** + **Vite** + **Tailwind CSS**
- **Groq API** (LLaMA 3.3 70B) — AI analysis
- **Lucide React** — Icons

---

## Getting Started

```bash
cd medication-checker
npm install
cp .env.example .env.local
npm run dev
```

App runs at `http://localhost:5173`

### API Key

Get a free key at https://console.groq.com and add it to `.env.local`:

```
VITE_GROQ_API_KEY=your_api_key_here
```

---

## Usage

1. Search and add 2+ medications
2. Click **Check Interactions**
3. Review severity levels, AI explanations, and suggested alternatives
4. Print or download the report

---

## Severity Levels

- 🔴 **Severe** — Avoid this combination
- 🟡 **Moderate** — Use with caution
- 🟢 **Mild** — Generally safe

---

## Adding More Medications

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
      "reason": "Explanation"
    }
  ]
}
```

---

## Disclaimer

> This tool is for **educational purposes only** and does not replace professional medical advice. Always consult a qualified healthcare provider before changing medications.

---

## License

MIT License
