import Link from "next/link"

export default function Footer() {
  return (

<footer className="bg-white  shadow-sm dark:bg-gray-900">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="http://localhost:3000/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">VOX POPULI IL</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">אודות</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">מדיניות פרטיות </a>
                </li>
                <li>
                    <a href="#" className="hover:underline">צור קשר</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="http://localhost:3000/" className="hover:underline">VOX POPULI IL</a> כל הזכויות שמורות</span>
    </div>
</footer>
  )
}
