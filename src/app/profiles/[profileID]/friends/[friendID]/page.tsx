"use client"

interface Props {
  params: { friendID: string; profileID: string };
}

export default function Profile({ params }: Props): React.ReactNode {
  // const params = useParams<{ id: string }>();
  if (Math.random() < 0.5) {
    throw new Error("Number is not big enough");
  }

  return (
    <h1>
      Hello friend of guy {params.profileID} with id {params.friendID}
    </h1>
  );
}
