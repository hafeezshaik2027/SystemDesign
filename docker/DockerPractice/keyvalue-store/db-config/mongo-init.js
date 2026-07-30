// MongoDB init script (executed by mongosh). Avoid using Node.js globals like
// `process.env` here — this runs inside the mongo shell, not Node.

const KEYVALUE_STORE_DB = 'keyvalue-store';
const KEYVALUE_STORE_USER = 'keyvalue-user';
const KEYVALUE_STORE_PASSWORD = 'keyvalue-password';

const kv = db.getSiblingDB(KEYVALUE_STORE_DB);

kv.createUser({
  user: KEYVALUE_STORE_USER,
  pwd: KEYVALUE_STORE_PASSWORD,
  roles: [
    { role: 'readWrite', db: KEYVALUE_STORE_DB }
  ]
});

