import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, phone, project, message } = await request.json();

    // Email validation
    if (!firstName || !lastName || !email || !project) {
      return NextResponse.json(
        { error: 'Champs obligatoires manquants' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: `"Flash Services" <${process.env.SMTP_USER}>`,
      to: 'contact@flashservices78.fr',
      subject: 'Nouveau message de contact - Flash Services',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Nouveau message de contact</h2>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nom:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Téléphone:</strong> ${phone || 'Non fourni'}</p>
            <p><strong>Type de projet:</strong> ${project}</p>
            <p><strong>Message:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 5px;">${message || 'Aucun message'}</p>
          </div>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #e2e8f0;">
          <p style="color: #64748b; font-size: 14px;">
            Cet email a été envoyé depuis le formulaire de contact du site Flash Services.
          </p>
        </div>
      `,
      replyTo: email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Message envoyé avec succès' },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    );
  }
}
