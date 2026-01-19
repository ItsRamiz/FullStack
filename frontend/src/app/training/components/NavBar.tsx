import Link from 'next/link';

export default function NavigationBar()
{
    return (

    /* Navigation */
    <nav className="hidden md:flex items-center space-x-8">
        <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">Dashboard</Link>
        <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Models</a>
        <a href="/training" className="text-gray-900 font-semibold border-b-2 border-gray-900">Training</a>
        <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Settings</a>
    </nav>

    )
}