import { Resend } from "resend";

const apiKey = process.env.NEXT_PUBLIC_RESEND_API_KEY ?? "";
const resend = apiKey ? new Resend(apiKey) : null;

export async function GET() {
  return new Response("OK", { status: 200 });
}

export async function POST(request: Request) {
  if (!resend) {
    return Response.json(
      { success: false, error: "Email service not configured" },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const course = String(body.course ?? "").trim();
    const mobile = String(body.mobile ?? "").trim();
    const country = String(body.country ?? "").trim();

    if (!email) {
      return Response.json(
        { success: false, error: "Email is required" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Online Quran Pak <onboarding@resend.dev>",
      to: ["onlinequranpakinfo@gmail.com"],
      subject: "New website lead - OnlineQuranPak.com",
      html: `
        <h2>New Website Lead</h2>
        <p><strong>Name:</strong> ${name || "Not provided"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Course interested in:</strong> ${course || "Not provided"}</p>
        <p><strong>Mobile:</strong> ${mobile || "Not provided"}</p>
        <p><strong>Country:</strong> ${country || "Not provided"}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
