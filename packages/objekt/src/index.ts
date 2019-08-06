const undefinedOrNullObjectErrorMsg = 'requireNonEmpty(): object is undefined or null';

const emptyObjectErrorMsg = 'requireNonEmpty(): object is empty';

export function requireNonEmpty(obj: any, msg?: string) {
  if (obj === undefined || obj === null) {
    throw new Error(msg || undefinedOrNullObjectErrorMsg);
  }

  if (obj === '') {
    throw new Error(msg || emptyObjectErrorMsg);
  }

  return obj;
}
