import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmaill";
import { ApiResponse } from "@/types/ApiResonse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verfiyCode: string
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "bi.ray1225@gmail.com",
      to: email,
      subject: "Verify your email",
      react: VerificationEmail({ username, otp: verfiyCode }),
    });
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error("Error sending email: ", error);
    return {
      success: false,
      message: "Error sending email",
    };
  }
}
