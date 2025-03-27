"use client";

import SwaggerUIReact from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

interface SwaggerUIProps {
  spec: Record<string, any>;
}

export default function SwaggerUI({ spec }: SwaggerUIProps) {
  return (
    <div className="swagger-ui-container">
      <SwaggerUIReact
        spec={spec}
        docExpansion="list"
        defaultModelsExpandDepth={-1}
        supportedSubmitMethods={["get", "post", "put", "delete"]}
        tryItOutEnabled={true}
        persistAuthorization={true}
        filter={true}
      />
    </div>
  );
}