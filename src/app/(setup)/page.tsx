import { redirect } from "next/navigation";

import { initalProfile } from "@/lib/initial-profile.";

import { db } from "@/lib/db";

const SetupPage = async () => {
  const profile = await initalProfile();

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (server) {
    return redirect(`/servers/${server.id}`);
  }

  return (
    <div>
      <div>SetupPage</div>
    </div>
  );
};

export default SetupPage;
