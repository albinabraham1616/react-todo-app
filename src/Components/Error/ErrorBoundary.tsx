import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "./ErrorPage";

import { ReactErrorBoundaryProps } from "./types";

function ReactErrorBoundary({ children }: ReactErrorBoundaryProps) {
  return (
    <div>
      <ErrorBoundary
        FallbackComponent={({ error }) => <ErrorPage error={error} />}
        onError={(error) => {
          console.log(error);
        }}
      >
        {children}
      </ErrorBoundary>
    </div>
  );
}

export default ReactErrorBoundary;
