import { Resend } from "resend";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: "Service d'envoi non configuré." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: "Tous les champs sont obligatoires." },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(String(name));
    const safeEmail = escapeHtml(String(email));
    const safeMessage = escapeHtml(String(message)).replace(/\n/g, "<br />");

    const { data, error } = await resend.emails.send({
      from: "Portfolio Fabrice BOMISSO <onboarding@resend.dev>",
      to: ["fabricebtibo@gmail.com"],
      replyTo: String(email),
      subject: `Nouveau message de ${String(name)}`,
      html: `
        <h2>Nouveau message depuis votre portfolio</h2>

        <p><strong>Nom :</strong> ${safeName}</p>

        <p><strong>Email :</strong> ${safeEmail}</p>

        <p><strong>Message :</strong></p>

        <p>${safeMessage}</p>
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