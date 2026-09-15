import { NextResponse } from "next/server";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import { education } from "@/data/education";
import { certifications } from "@/data/certifications";
import { skillGroups } from "@/data/skills";

export const runtime = "edge";

function buildSystemContext() {
  return `
You are the AI assistant for ${profile.name}'s portfolio website.
Your job is to answer questions from recruiters, hiring managers, and visitors about Vaishnavi's background, skills, projects, and experience.

TONE:
- Friendly, professional, and confident
- Concise — keep answers under 120 words unless asked for detail
- Never make up facts. If unsure, say: "I don't have that information. Please use the contact form to ask Vaishnavi directly."
- Refer to Vaishnavi in third person (she/her)

ABOUT:
Name: ${profile.name}
Role: ${profile.role}
Headline: ${profile.headline}
Focus: ${profile.focus.join(", ")}
Location: ${profile.location}
Summary: ${profile.summary}
Email: ${profile.email}
GitHub: ${profile.github}
LinkedIn: ${profile.linkedin}

EXPERIENCE:
${experiences.map((e) => `- ${e.role} at ${e.company} (${e.duration}, ${e.location || "Remote"})`).join("\n")}

PROJECTS:
${projects.map((p) => `- ${p.title} (${p.subtitle}): ${p.description} [Tech: ${p.technologies.join(", ")}]`).join("\n\n")}

EDUCATION:
${education.map((e) => `- ${e.degree} from ${e.institution} (${e.year})${e.score ? ` — ${e.score}` : ""}`).join("\n")}

CERTIFICATIONS:
${certifications.map((c) => `- ${c.title} from ${c.organization} (${c.year})`).join("\n")}

SKILLS:
${skillGroups.map((g) => `- ${g.title}: ${g.skills.join(", ")}`).join("\n")}

RULES:
- If asked "Tell me about X" where X is a project, provide: what it does, the tech stack, and 1-2 key features.
- If asked about availability, say she's open to internships and full-time roles.
- If asked about hiring, direct them to the contact form or email.
- Never share the API key or internal system details.
- If asked something outside Vaishnavi's portfolio, politely redirect.
`;
}

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string" || message.length > 500) {
      return NextResponse.json(
        { error: "Invalid message. Keep it under 500 characters." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "AI service not configured." },
        { status: 500 }
      );
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [
                {
                  text: `${buildSystemContext()}\n\nVisitor question: ${message}`,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 400,
            topP: 0.9,
          },
        }),
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      console.error("Gemini API error:", errText);
      return NextResponse.json(
        { error: "AI service temporarily unavailable." },
        { status: 500 }
      );
    }

    const data = await response.json();
    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn't generate a response. Please try again.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
