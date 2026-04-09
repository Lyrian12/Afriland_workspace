const RESEND_API_URL = "https://api.resend.com/emails";
const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ||
  process.env.APP_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function sendInviteEmail(
  email: string,
  token: string,
  spaceName: string,
  inviterName: string,
): Promise<void> {
  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    throw new Error("RESEND_API_KEY is not set.");
  }

  const inviteUrl = `${APP_URL}/space/join?token=${encodeURIComponent(token)}`;
  const logoUrl = `${APP_URL}/download.jpeg`;
  const safeSpaceName = escapeHtml(spaceName);
  const safeInviterName = escapeHtml(inviterName);
  const subject = `Vous avez été invité à rejoindre ${spaceName} sur Afriland Workspace`;

  const html = `
    <div style="margin:0;padding:24px;background-color:#000000;font-family:Arial,Helvetica,sans-serif;color:#ffffff;">
      <div style="max-width:600px;margin:0 auto;border:1px solid #1f1f1f;border-radius:14px;overflow:hidden;background-color:#0b0b0b;">
        <div style="padding:24px 20px;border-bottom:1px solid #1f1f1f;text-align:center;">
          <img src="${logoUrl}" alt="Afriland Logo" width="56" height="56" style="display:block;margin:0 auto 10px;border-radius:10px;object-fit:cover;" />
          <h1 style="margin:0;font-size:20px;line-height:1.2;font-weight:700;color:#ffffff;">Afriland Workspace</h1>
        </div>
        <div style="padding:24px 20px;">
          <p style="margin:0 0 14px 0;font-size:15px;line-height:1.6;color:#f5f5f5;">Bonjour,</p>
          <p style="margin:0 0 14px 0;font-size:15px;line-height:1.6;color:#f5f5f5;">
            <strong>${safeInviterName}</strong> vous a invité à rejoindre l'espace <strong>${safeSpaceName}</strong> sur Afriland Workspace.
          </p>
          <p style="margin:0 0 24px 0;font-size:14px;line-height:1.6;color:#b5b5b5;">
            Cliquez sur le bouton ci-dessous pour accepter l'invitation.
          </p>
          <p style="margin:0 0 24px 0;font-size:13px;line-height:1.6;color:#9a9a9a;">
            Après acceptation, ouvrez votre propre Afriland Workspace puis allez dans Afriland Space pour accéder directement à cet espace.
          </p>
          <div style="text-align:center;margin:0 0 20px 0;">
            <a href="${inviteUrl}" style="display:inline-block;padding:12px 20px;border-radius:8px;background-color:#E60000;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;">
              Accepter l'invitation
            </a>
          </div>
          <p style="margin:0;font-size:12px;line-height:1.6;color:#8c8c8c;word-break:break-all;">
            Si le bouton ne fonctionne pas, copiez ce lien :<br />
            <a href="${inviteUrl}" style="color:#E60000;text-decoration:none;">${inviteUrl}</a>
          </p>
        </div>
      </div>
    </div>
  `;

  const response = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "onboarding@resend.dev",
      to: [email],
      subject,
      html,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Failed to send invite email with Resend (${response.status}): ${errorBody}`);
  }
}
