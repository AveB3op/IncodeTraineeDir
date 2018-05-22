import { normalize, schema } from 'normalizr';

const clients = new schema.Entity('clients', {}, { idAttribute: '_id' });

const clientList = new schema.Array(clients);

export const normalizeClientList = function normalizeClientList(data) {
  const result = normalize(data, clientList);
  return { ids: result.result, clients: result.entities.clients };
};


// export default normalizeClientList;

const client = new schema.Entity('clients', {}, { idAttribute: '_id' });

export const normalizeClient = function normalizeClient(data) {
  const result = normalize(data, client);
  return { id: result.result, client: result.entities.clients };
};
