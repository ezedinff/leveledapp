import { NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { headers } from "next/headers";

// Create a new ratelimiter that allows 5 requests per 24 hours
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, "24 h"),
  analytics: true,
});

// Telegram bot configuration
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID; // Add this to your .env.local

async function sendTelegramMessage(message: string) {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: "HTML",
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to send Telegram message");
  }
}

// Email validation regex
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Input validation
const validateInput = (name: string, email: string, message: string) => {
  const errors: string[] = [];

  // Name validation
  if (!name || name.trim().length < 2) {
    errors.push("Name must be at least 2 characters long");
  }
  if (name.length > 100) {
    errors.push("Name must be less than 100 characters");
  }

  // Email validation
  if (!email || !emailRegex.test(email)) {
    errors.push("Please provide a valid email address");
  }

  // Message validation
  if (!message || message.trim().length < 10) {
    errors.push("Message must be at least 10 characters long");
  }
  if (message.length > 1000) {
    errors.push("Message must be less than 1000 characters");
  }

  return errors;
};

// Verify reCAPTCHA token
async function verifyRecaptcha(token: string) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secret}&response=${token}`,
    }
  );

  const data = await response.json();
  return data.success;
}

export async function POST(req: Request) {
  try {
    // Get IP for rate limiting
    const headersList = await headers();
    const ip = headersList.get("x-forwarded-for") ?? "127.0.0.1";

    // Check rate limit
    const { success } = await ratelimit.limit(ip);
    if (!success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const { name, email, message, recaptchaToken } = await req.json();

    // Validate reCAPTCHA
    const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
    if (!isRecaptchaValid) {
      return NextResponse.json(
        { error: "Invalid reCAPTCHA. Please try again." },
        { status: 400 }
      );
    }

    // Validate inputs
    const validationErrors = validateInput(name, email, message);
    if (validationErrors.length > 0) {
      return NextResponse.json(
        { error: validationErrors.join(", ") },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedMessage = message
      .trim()
      .replace(/[<>]/g, "") // Remove < and > to prevent basic HTML injection
      .slice(0, 1000); // Enforce maximum length

    // Format message for Telegram
    const telegramMessage = `
<b>New Contact Form Submission</b>

<b>Name:</b> ${name.trim()}
<b>Email:</b> ${email.trim()}
<b>Message:</b>
${sanitizedMessage}

<i>Sent from: ${ip}</i>
`;

    // Send to Telegram
    await sendTelegramMessage(telegramMessage);

    return NextResponse.json(
      { message: "Thank you for your message. We will get back to you soon!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
