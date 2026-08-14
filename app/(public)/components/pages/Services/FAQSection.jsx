'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function FAQSection() {
    const [openItems, setOpenItems] = useState({})

    const toggleItem = (index) => {
        setOpenItems(prev => ({
            ...prev,
            [index]: !prev[index]
        }))
    }

    const faqs = [
        {
            question: "Why hasn't anyone done this before?",
            answer: (
                <>
                    <p>Because doing it right is hard.</p>
                    <p>Placing a decoy on the public internet means attackers have all the time in the world to inspect, fingerprint, and compare. If the setup doesn't feel real, it gets ignored.</p>
                    <p>The second challenge is what happens when it doesn't. Once a Bait is exposed, it faces constant traffic: scans, brute force, background noise. Extracting useful signals from that chaos is just as hard as building a convincing decoy.</p>
                    <p>We built Baits to solve both problems. Each instance is designed to replicate real services with extreme fidelity, and every alert is filtered and validated to remove false positives. The result is clean, confirmed signals tied to real credential misuse.</p>
                    <p>What sounds simple took years of research and iteration. But once you see it working, it makes perfect sense.</p>
                </>
            )
        },
        {
            question: "How do we know the concept works?",
            answer: (
                <>
                    <p>Because it already does. Across organizations of all sizes.</p>
                    <p>From 200-employee companies to multinational groups, Baits have consistently uncovered high-value signals:</p>
                    <ul>
                        <li>Freshly compromised credentials actively tested by attackers</li>
                        <li>Breaches in progress that had gone unnoticed</li>
                        <li>Insights into attacker tactics and targeting patterns</li>
                    </ul>
                    <p>Every deployment confirms the value. No noise, no guesswork. Just confirmed signals your team can act on.</p>
                    <p>You can find concrete examples on our <Link href="/baits">Baits</Link>.</p>
                </>
            )
        },
        {
            question: "How do we make sure attackers actually fall for the Baits?",
            answer: (
                <>
                    <p>Because we know how they think.</p>
                    <p>Our team comes from years of offensive security and pentesting. We understand how attackers explore an external perimeter, what catches their eye, and how they choose targets. That's why every Bait is carefully contextualized to mimic your real assets, technologies, and domain naming conventions.</p>
                    <p>The result? High-fidelity traps that blend into your environment and naturally attract reconnaissance activity. No tricks, just realism.</p>
                </>
            )
        },
        {
            question: "How are Baits different from traditional honeypots?",
            answer: (
                <>
                    <p>Realism and relevance.</p>
                    <p>Internal honeypots catch attackers already inside. At that point, they're rushing. They don't have time to analyze what's real or fake. That makes deception easier.</p>
                    <p>With Baits, it's a different game. They're exposed online, where attackers have time to probe, fingerprint, and compare. If something feels fake, they won't bite. That's why we invest serious effort in making Baits indistinguishable from your legitimate assets. Everything is designed for maximum credibility.</p>
                    <p>And since anything exposed online attracts noise, we've built logic to separate high-intent activity from random brute-force attempts. You only get clean, relevant signals.</p>
                    <p>Baits aren't passive traps. They're an active way to detect attackers before they reach your systems.</p>
                </>
            )
        },
        {
            question: "What's the value if we already monitor the dark web?",
            answer: (
                <p>Dark web monitoring often comes too late. Most stolen credentials are used long before they're leaked or sold. Baits intercept compromised credentials at the source, as attackers actively test them. This gives your team time to neutralize the threat before it escalates.</p>
            )
        },
        {
            question: "We already have MFA. Do we really need this?",
            answer: (
                <p>Yes. MFA reduces risk, but attackers increasingly find ways around it. Tactics like push fatigue, token theft, and social engineering can still give them access. Baits catches attackers in the act of using stolen credentials, regardless of your MFA setup. It provides a safety net when MFA is bypassed or disabled.</p>
            )
        }
    ]

    return (
        <section className="section padding-vertical-mobile">
            <div className="padding-global padding-section-112">
                <div className="container-1280">
                    <div className="faq_layout">
                        <div className="faq_sticky_box">
                            <div className="margin-bottom margin-24">
                                <h2 h-reveal="">Still have questions? Let's clear things up.</h2>
                            </div>
                            <div className="margin-bottom margin-24">
                                <p p-reveal="" className="text-large">Here are answers to the most common questions we hear from security leaders exploring MokN.</p>
                            </div>
                            <Link href="/contact" className="button-cta w-inline-block" data-w-id="a43da8e7-f026-4360-08c1-7387d0a39628">
                                <div className="button-cta-bg">
                                    <div className="button-m z-index-1">Contact us</div>
                                    <div className="button_hover_light"></div>
                                </div>
                                <div className="border-gradient"></div>
                            </Link>
                        </div>
                        <div className="faq_list_wrapper">
                            <div role="list" className="faq_list">
                                {faqs.map((faq, index) => (
                                    <div key={index} role="listitem" className="w-dyn-item">
                                        <div className="faq_item border-800">
                                            <div className="hflex-between-center flex-nowrap" onClick={() => toggleItem(index)} style={{ cursor: 'pointer' }}>
                                                <h3 className="text-label-l">{faq.question}</h3>
                                                <div className="svg w-embed">
                                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="40" height="40" rx="4" fill="#06090A"></rect>
                                                        <path d="M20 14L20 26M26 20L14 20" stroke="white" strokeWidth="2"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            {openItems[index] && (
                                                <div className="text-rich-text overflow-hidden text-color-gs-300 text-regular">
                                                    {faq.answer}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}