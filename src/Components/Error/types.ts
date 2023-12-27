import { ReactNode } from "react";

/**
 * Represents the properties required by the `ReactErrorBoundary` component.
 */
export interface ReactErrorBoundaryProps {
  /**
   * The child elements to be rendered within the error boundary.
   */
  children: ReactNode;
}

/**
 * Represents the properties required by a component rendering an error.
 */
export interface ErrorProps {
  /**
   * The error object containing details about the error.
   */
  error: Error;
}
