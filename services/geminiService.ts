
import { GoogleGenAI, Type } from "@google/genai";
import { TabooCard, Language } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const langNames: Record<Language, string> = {
  ar: "Arabic (العربية)",
  en: "English",
  zh: "Chinese (中文)"
};

export async function generateTabooCards(category: string, lang: Language, count: number = 10): Promise<TabooCard[]> {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Generate ${count} Taboo game cards in the category: ${category}. 
    Language: ${langNames[lang]}.
    Each card must have a "target" word and 5 "forbidden" words related to it.
    Output MUST be in the specified language.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            target: { type: Type.STRING },
            forbidden: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING }
            }
          },
          required: ["target", "forbidden"]
        }
      }
    }
  });

  try {
    const text = response.text?.trim();
    if (!text) return [];
    return JSON.parse(text);
  } catch (error) {
    console.error("Failed to parse Gemini response", error);
    return [];
  }
}
