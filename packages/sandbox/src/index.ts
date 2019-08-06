import { logger } from 'jege/server';
import { requireNonEmpty } from 'objekt';

const log = logger('[sandbox]');

log('start sandbox...');

try {
  requireNonEmpty('', 'empty object');
} catch (err) {
  log(err);
}

try {
  requireNonEmpty('');
} catch (err) {
  log(err);
}

try {
  requireNonEmpty(undefined);
} catch (err) {
  log(err);
}

try {
  requireNonEmpty(undefined, 'undefined object');
} catch (err) {
  log(err);
}

try {
  requireNonEmpty(null);
} catch (err) {
  log(err);
}

log('end sandbox...');
