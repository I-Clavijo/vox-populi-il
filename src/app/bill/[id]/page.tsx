import Image from "next/image";
import CommentSection from "../../components/CommentSection";

async function getBillData(id: string) {
  // This would typically fetch data from an API
  return {
    id,
    title: "Economic Recovery Act",
    proposedDate: "2023-05-15",
    proposedBy: [
      { name: "John Doe", party: "Labor", avatar: "/placeholder.svg" },
      { name: "Jane Smith", party: "Likud", avatar: "/placeholder.svg" },
    ],
    fullDescription:
      "This bill aims to stimulate economic growth and job creation through a series of targeted measures including tax incentives for small businesses, infrastructure investment, and workforce development programs.",
    yesVotes: 250,
    noVotes: 150,
  };
}

export default async function BillPage({ params }: { params: { id: string } }) {
  const bill = await getBillData(params.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-4 text-3xl font-bold">{bill.title}</h1>
      <div className="mb-4">
        <p className="text-gray-600">Proposed on {bill.proposedDate}</p>
        <div className="mt-2 flex items-center">
          <p className="mr-2">Proposed by:</p>
          {bill.proposedBy.map((member, index) => (
            <div key={index} className="mr-4 flex items-center">
              <Image
                src={member.avatar || "/placeholder.svg"}
                alt={member.name}
                width={32}
                height={32}
                className="mr-2 rounded-full"
              />
              <div>
                <p className="font-semibold">{member.name}</p>
                <p className="text-sm text-gray-500">{member.party}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-xl font-semibold">Bill Description</h2>
        <p className="text-gray-700">{bill.fullDescription}</p>
      </div>
      <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-xl font-semibold">Voting Section</h2>
        <div className="mb-4 flex justify-center space-x-4">
          <button className="rounded-full bg-green-500 px-6 py-2 text-lg font-semibold text-white hover:bg-green-600">
            YES (Support)
          </button>
          <button className="rounded-full bg-red-500 px-6 py-2 text-lg font-semibold text-white hover:bg-red-600">
            NO (Oppose)
          </button>
        </div>
        <p className="text-center text-lg">
          Current votes:{" "}
          <span className="font-semibold">{bill.yesVotes} Yes</span> /{" "}
          <span className="font-semibold">{bill.noVotes} No</span>
        </p>
      </div>
      <CommentSection billId={bill.id} />
    </div>
  );
}
