import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';
import { rateLimit } from '@/lib/rate-limit';
import { escapeHtml } from '@/lib/html-escape';

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  const realIp = request.headers.get('x-real-ip');
  if (realIp) return realIp;
  return '127.0.0.1';
}

export async function POST(request: NextRequest) {
  // ── Rate limiting ──
  const ip = getClientIp(request);
  const rl = rateLimit(ip, { maxRequests: 3, windowMs: 60_000 });
  if (!rl.ok) {
    return NextResponse.json(
      { error: 'Trop de requêtes. Veuillez réessayer dans une minute.' },
      { status: 429 }
    );
  }

  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      typeBien,
      surface,
      services,
      budget,
      delai,
      description,
      terms
    } = await request.json();

    // Email validation
    if (!firstName || !lastName || !email || !phone || !address || !services || !terms) {
      return NextResponse.json(
        { error: 'Champs obligatoires manquants' },
        { status: 400 }
      );
    }

    // Sanitize all user input
    const safe = {
      firstName: escapeHtml(firstName),
      lastName: escapeHtml(lastName),
      email: escapeHtml(email),
      phone: escapeHtml(phone),
      address: escapeHtml(address),
      typeBien: escapeHtml(typeBien || ''),
      surface: escapeHtml(surface || ''),
      services: Array.isArray(services) ? services.map((s: string) => escapeHtml(s)) : escapeHtml(services || ''),
      budget: escapeHtml(budget || ''),
      delai: escapeHtml(delai || ''),
      description: escapeHtml(description || ''),
    };

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

    // Format services
    const servicesText = Array.isArray(safe.services) ? safe.services.join(', ') : safe.services;

    // Email content (user input is now HTML-escaped)
    const mailOptions = {
      from: `"Flash Services" <${process.env.SMTP_USER}>`,
      to: 'contact@flashservices78.fr',
      subject: 'Nouvelle demande de devis - Flash Services',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Nouvelle demande de devis</h2>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Informations générales</h3>
            <p><strong>Nom:</strong> ${safe.firstName} ${safe.lastName}</p>
            <p><strong>Email:</strong> ${safe.email}</p>
            <p><strong>Téléphone:</strong> ${safe.phone}</p>

            <h3 style="color: #374151;">Détails du projet</h3>
            <p><strong>Adresse:</strong> ${safe.address}</p>
            <p><strong>Type de bien:</strong> ${safe.typeBien || 'Non spécifié'}</p>
            <p><strong>Surface:</strong> ${safe.surface ? `${safe.surface} m²` : 'Non spécifiée'}</p>

            <h3 style="color: #374151;">Services demandés</h3>
            <p>${servicesText}</p>

            <h3 style="color: #374151;">Budget et délais</h3>
            <p><strong>Budget prévisionnel:</strong> ${safe.budget || 'Non spécifié'}</p>
            <p><strong>Délai souhaité:</strong> ${safe.delai || 'Non spécifié'}</p>

            <h3 style="color: #374151;">Description du projet</h3>
            <p style="background-color: white; padding: 15px; border-radius: 5px;">${safe.description || 'Aucune description'}</p>
          </div>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #e2e8f0;">
          <p style="color: #64748b; font-size: 14px;">
            Cet email a été envoyé depuis le formulaire de demande de devis du site Flash Services.
          </p>
        </div>
      `,
      replyTo: safe.email,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Demande de devis envoyée avec succès' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi de la demande' },
      { status: 500 }
    );
  }
}
