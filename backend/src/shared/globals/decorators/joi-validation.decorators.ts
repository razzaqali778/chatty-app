import { JoiRequestValidationError } from '@global/helpers/error-handlers'; // Corrected typo in import
import { Request } from 'express';
import { ObjectSchema } from 'joi';

type IJoiDecorator = (target: any, key: string, descriptor: PropertyDescriptor) => void; // Corrected type

export function joiValidation(schema: ObjectSchema): IJoiDecorator {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    // Removed unnecessary underscore
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const req: Request = args[0];

      const { error } = schema.validate(req.body); // Removed unnecessary `Promise.resolve`

      if (error?.details) {
        throw new JoiRequestValidationError(error.details[0].message); // Corrected typo in error class name
      }

      return originalMethod.apply(this, args);
    };

    return descriptor;
  };
}
