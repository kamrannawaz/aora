import {
  Client,
  Account,
  ID,
  Avatars,
  Databases,
  Query,
} from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.aora.aora",
  projectId: "661e10ad8b893b2d444a",
  databaseId: "661e124615ee7eb2c154",
  usersCollectionId: "661e12b0ed9e43338698",
  videosCollectionId: "661e130c362578178350",
  storageId: "661e1d808e4e92dc6ba2",
};

// Init your react-native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatar = new Avatars(client);
const database = new Databases(client);

export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) throw Error;

    const userAvatar = await avatar.getInitials(username);

    await signIn(email, password);

    const newUser = await database.createDocument(
      config.databaseId,
      config.usersCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: userAvatar,
      }
    );

    return newUser;
  } catch (error) {
    throw new Error(error);
  }
};

export const signIn = async (email, password) => {
  try {
    const session = await account.createEmailSession(email, password);
    return session;
  } catch (error) {
    throw new Error(error);
  }
};

export async function getAccount() {
  try {
    const currentAccount = await account.get();

    return currentAccount;
  } catch (error) {
    throw new Error(error);
  }
}

export const getCurrentUser = async () => {
  try {
    const currentAccount = await getAccount();

    if (!currentAccount) throw Error;

    const currentUser = await database.listDocuments(
      config.databaseId,
      config.usersCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    );

    if (!currentAccount) throw Error;

    return currentUser;
  } catch (error) {
    throw new Error(error);
  }
};
