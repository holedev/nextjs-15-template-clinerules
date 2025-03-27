import React from "react";
import SwaggerUI from "@/components/swagger-ui";
import { getApiDocs } from "@/lib/swagger";

export default async function ApiDoc(): Promise<React.ReactElement> {
  const spec = getApiDocs();
  return (
    <div className="container mx-auto py-6 min-h-screen bg-white">
      <div className="prose max-w-none">
        <h1 className="text-4xl font-bold mb-8">API Documentation</h1>
        <div className="mt-8 p-4 bg-white rounded-lg shadow-lg">
          <SwaggerUI spec={spec} />
        </div>
      </div>
    </div>
  );
}