import { NextResponse } from "next/server";
import users from "@/mocks/users.json";

type LoginBody = {
    email: string;
    password: string;
};

export async function POST(request: Request) {
    const { email, password }: LoginBody = await request.json();

    const user = users.find(
        (candidate) => candidate.email === email && candidate.password === password
    );

    if (!user) {
        return NextResponse.json(
            { error: { code: "INVALID_CREDENTIALS", message: "Invalid email or password" } },
            { status: 401 }
        );
    }

    const response = NextResponse.json({
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        isPlatformAdmin: user.isPlatformAdmin,
    });

    response.cookies.set("lexora_session", "mock-session", {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
    });

    return response;
}