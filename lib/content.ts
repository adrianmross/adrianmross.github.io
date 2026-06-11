import { gridDataUri, signatureDataUri } from '@/lib/base64'

export const site = {
  name: 'Adrian M. Ross',
  url: 'https://adrianmross.github.io',
  description:
    'Developer, designer, and builder working across data systems, web interfaces, and automation.',
  role: 'Developer / Designer / Doer',
}

export const assets = {
  gridDataUri,
  signatureDataUri,
}

export const navItems = [
  { href: '/', label: 'Index' },
  { href: '/work', label: 'Work' },
  { href: '/blog', label: 'Notes' },
  { href: '/about', label: 'About' },
]

export const projects = [
  {
    title: 'Portfolio restart',
    kicker: 'Next.js / GitHub Pages',
    year: '2026',
    description:
      'A clean static-export portfolio based on Vercel’s starter, tuned for fast Pages hosting and small interaction details.',
    metrics: ['Static export', 'MDX notes', 'Base64 UI assets'],
  },
  {
    title: 'Financial reporting analysis',
    kicker: 'Data / Python',
    year: '2024',
    description:
      'Exploratory financial analysis and report generation with reproducible data transforms and concise visual summaries.',
    metrics: ['Notebook workflow', 'Chart exports', 'Report artifacts'],
  },
  {
    title: 'Revenue forecast prototype',
    kicker: 'AzureML / PowerBI',
    year: '2022',
    description:
      'Time-series revenue forecasting prototype for multi-source transactions, optimized for operational reporting loops.',
    metrics: ['95%+ target accuracy', 'AzureML pipeline', 'PowerBI handoff'],
  },
]

export const experience = [
  {
    title: 'Teaching Assistant',
    company: 'Lehigh University Department of Computer Science and Engineering',
    period: '2022 - Present',
    detail:
      'Discrete Algorithms, Databases, and Blockchain Systems. Led review sessions, office hours, grading workflows, and student feedback loops.',
  },
  {
    title: 'Global Analytics Intern',
    company: 'Lockton Companies',
    period: 'Summer 2022',
    detail:
      'Built AzureML forecasting prototypes and improved market-data quality workflows with Azure Synapse, C++, and Python.',
  },
]

export const signals = [
  'Interfaces that stay calm under pressure',
  'Static deployments with observable build paths',
  'Data-heavy workflows made legible',
  'Automation that survives the second use',
]
