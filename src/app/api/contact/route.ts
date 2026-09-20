import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: "Tous les champs sont obligatoires." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Fabrice BOMISSO <onboarding@resend.dev>",
      to: ["fabricebtibo@gmail.com"],
      replyTo: email,
      subject: `Nouveau message de ${name}`,
      html: `
        <h2>Nouveau message depuis votre portfolio</h2>

        <p><strong>Nom :</strong> ${name}</p>

        <p><strong>Email :</strong> ${email}</p>

        <p><strong>Message :</strong></p>

        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("Erreur Resend :", error);

      return Response.json(
        { error: "Impossible d'envoyer le message." },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Erreur API Contact :", error);

    return Response.json(
      { error: "Une erreur est survenue." },
      { status: 500 }
    );
  }
}
