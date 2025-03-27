import { NextRequest, NextResponse } from "next/server";
import { getRandomAnimal, getRandomAnimals } from "@/lib/animals";
import { z } from "zod";

/**
 * @swagger
 * /api/animals/random:
 *   get:
 *     summary: Get random animal(s)
 *     description: Returns random animal data with Zod validation
 *     parameters:
 *       - in: query
 *         name: count
 *         schema:
 *           type: integer
 *           minimum: 1
 *           maximum: 20
 *         description: Number of animals to return (optional)
 *     responses:
 *       200:
 *         description: Successful response with animal data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Animal'
 *                 total:
 *                   type: integer
 *       400:
 *         description: Invalid query parameters
 *       500:
 *         description: Internal server error
 */

const QuerySchema = z.object({
  count: z
    .union([z.literal(""), z.coerce.number().min(1).max(100)])
    .optional()
    .transform((val) => (val === "" ? undefined : val)),
});

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const result = QuerySchema.safeParse({
      count: searchParams.get("count") ?? "",
    });

    if (!result.success) {
      return NextResponse.json(
        {
          error: "Invalid query parameters",
          details: "Invalid request parameters",
        },
        { status: 400 }
      );
    }

    const { count } = result.data;
    const animals = count ? getRandomAnimals(count) : getRandomAnimal();

    return NextResponse.json({
      data: animals,
      total: Array.isArray(animals) ? animals.length : 1,
    });
  } catch (error) {
    console.error("Error in random animals API:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
