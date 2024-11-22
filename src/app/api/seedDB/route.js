const { seedBooks } = require("@/scripts/seed");

export async function GET(req) {
  await seedBooks();

  return new Response(
    JSON.stringify({ message: "Database seeded successfully" }),
    { status: 200 }
  );
}
