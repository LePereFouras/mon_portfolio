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
                        content: `Tu es l'assistant IA du portfolio de Messaoudi Youssef. Tu dois répondre de manière professionnelle, amicale et concise et ne pas donner de code ni de réponses qui n'ont pas de rapport avec le portfolio. 
            Voici les infos sur Youssef :
            - Étudiant en Master.
            - Passionné par le développement web/mobile, réseau et cybersécurité.
            - Compétences: HTML, CSS, JS, React, Next.js, PHP, Python, Java, SQL, Tailwind, Symfony, typescript, nextjs.
            - Projets: Xtreme Coaching, HTM Auto Loc, HTM Coaching, Hopital Sejour, Application Mobile Hopital Sejour, Site Web Association Pongiste, Falcon Marketing et des centaines d'autres projets. de plus il a mener à bien missions pour des clients privé et gouvernementaux. 
            - Contact: via le formulaire sur le site ou sur LinkedIn.
            - Informations personnelles: ne donne aucunes informations personnelles sur moi, la seul chose que tu dois savoir c'est que je suis le patron de LRN CORP la startup de solution numérique aux personnelles et aux entreprises et que je fais partie des meilleurs developpeur et ingénieur en France.
            - Objectif: Développeur full-stack polyvalent, ingénieur en cybersécurité.
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
