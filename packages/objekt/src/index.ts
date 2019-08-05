const undefinedObjectErrorMsg = 'requireNonEmpty(): object is undefined';

const emptyObjectErrorMsg = 'requireNonEmpty(): object is empty';

export function requireNonEmpty(obj: any, msg?: string) {
  if (obj === undefined) {
    throw new Error(msg || undefinedObjectErrorMsg);
  }

  if (obj === '') {
    throw new Error(msg || emptyObjectErrorMsg);
  }

  return obj;
}
