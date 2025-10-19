import './style.css'
import Alpine from 'alpinejs';
import 'material-icons/iconfont/material-icons.css';
import 'material-symbols';

document.addEventListener('alpine:init', () => {
  Alpine.store('theme', {
    init() {
      const stored = localStorage.getItem('darkMode');
      this.darkMode = stored === 'true';
    },

    darkMode: false,

    toggle() {
      this.darkMode = !this.darkMode;
      localStorage.setItem('darkMode', this.darkMode);
    }
  });

  Alpine.data('portfolioData', () => ({
    projects: [
      {
        id: 'biz001',
        headline: 'Dukatools is an All-in-One Business Management Platform',
        tagline: 'From Sales to Profits - All Shop Records in One Place',
        summary: 'A comprehensive business operating system that handles inventory, sales tracking, expense management, and profitability analysis. Built specifically for SMEs to eliminate operational chaos and drive data-informed growth decisions.',
        image: '/profile/dukatools-pos-stock-system.jpg',
        features: [
          'Real-time dashboard showing daily sales, profit margins, and inventory levels at a glance',
          'Automated low-stock alerts that prevent lost sales from inventory shortages',
          'Expense categorization that helps identify unnecessary spending and optimize cash flow',
          'Multi-store management allowing seamless operations across multiple locations',
          'Customer relationship tracking to boost retention and repeat business',
          'Mobile-first design that lets you manage your business from anywhere, anytime'
        ],
        url: 'https://dukatools.co.ke'
      },
      {
        id: 'fit002',
        headline: 'Trainer Website is a Fitness Business Growth Platform',
        tagline: 'Transform Your Training Business Into a Scalable Empire',
        summary: 'A complete digital ecosystem for fitness professionals to manage clients, deliver personalized programs, and scale their training business beyond one-on-one sessions.',
        image: '/profile/fitness-trainer-website-cloud-system.jpg',
        features: [
          'Custom-branded client portals with personalized workout and nutrition plans',
          'Automated progress tracking with visual analytics that show client transformation',
          'Integrated payment system for seamless subscription and package management',
          'Mobile-responsive design that clients love using on any device',
          'Content management system to share valuable fitness tips and build authority',
          'Client messaging system that keeps communication organized and professional'
        ],
        url: 'https://cnnjihiafitness.co.ke'
      },
      {
        id: 'eco003',
        headline: 'E-commerce marketplace platform for Premium online shopping Experience',
        tagline: 'Where Handcrafted Quality Meets Digital Excellence',
        summary: 'A visually stunning e-commerce platform designed for premium artisanal products, featuring immersive storytelling and frictionless shopping experiences that convert browsers into loyal customers.',
        image: '/profile/dukatools-manage-shops-stock-sales-system.jpg',
        features: [
          'Cinematic product galleries with zoom functionality and lifestyle photography',
          'Streamlined 3-step checkout process that reduces cart abandonment by 40%',
          'Advanced filtering by price, category, artist, and customer ratings',
          'Integrated blog platform for sharing artisan stories and building brand connection',
          'Secure payment processing with multiple options including installment plans',
          'Customer account dashboards with order history and personalized recommendations'
        ]
      },
      {
        id: 'fin004',
        headline: 'Debt Recovery Company Website for Modern Debt Collection Platform',
        tagline: 'Resolving Debts with Technology and Transparency',
        summary: 'A professional, secure platform that transforms traditional debt recovery through digital efficiency, compliance automation, and debtor-friendly payment experiences.',
        image: '/profile/debt-recovery-company-website.jpg',
        features: [
          'Professional design that builds immediate trust and credibility with clients',
          'Secure client portal for real-time case tracking and document management',
          'Compliant payment processing with multiple settlement options for debtors',
          'Automated communication system that maintains compliance while improving recovery rates',
          'Financial education resources that help debtors while building goodwill',
          'Performance analytics dashboard showing recovery rates and agent efficiency'
        ]
      },
      {
        id: 'ops005',
        headline: 'Orders system app to automate orders, payments, invoices, and notification processing for a Writing Service',
        tagline: 'Streamlining Content Creation from Brief to Delivery',
        summary: 'An end-to-end order management platform that automates workflow for writing services, eliminating administrative overhead while ensuring quality and timeliness.',
        image: '/profile/order-management-system.jpg',
        features: [
          'Smart order intake system that captures all client requirements upfront',
          'Automated writer matching based on expertise, availability, and performance',
          'Real-time collaboration tools for seamless client-writer communication',
          'Milestone tracking with automated reminders to prevent missed deadlines',
          'Integrated quality assurance workflow with editorial review checkpoints',
          'Automated invoicing and payment tracking for clear financial management'
        ],
        url: 'https://mwanginjuguna.github.io/portfolio/pages/presentation-service.html'
      },
      {
        id: 'tech006',
        headline: 'Web & IT Solutions Company Website To Showcase Services and Generate Leads',
        tagline: 'A Technology Partner for Digital Transformation',
        summary: 'A dynamic corporate website that demonstrates technical expertise while generating qualified leads through compelling case studies and clear service offerings.',
        image: '/profile/dukatools-kenya-web-development-it-company-website.jpg',
        features: [
          'Modern, tech-forward design that immediately establishes industry authority',
          'Interactive project portfolio with detailed, results-focused case studies',
          'Clear service breakdown from web development to cloud infrastructure',
          'Lead generation system integrated with CRM for immediate follow-up',
          'Technical blog that positions your company as industry thought leaders',
          'Performance-optimized design that loads instantly and ranks well in search'
        ]
      }
    ],

    blogs: [
      {
        id: 'blog001',
        title: 'Building Scalable Business Applications: Lessons from DukaPro',
        excerpt: 'Discover how we built a comprehensive business management platform that handles thousands of transactions daily while maintaining lightning-fast performance.',
        url: '#',
        featuredImageUrl: '/profile/dukatools-pos-stock-system.jpg',
        readTime: '5 min read'
      },
      {
        id: 'blog002',
        title: 'The Future of Fitness Tech: Creating Personalized Digital Experiences',
        excerpt: 'How modern fitness platforms are leveraging AI and data analytics to deliver truly personalized workout and nutrition plans for maximum client results.',
        url: '#',
        featuredImageUrl: '/profile/fitness-trainer-website-cloud-system.jpg',
        readTime: '4 min read'
      },
      {
        id: 'blog003',
        title: 'E-commerce Conversion Optimization: Turning Browsers into Buyers',
        excerpt: 'Proven strategies we implemented to reduce cart abandonment by 40% and increase average order value for premium artisanal products.',
        url: '#',
        featuredImageUrl: '/profile/dukatools-manage-shops-stock-sales-system.jpg',
        readTime: '6 min read'
      },
      {
        id: 'blog004',
        title: 'Modern Debt Recovery: Balancing Technology with Compassion',
        excerpt: 'How digital platforms are transforming debt collection through automation, transparency, and debtor-friendly payment experiences.',
        url: '#',
        featuredImageUrl: '/profile/debt-recovery-company-website.jpg',
        readTime: '5 min read'
      },
      {
        id: 'blog005',
        title: 'Streamlining Content Operations: From Chaos to Consistent Delivery',
        excerpt: 'Case study on how we automated the entire content creation workflow, reducing administrative overhead by 70% while improving quality.',
        url: '#',
        featuredImageUrl: '/profile/order-management-system.jpg',
        readTime: '4 min read'
      },
      {
        id: 'blog006',
        title: 'Web Performance Optimization: Why Every Millisecond Matters',
        excerpt: 'Technical deep dive into the performance optimization techniques that helped our clients achieve 95+ Google PageSpeed scores.',
        url: '#',
        featuredImageUrl: '/profile/dukatools-kenya-web-development-it-company-website.jpg',
        readTime: '7 min read'
      }
    ],

    contact: {
      email: 'francis.kanothe@gmail.com',
      phone: '+254-715-219991',
      whatsapp: '+254715219991',
      whatsappMessage: 'Hi Francis! I came across your portfolio and would like to discuss a potential project with you.',
      linkedin: 'https://www.linkedin.com/in/francis-m-njuguna/',
      github: 'https://github.com/mwanginjuguna'
    },

    about: {
      bio: "I'm a passionate full-stack developer with 5+ years of experience transforming businesses through digital solutions. From founding Paper Study to building scalable applications, I've helped hundreds of clients achieve their goals through technology.",
      highlights: [
        "5+ years in software development with PHP, Laravel, and WordPress",
        "Built and maintained 37+ WordPress websites and multiple Laravel applications",
        "Managed complete project lifecycle from development to AWS deployment",
        "Strong background in education and tutoring brings unique problem-solving perspective"
      ],
      stats: [
        { number: "37+", label: "Websites Built" },
        { number: "5", label: "Years Experience" },
        { number: "700+", label: "Projects Managed" },
        { number: "280+", label: "Clients Served" }
      ]
    },

    skills: {
      technical: [
        { name: "PHP & Laravel", level: 90, icon: "code" },
        { name: "WordPress Development", level: 95, icon: "wordpress" },
        { name: "JavaScript & Vue.js", level: 85, icon: "javascript" },
        { name: "MySQL Database", level: 88, icon: "storage" },
        { name: "AWS & Cloud Deployment", level: 82, icon: "cloud" },
        { name: "Git Version Control", level: 90, icon: "code" }
      ],
      professional: [
        "Full-Stack Development",
        "Cloud Infrastructure",
        "Payment Gateway Integration",
        "Team Collaboration",
        "Project Management",
        "Technical Writing"
      ]
    },

    experience: [
      {
        period: "2022–Present",
        title: "Senior Laravel Developer",
        company: "GamePlan Labs & CodeBreeze",
        achievements: [
          "Developed and maintained e-commerce & CRM applications managing customer relationships",
          "Integrated multiple payment gateways for seamless transaction processing",
          "Deployed 8+ websites and applications to AWS, DigitalOcean, and cPanel",
          "Collaborated with development teams to implement features and fix bugs"
        ],
        icon: "work"
      },
      {
        period: "2019–2023",
        title: "Full-Stack Developer & Founder",
        company: "PaperStudy",
        achievements: [
          "Built two order management systems handling 280+ clients and 700+ orders",
          "Integrated PayPal and Stripe payment gateways via third-party APIs",
          "Implemented frontend using Vue.js 3 and Livewire for dynamic user experiences",
          "Managed complete deployment lifecycle on cPanel and Google Cloud"
        ],
        icon: "business_center"
      },
      {
        period: "2018–2023",
        title: "Academic Tutor & Mentor",
        company: "Freelance",
        achievements: [
          "Provided research, writing, and tutoring services to college and PhD students",
          "Developed strong communication and knowledge transfer skills",
          "Gained deep understanding of diverse subject matters and learning methodologies"
        ],
        icon: "school"
      }
    ],

    education: {
      degree: "Bachelor of Arts with Education",
      institution: "Moi University",
      period: "2015–2020",
      specialization: "Religion and Kiswahili Specialization",
      description: "My educational background in teaching has provided me with exceptional communication skills and the ability to explain complex technical concepts in simple terms."
    },

    languages: [
      { name: "English", level: "Fluent (writing/speaking)", proficiency: 95 },
      { name: "Swahili", level: "Native", proficiency: 100 }
    ],

    resume: {
      quickStats: {
        yearsExperience: "5+",
        websitesBuilt: "37+",
        projectsManaged: "700+",
        clientsServed: "280+"
      },
      coreTechnologies: {
        phpLaravel: [
          "5+ Years Laravel Experience",
          "RESTful API Development",
          "Eloquent ORM & Migrations",
          "Payment Gateway Integration"
        ],
        frontend: [
          "Vue.js 3 Composition API",
          "Laravel Livewire",
          "Tailwind CSS & Responsive Design",
          "Modern JavaScript (ES6+)"
        ],
        devops: [
          "AWS & DigitalOcean Deployment",
          "Linux Server Administration",
          "Git Version Control",
          "CI/CD Pipeline Setup"
        ]
      },
      careerHighlights: {
        gameplan: [
          "Developed and deployed 8+ e-commerce & CRM applications managing customer relationships and payments",
          "Integrated multiple payment gateways for seamless transaction processing and revenue optimization",
          "Configured and deployed applications to AWS, DigitalOcean, and cPanel with optimized performance"
        ],
        paperstudy: [
          "Built two comprehensive order management systems handling 280+ clients and 700+ orders with 99.9% uptime",
          "Integrated PayPal and Stripe payment gateways through third-party APIs, processing $50k+ in transactions",
          "Developed and maintained 37 WordPress websites with custom themes and optimized performance"
        ]
      }
    },
  }));
});

window.Alpine = Alpine;
Alpine.start();
