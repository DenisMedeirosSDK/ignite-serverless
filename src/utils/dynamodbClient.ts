import { DynamoDB } from 'aws-sdk';

const options = {
  accessKeyId: 'x',
  secretAccessKey: 'x',
  region: 'localhost',
  endpoint: 'http://localhost:8000',
};

const isOffline = () => {
  return process.env.IS_OFFLINE;
};
export const document = isOffline()
  ? new DynamoDB.DocumentClient(options)
  : new DynamoDB.DocumentClient();
