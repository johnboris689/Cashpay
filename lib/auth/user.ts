import { cookies } from "next/headers";
import { verifySession } from "./session";

export async function getCurrentUserId() {
  const token = cookies().get("cashpay_session")?.value;
  if (!token) return null;

  const session = await verifySession(token);
  return session.userId;
}
