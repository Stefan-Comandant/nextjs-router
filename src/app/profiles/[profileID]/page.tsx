"use client";

import { useRouter } from "next/router";

interface Props {
  params: { profileID: string };
}

export default function Profile({ params }: Props): React.ReactNode {
  return (
    <>
      <h1>Hello guy with id {params.profileID}</h1>
    </>
  );
}
