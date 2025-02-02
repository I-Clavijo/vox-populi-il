import BillCard from "./BillCard";

interface BillsListProps {
  title: string;
}

export default function BillsList({ title }: BillsListProps) {
  // This would typically fetch data from an API
  const bills = [
    {
      id: "1",
      title: "Economic Recovery Act",
      proposedDate: "2023-05-15",
      shortDescription: "A bill to stimulate economic growth and job creation.",
      proposedBy: [
        { name: "John Doe", party: "Labor", avatar: "/images/placeholder.png" },
        { name: "Jane Smith", party: "Likud", avatar: "/images/placeholder.png" },
      ],
      yesVotes: 250,
      noVotes: 150,
      commentCount: 75,
    },
    {
      id: "2",
      title: "Economic Recovery Act",
      proposedDate: "2023-05-15",
      shortDescription: "A bill to stimulate economic growth and job creation.",
      proposedBy: [
        { name: "John Doe", party: "Labor", avatar: "/images/placeholder.png" },
        { name: "Jane Smith", party: "Likud", avatar: "/images/placeholder.png" },
      ],
      yesVotes: 250,
      noVotes: 150,
      commentCount: 75,
    },
    {
      id: "3",
      title: "Economic Recovery Act",
      proposedDate: "2023-05-15",
      shortDescription: "A bill to stimulate economic growth and job creation.",
      proposedBy: [
        { name: "John Doe", party: "Labor", avatar: "/images/placeholder.png" },
        { name: "Jane Smith", party: "Likud", avatar: "/images/placeholder.png" },
      ],
      yesVotes: 250,
      noVotes: 150,
      commentCount: 75,
    },
    // Add more bills here
  ];

  return (
    <section className="mb-12">
      <h2 className="mb-4 text-2xl font-bold">{title}</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {bills.map((bill) => (
          <BillCard key={bill.id} {...bill} />
        ))}
      </div>
    </section>
  );
}
