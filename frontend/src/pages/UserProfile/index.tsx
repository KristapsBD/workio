import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";

import { User } from "@/types";
import db from "@/utils/db";

function UserProfilePage({ match }: UserProfilePageProps) {
  const { user } = useFirestoreUser(match.params.userId);

  if (!user) {
    return <div>User not found!</div>;
  }

  return (
    <div>
      <img src={user.avatarUrl} />
      <h1>{user.displayName}</h1>
    </div>
  );
}

export default UserProfilePage;

export function useFirestoreUser(id: string) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUser = async () => {
    const docRef = await db.users.doc(id).get();

    if (docRef.exists) {
      setUser(docRef.data());
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { user, loading };
}

export type UserProfilePageProps = {} & RouteComponentProps<{
  userId: string;
}>;
