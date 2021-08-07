import firebase, { firestore } from "@/firebase";
import { User } from "@/types";

const converter = <T>() => ({
  toFirestore: (data: T) => data,
  fromFirestore: (snap: firebase.firestore.QueryDocumentSnapshot) =>
    snap.data() as T,
});

const dataPoint = <T>(collectionPath: string) =>
  firestore.collection(collectionPath).withConverter(converter<T>());

const db = {
  users: dataPoint<User>("users"),
};

export default db;
