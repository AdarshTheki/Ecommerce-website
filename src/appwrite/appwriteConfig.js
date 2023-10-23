import { Client, Databases } from 'appwrite';

export const PROJECT_ID = '6532846444102aceb230';
export const DATABASE_ID = '65328a8dd4ea6f22810b';
export const COLLECTION_ID = '65366067ac03748fd472';

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
  .setProject('6532846444102aceb230'); // Your project ID

export const databases = new Databases(client);
