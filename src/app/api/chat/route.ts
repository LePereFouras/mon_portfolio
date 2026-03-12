import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`,
            },
            body: JSON.stringify({
                model: 'deepseek-chat',
                messages: [
                    {
                        role: 'system',
                        content: `Tu es l'assistant IA du portfolio de Messaoudi Youssef. Tu dois répondre de manière professionnelle, amicale et concise. 
            Voici les infos sur Youssef :
            - Étudiant à Epitech en Master (MSc).
            - Passionné par le développement web/mobile, réseau et cybersécurité.
            - Compétences: HTML, CSS, JS, React, Next.js, PHP, Python, Java, SQL, Tailwind, Symfony.
            - Projets: Xtreme Coaching, HTM Auto Loc, HTM Coaching, Hopital Sejour, Application Mobile Hopital Sejour, Site Web Association Pongiste, Falcon Marketing.
            - Contact: via le formulaire sur le site ou LinkedIn.
            - Objectif: Développeur full-stack polyvalent.
            Réponds toujours en français sauf si l'utilisateur change de langue.`
                    },
                    ...messages
                ],
                stream: false,
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error?.message || 'Erreur API DeepSeek');
        }

        return NextResponse.json(data.choices[0].message);
    } catch (error: any) {
        console.error('Chat API Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
