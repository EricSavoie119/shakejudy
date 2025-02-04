"use server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendMessage(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    await resend.emails.send({
      from: "Shake Judy Website <onboarding@resend.dev>",
      to: ["ericsavoie119+shakejudy@gmail.com"],
      subject: "New message from Shake Judy website",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    })

    return { 
      success: true, 
      message: "Thanks for your message! We'll get back to you soon." 
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return { 
      success: false, 
      message: "Sorry, there was an error sending your message. Please try again later." 
    }
  }
}

