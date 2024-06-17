import { MAX_AGE, TOKEN_NAME } from "@/app/helpers/constants";

import cookie from "cookie";

export async function POST(request: Request) {
  try {
    const { token } = await request.json();
    return Response.json(
      { status: "success" },
      {
        status: 200,
        headers: {
          "Set-Cookie": cookie.serialize(TOKEN_NAME, token, {
            httpOnly: true,
            maxAge: MAX_AGE,
            sameSite: "lax",
            path: "/",
          }),
        },
      }
    );
  } catch (e) {
    return Response.json(
      { status: "faild" },
      {
        status: 400,
      }
    );
  }
}
