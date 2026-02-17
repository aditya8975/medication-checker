import axios from 'axios';

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

export const analyzeInteraction = async (medications, interactions) => {
  if (!GROQ_API_KEY) {
    throw new Error('Groq API key not configured. Please set VITE_GROQ_API_KEY in your .env file.');
  }

  const medicationList = medications.map(m => m.name).join(', ');
  const interactionDetails = interactions
    .map(
      i =>
        `${i.medication1} + ${i.medication2}: ${i.severity} - ${i.reason}`
    )
    .join('\n');

  const userMessage = `A patient is taking the following medications: ${medicationList}

Known interactions:
${interactionDetails}

Please explain:
1. Why these interactions happen
2. What risks they cause
3. What symptoms to watch for
4. Whether it is serious
5. Possible safer alternatives (if appropriate)

Keep explanation simple and under 200 words. Format your response as JSON with keys: summary, risk_explanation, symptoms, seriousness, alternatives`;

  try {
    const response = await axios.post(
      GROQ_API_URL,
      {
        model: 'llama-3.3-70b-versatile',
        messages: [
          {
            role: 'system',
            content:
              'You are a medical safety assistant. Explain drug interactions in simple language for non-medical users. Be clear, concise, and responsible. Do not diagnose. Do not prescribe. Always suggest consulting a doctor. Return responses as valid JSON only.',
          },
          {
            role: 'user',
            content: userMessage,
          },
        ],
        temperature: 0.7,
        max_tokens: 1000,
      },
      {
        headers: {
          Authorization: `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const content = response.data.choices[0].message.content;

    // Try to parse JSON from the response
    try {
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }
    } catch (e) {
      console.error('Failed to parse JSON response:', e);
    }

    // If JSON parsing fails, return the raw content
    return {
      summary: content,
      risk_explanation: 'See summary above',
      symptoms: 'Consult your doctor',
      seriousness: 'Please consult a healthcare professional',
      alternatives: 'Discuss with your doctor',
    };
  } catch (error) {
    console.error('Groq API Error:', error);
    throw new Error(
      error.response?.data?.error?.message ||
        'Failed to analyze interactions. Please try again.'
    );
  }
};
