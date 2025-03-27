import { createSwaggerSpec } from "next-swagger-doc";

export const getApiDocs = () => {
  const spec = createSwaggerSpec({
    apiFolder: "app/api",
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Next.js API Documentation",
        description: "API documentation for Next.js application",
        version: "1.0.0",
      },
      servers: [
        {
          url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
          description: "Local server",
        },
      ],
      components: {
        schemas: {
          Animal: {
            type: "string",
            description: "The name of an animal",
            example: "Lion",
          },
        },
      },
    },
  });
  return spec;
};