import { GoogleGenAI, GenerativeModel } from "@google/genai";
import { MOCK_PRODUCTS } from '../constants';

// Initialize the client
// In a real app, ensure process.env.API_KEY is set. 
// For this demo code generation, we assume the environment is set up correctly as per instructions.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

// Construct a context string from the product catalog
const productContext = MOCK_PRODUCTS.map(p => 
  `- ${p.name} by ${p.brand} (${p.category}): ₹${p.price}. ${p.description}`
).join('\n');

const SYSTEM_INSTRUCTION = `You are a helpful and knowledgeable personal shopping assistant for LuxeMarket, an e-commerce store. 
Your goal is to help users find products, suggest outfits, and answer questions about our catalog.
The catalog contains brands like Nike, Adidas, Calvin Klein, and US Polo Assn.
Transactions are in INR (₹).

Here is our current product catalog:
${productContext}

If a user asks for something we don't have, suggest the closest alternative from the catalog.
Keep responses concise, friendly, and focused on sales conversion.
Do not invent products that are not in the catalog.`;

export const getShoppingAssistance = async (userMessage: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        thinkingConfig: { thinkingBudget: 0 }, // optimize for speed
      }
    });

    return response.text || "I'm sorry, I couldn't process that request at the moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently having trouble connecting to the stylist network. Please try again later.";
  }
};