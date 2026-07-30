const KEYVALUE_STORE_DB = process.env.KEYVALUE_STORE_DB || 'keyvalue-store';
const KEYVALUE_STORE_USER = process.env.KEYVALUE_STORE_USER || 'keyvalue-user';
const KEYVALUE_STORE_PASSWORD = process.env.KEYVALUE_STORE_PASSWORD || 'keyvalue-password';

const db = db.getSiblingDB(KEYVALUE_STORE_DB);

db.createUser({
  user: KEYVALUE_STORE_USER,
  pwd: KEYVALUE_STORE_PASSWORD,
  roles: [{
    role: 'readWrite',
    db: KEYVALUE_STORE_DB
  }]
})

