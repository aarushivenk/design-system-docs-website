import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  designSystemSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Components',
      items: [
        'components/buttons',
        'components/cards',
        'components/breadcrumbs',
        'components/confirmation-dialog',
        'components/milestones',
        'components/more-less-link',
        'components/tabs',
      ],
    },
    {
      type: 'category',
      label: 'Patterns',
      items: [
        'patterns/banners',
        'patterns/calendar-widget',
        'patterns/charts',
        'patterns/comment-thread',
        'patterns/document-cards',
        'patterns/document-summary',
        'patterns/inline-dialog',
        'patterns/key-performance-indicators',
        'patterns/notifications',
        'patterns/pick-list',
      ],
    },
    {
      type: 'category',
      label: 'Layouts',
      items: [
        'layouts/dashboards',
        'layouts/empty-states',
        'layouts/forms',
        'layouts/grids',
        'layouts/landing-pages',
        'layouts/messaging-module',
        'layouts/pane-layouts',
        'layouts/record-views',
      ],
    },
    {
      type: 'category',
      label: 'Branding',
      items: [
        'branding/colors',
        'branding/typography',
        'branding/icons',
        'branding/logo-and-favicon',
        'branding/approach-to-ai',
      ],
    },
    {
      type: 'category',
      label: 'Guidelines',
      items: [
        'accessibility/checklist',
        'content-style-guide/voice-and-tone',
      ],
    },
  ],
};

export default sidebars;