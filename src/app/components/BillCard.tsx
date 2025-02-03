import Image from "next/image";
import Link from "next/link";

import PlaceholderUserAvatar from "../assets/images/placeholder-user.png";

interface KnessetMember {
  name: string;
  party: string;
  avatar: string;
}

interface BillCardProps {
  id: string;
  title: string;
  proposedDate: string;
  shortDescription: string;
  proposedBy: KnessetMember[];
  yesVotes: number;
  noVotes: number;
  commentCount: number;
}

export default function BillCard({
  id,
  title,
  proposedDate,
  shortDescription,
  proposedBy,
  yesVotes,
  noVotes,
  commentCount,
}: BillCardProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="mb-2 text-sm text-gray-500">Proposed on {proposedDate}</p>
      <p className="mb-4 text-gray-700">{shortDescription}</p>
      <div className="mb-4 flex items-center">
        <p className="mr-2">Proposed by:</p>
        {proposedBy.map((member, index) => (
          <div key={index} className="mr-2 flex items-center">
            <Image
              src={member.avatar || PlaceholderUserAvatar}
              alt={member.name}
              width={24}
              height={24}
              className="mr-1 rounded-full"
            />
            <span className="text-sm">{member.name}</span>
          </div>
        ))}
      </div>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex space-x-2">
          <button className="rounded bg-green-500 px-3 py-1 text-white">
            Yes ({yesVotes})
          </button>
          <button className="rounded bg-red-500 px-3 py-1 text-white">
            No ({noVotes})
          </button>
        </div>
        <span className="text-sm text-gray-500">{commentCount} comments</span>
      </div>
      {/*
      <Link
        href={`/bill/${id}`}
        className="block w-full rounded bg-blue-500 py-2 text-center text-white hover:bg-blue-600"
      >
        View Full Details
      </Link>
      */}
    </div>
  );
}
