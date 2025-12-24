'use client';
import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';


const privacySections = [
    {
        title: 'Last updated: 2025',
        content:
            'At Ethical Den, your privacy matters. We believe in transparency, security, and keeping things simple. This page outlines what we collect, how we use it, and how we protect your information. No legal fluff, just the facts.',
    },
    {
        title: '1. What We Collect',
        content: `- Your name, email address, and contact details
- Information you share when you message us or submit a form
- Project details or files you send directly
- Basic technical information if you visit our website

We only collect the essentials needed to respond, collaborate, and deliver our services effectively.`,
    },
    {
        title: '2. How We Use Your Information',
        content: `- Respond to your inquiries or project requests
- Collaborate on work you’ve hired us for
- Improve communication and support
- Keep our internal operations smooth and secure

We do not sell, rent, or misuse your data. Ever.`,
    },
    {
        title: '3. Who Has Access',
        content:
            'Only trusted team members and secure service providers have access to your information. Everyone handling your data understands the responsibility and follows strict confidentiality practices.',
    },
    {
        title: '4. Your Rights',
        content: `- Ask what information we have on you
- Request updates or corrections
- Ask us to delete your data completely

Email us anytime at support@ethicalden.com and we’ll sort it out promptly.`,
    },
    {
        title: '5. Updates to This Policy',
        content:
            'If anything changes, we’ll update this page. No surprises, just clear communication.',
    },
    {
        title: 'Need Help?',
        content:
            'Questions or concerns? Contact us at support@ethicalden.com and we’ll get back to you with real answers from real people.',
    },
];

const PrivacyPolicyHome = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
            {/* Navbar */}
            <header className="sticky top-0 z-30 bg-white shadow-sm">
                <Navbar backgroundColor="white" textColor="black" />
            </header>

            {/* Banner Section */}
            <section className="bg-[#111] text-white py-24 px-6 sm:px-12 md:px-20 lg:px-32 text-center">
                <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
                    Privacy Policy
                </h1>
                <p className="text-lg sm:text-xl max-w-3xl mx-auto">
                    At Ethical Den, we take your privacy seriously. Learn how we protect and manage your information below.
                </p>
                <a
                    href="#privacy-content"
                    className="mt-6 inline-block bg-white text-black font-semibold px-6 py-2 rounded hover:bg-gray-100 transition"
                >
                    Read Policy
                </a>
            </section>

            {/* Privacy Content */}
            <main
                id="privacy-content"
                className="flex-grow max-w-4xl mx-auto px-6 py-16 sm:px-10 lg:px-12"
            >
                {privacySections.map(({ title, content }, i) => (
                    <section key={i} className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
                        {content.includes('-') ? (
                            <ul className="list-disc list-inside space-y-2 text-gray-800 whitespace-pre-line">
                                {content
                                    .split('\n')
                                    .filter((line) => line.trim().startsWith('-'))
                                    .map((line, idx) => (
                                        <li key={idx}>{line.replace(/^- /, '')}</li>
                                    ))}
                                <p className="mt-4 text-gray-800">
                                    {content
                                        .split('\n')
                                        .filter((line) => !line.trim().startsWith('-'))
                                        .join(' ')
                                        .trim()}
                                </p>
                            </ul>
                        ) : (
                            <p className="text-gray-800 leading-relaxed">{content}</p>
                        )}
                    </section>
                ))}
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200 text-center py-8">
                <p className="text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Ethical Den. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default PrivacyPolicyHome;
