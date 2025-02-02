import Link from "next/link";

const categories = [
  { name: "Health", icon: "🏥" },
  { name: "Economy", icon: "💰" },
  { name: "Security", icon: "🛡️" },
  { name: "Education", icon: "🎓" },
  { name: "Environment", icon: "🌿" },
  { name: "Technology", icon: "💻" },
];

export default function CategoryGrid() {
  return (
    <section className="mb-12">
      <h2 className="mb-4 text-2xl font-bold">Popular Categories</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={`/category/${category.name.toLowerCase()}`}
            className="flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow-md transition-shadow hover:shadow-lg"
          >
            <span className="mb-2 text-4xl">{category.icon}</span>
            <span className="text-lg font-semibold">{category.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
