
export default function Footer() {
  return (
    <footer className="bg-white shadow-sm dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="http://localhost:3000/"
            className="mb-4 flex items-center space-x-3 sm:mb-0 rtl:space-x-reverse"
          ></a>
          <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="me-4 hover:underline md:me-6">
                אודות
              </a>
            </li>
            <li>
              <a href="#" className="me-4 hover:underline md:me-6">
                מדיניות פרטיות{" "}
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                צור קשר
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <a href="http://localhost:3000/" className="hover:underline">
            VOX POPULI IL
          </a>{" "}
          כל הזכויות שמורות
        </span>
      </div>
    </footer>
  );
}
