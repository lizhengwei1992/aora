import { Client, Account, ID, Avatars, Databases } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.json.aora",
  projectId: "679b47bc002d6c96c8e2",
  databaseId: "679b69b3001a5f9f33b7",
  userCollectionId: "679b69d40037bcf24620",
  videCollectionId: "679b6a2e000560800f3c",
  storageId: "679b6d76002d8d213e13",
};
// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);
const acatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
  try {
    console.log(ID.unique());

    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );
    if (!newAccount) throw Error;
    const avatorUrl = acatars.getInitials(username);
    await signIn(email, password);

    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        email,
        username,
        avatorUrl,
        accountId: newAccount.$id,
        userId: newAccount.$id,
      }
    );
    return newUser;
  } catch (error) {
    // throw new Error(error);
    console.log(error);
  }
};

export async function signIn(email, password) {
  try {
    const session = await account.createSession(email, password);
    return session;
  } catch (error) {
    // throw new Error(error);
    console.log(error);
  }
}
