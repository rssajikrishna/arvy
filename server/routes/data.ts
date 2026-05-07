import { Router } from 'express';

const router = Router();

const services = [
  {
    id: 'operational-intelligence-audit',
    step: 1,
    name: 'Operational Intelligence Audit',
    tagline: 'Entry engagement — standalone value',
    description:
      'A structured 2-week diagnostic of how your business actually operates. Workflows mapped, inefficiencies identified, cost estimated, roadmap delivered.',
    deliverables: [
      'Full workflow and handoff mapping',
      'Revenue leakage estimation',
      'Prioritized findings report',
      'System design roadmap',
    ],
    duration: '2 weeks',
    isoduration: 'P2W',
    availability: 'available',
  },
  {
    id: 'systems-implementation',
    step: 2,
    name: 'Systems Implementation',
    tagline: 'Core engagement — most requested',
    description:
      '6–12 weeks to design, build, and deploy operational systems identified in your audit — defined milestones, team training, outcomes measured from day one.',
    deliverables: [
      'System architecture and design',
      'Build, integration, and testing',
      'Team protocols and documentation',
      '2-week live stabilization',
    ],
    duration: '6–12 weeks',
    isoduration: 'P6W/P12W',
    availability: 'available',
  },
  {
    id: 'intelligence-retainer',
    step: 3,
    name: 'Intelligence Retainer',
    tagline: 'Ongoing engagement — fractional COO',
    description:
      'Monthly engagement for continuous optimization and advisory as complexity grows. A fractional COO focused entirely on systems performance.',
    deliverables: [
      'Monthly performance reviews',
      'System refinement and iteration',
      'Priority access for new challenges',
      'Quarterly mini-audit',
    ],
    duration: 'Ongoing',
    isoduration: null,
    availability: 'available',
  },
];

const faqs = [
  {
    question: 'What does the 2-week audit actually involve?',
    answer:
      'We conduct structured interviews with key team members, observe live workflows, map every handoff and decision point, and review your existing tools and data. You receive a written findings report, quantified cost-of-inefficiency estimate, and a prioritised system design roadmap — not a deck of recommendations without a plan.',
  },
  {
    question: 'Do I need to buy software or tools to work with ARVY?',
    answer:
      "No. We diagnose before we prescribe. If new tools are warranted, we'll specify exactly what and why — with total cost of ownership factored in. We have no vendor relationships and receive no referral fees.",
  },
  {
    question: 'What size of business is ARVY built for?',
    answer:
      'We work best with businesses between 15 and 250 people who are scaling faster than their operations can support. The pain is always the same: growth has outpaced process. Industry is less important than complexity.',
  },
  {
    question: 'How long does a full Systems Implementation take?',
    answer:
      "Typically 6 to 12 weeks, depending on scope and your team's availability. Milestones and outcomes are agreed before we begin. The final 2 weeks are always a live stabilisation period where we work alongside your team before handoff.",
  },
  {
    question: "What's included in the Intelligence Retainer?",
    answer:
      'Monthly performance reviews against baseline metrics, system refinement and iteration, priority access for new operational challenges, and a quarterly mini-audit. Think of it as a fractional COO focused entirely on systems performance.',
  },
  {
    question: 'Can we start with just the audit and decide later?',
    answer:
      'Yes — the audit is a standalone engagement that delivers standalone value. Many clients use it as a board-level briefing document. There is no obligation to proceed to implementation.',
  },
];

router.get('/services', (_req, res) => {
  res.json({
    organization: 'ARVY Operational Intelligence Consulting',
    url: 'https://arvy.co',
    email: 'inquiries@arvy.co',
    services,
    lastUpdated: '2026-05-07',
  });
});

router.get('/faq', (_req, res) => {
  res.json({ faqs, lastUpdated: '2026-05-07' });
});

export { router as dataRouter };
