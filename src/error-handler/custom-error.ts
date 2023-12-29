/**
 * Error class representing a conflict due to duplicate user.
 */
export class UserConflictError extends Error {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, UserConflictError.prototype);
  }
}

/**
 * Error class representing a validation errors.
 */
export class ZodValidationError extends Error {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, ZodValidationError.prototype);
  }
}
