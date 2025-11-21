import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold text-white">NewsHub</h2>
                        <p className="mt-3 text-gray-400 text-sm">
                            Your go-to platform for the latest news across Technology,
                            Politics, Entertainment, Sports & more.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a className="hover:text-white" href="#">Home</a></li>
                            <li><a className="hover:text-white" href="#">Top Headlines</a></li>
                            <li><a className="hover:text-white" href="#">Technology</a></li>
                            <li><a className="hover:text-white" href="#">Entertainment</a></li>
                            <li><a className="hover:text-white" href="#">Sports</a></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-3">Follow Us</h3>
                        <div className="flex space-x-4 text-xl">
                            <a href="#" className="hover:text-white">🌐</a>
                            <a href="#" className="hover:text-white">🐦</a>
                            <a href="#" className="hover:text-white">📘</a>
                            <a href="#" className="hover:text-white">📸</a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
                    © {new Date().getFullYear()} NewsHub — All Rights Reserved.
                </div>

            </div>
        </footer>
    )
}
