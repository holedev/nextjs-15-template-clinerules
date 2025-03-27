import { NextResponse } from "next/server";

/**
 * @swagger
 * /api/hello:
 *   get:
 *     summary: Hello World endpoint
 *     description: Returns a greeting message
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Hello from the API!
 */
export async function GET(): Promise<NextResponse> {
  return NextResponse.json(
    { message: "Hello from the API!" },
    { status: 200 }
  );
}