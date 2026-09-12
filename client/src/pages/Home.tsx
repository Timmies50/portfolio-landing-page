import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Modern Data-Driven Elegance
 * - Navy blue (#1F3A93) primary with teal (#00D9FF) accents
 * - Poppins for headings, Inter for body text
 * - Asymmetric layouts with generous whitespace
 * - Smooth animations and hover effects
 */

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Call Analytics Dashboard",
      description: "Comprehensive call trend analysis with real-time metrics, gender distribution analysis, and performance tracking across multiple dimensions.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663066516107/TA2t7StPE7YiE25pWjBjYs/Screenshot_20260306_095423_d0ce5809.jpg",
      tags: ["Data Analysis", "Dashboard", "Metrics"],
      highlights: ["1,000+ calls analyzed", "Real-time tracking", "Multi-dimensional insights"],
    },
    {
      id: 2,
      title: "AI Agent Workflow Automation",
      description: "Sophisticated automation workflow integrating AI agents with HTTP requests, chat models, and automated data sheet updates for seamless business operations.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663066516107/TA2t7StPE7YiE25pWjBjYs/20260202_180657_9c6e4ac6.jpg",
      tags: ["AI Automation", "Workflow", "Integration"],
      highlights: ["AI Agent integration", "HTTP API calls", "Auto-updates"],
    },
    {
      id: 3,
      title: "Spotify Features Analysis",
      description: "Deep-dive analysis of Spotify dataset with advanced metrics including danceability, acousticness, energy levels, and comprehensive feature correlation studies.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663066516107/TA2t7StPE7YiE25pWjBjYs/20260224_103256_compressed_96bdf396.jpg",
      tags: ["Data Analysis", "Music Data", "Correlation"],
      highlights: ["50+ audio features", "Genre analysis", "Trend identification"],
    },
    {
      id: 4,
      title: "Seller Dashboard Automation",
      description: "End-to-end seller dashboard with AI-powered automation, schedule triggers, HTTP integrations, and intelligent data processing for e-commerce optimization.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663066516107/TA2t7StPE7YiE25pWjBjYs/20260205_140416_6fdaf586.jpg",
      tags: ["Automation", "E-commerce", "AI Integration"],
      highlights: ["Schedule triggers", "AI processing", "Real-time updates"],
    },
    {
      id: 5,
      title: "Staff Department SQL Challenge",
      description: "A relational SQL analysis identifying every staff member who is not assigned to the HR department by joining staff and department records.",
      image: "/sql-staff-challenge.jpg",
      tags: ["SQL", "Joins", "Data Analysis"],
      highlights: ["INNER JOIN logic", "Department filtering", "Validated result set"],
      solution: "SELECT s.staff_id, s.staff_name, s.department_id FROM staff AS s INNER JOIN departments AS d ON d.department_id = s.department_id WHERE d.department_name <> 'HR';",
      url: "https://github.com/Timmies50/portfolio-landing-page/blob/main/sql/sql-challenges/staff-not-in-hr.sql",
    },
    {
      id: 6,
      title: "Customers With Orders SQL Challenge",
      description: "A customer-order reporting query that combines customer details with purchased products and order amounts using a focused INNER JOIN.",
      image: "/sql-customers-orders.jpg",
      tags: ["SQL", "INNER JOIN", "Reporting"],
      highlights: ["Customer-order matching", "Purchase reporting", "Expected output included"],
      solution: "SELECT c.customer_name, c.city, o.product, o.total_amount AS order_amount FROM customers AS c INNER JOIN orders AS o ON o.customer_id = c.customer_id;",
      url: "https://github.com/Timmies50/portfolio-landing-page/blob/main/sql/sql-challenges/customers-with-orders.sql",
    },
  ];

  const skills = [
    { category: "Data Analysis", items: ["Excel", "Python", "SQL", "Pandas", "NumPy"] },
    { category: "Visualization", items: ["Tableau", "Power BI", "Matplotlib", "Plotly", "Seaborn"] },
    { category: "AI & Automation", items: ["AI Agents", "Workflow Automation", "API Integration", "Machine Learning", "Process Optimization"] },
    { category: "Tools & Platforms", items: ["Google Sheets", "Zapier", "Make.com", "n8n", "REST APIs"] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-slate-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container py-4 flex justify-between items-center">
          <div className="text-2xl font-bold gradient-text">Portfolio</div>
          <div className="flex gap-8">
            <a href="#projects" className="text-foreground hover:text-primary transition-colors text-sm font-medium">Projects</a>
            <a href="#skills" className="text-foreground hover:text-primary transition-colors text-sm font-medium">Skills</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors text-sm font-medium">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663066516107/TA2t7StPE7YiE25pWjBjYs/hero-background-dPMBvVVqrPZCV5c5rPwSCq.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent"></div>

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="text-label text-primary">Welcome to my portfolio</div>
                <h1 className="text-display text-foreground">Data Analyst & AI Automation Specialist</h1>
                <p className="text-body text-foreground/80 max-w-lg">
                  I transform raw data into actionable insights and build intelligent automation systems that drive business growth. Specializing in data analysis, AI integration, and workflow optimization.
                </p>
              </div>

              <div className="flex gap-4">
                <Button className="bg-primary hover:bg-primary/90 text-white gap-2">
                  View My Work <ArrowRight className="w-4 h-4" />
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Get in Touch
                </Button>
              </div>

              <div className="flex gap-6 pt-4">
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="hidden md:flex justify-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663066516107/TA2t7StPE7YiE25pWjBjYs/data-analytics-visual-UGBhBM8mGdo638gS65czAj.webp"
                alt="Data Analytics"
                className="w-full max-w-sm drop-shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary/5 border-y border-border">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">6+</div>
              <p className="text-foreground/70">Major Projects</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-foreground/70">Data Metrics Analyzed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-foreground/70">Automation Success Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-foreground/70">System Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-heading text-foreground mb-4">Featured Projects</h2>
            <p className="text-body text-foreground/70 max-w-2xl mx-auto">
              A selection of my recent work showcasing data analysis, automation, and AI integration capabilities.
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className={`grid md:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className={`space-y-6 ${idx % 2 === 1 ? "md:col-start-2" : ""}`}>
                  <div>
                    <div className="text-label text-accent mb-2">Project {project.id}</div>
                    <h3 className="text-subheading text-foreground mb-3">{project.title}</h3>
                    <p className="text-body text-foreground/70">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <p className="text-label text-foreground/60">Key Highlights</p>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-2 text-body text-foreground/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.solution && (
                    <div className="rounded-lg bg-slate-950 p-4 shadow-inner">
                      <p className="text-label text-accent mb-2">SQL Solution</p>
                      <code className="block text-xs leading-relaxed text-slate-200 break-words">{project.solution}</code>
                    </div>
                  )}

                  <a href={project.url ?? "#contact"} target={project.url ? "_blank" : undefined} rel={project.url ? "noreferrer" : undefined}>
                    <Button className="bg-primary hover:bg-primary/90 text-white gap-2 w-fit">
                      {project.url ? "View SQL Solution" : "View Details"} <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                </div>

                <div className={`relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 ${hoveredProject === project.id ? "shadow-2xl scale-105" : ""}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-32 bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-heading text-foreground mb-4">Skills & Expertise</h2>
            <p className="text-body text-foreground/70 max-w-2xl mx-auto">
              A comprehensive toolkit for data analysis, visualization, and intelligent automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-subheading text-primary mb-4">{skillGroup.category}</h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-body text-foreground/70">
                      <div className="w-1 h-1 rounded-full bg-accent"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Automation Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="hidden md:flex justify-center order-2 md:order-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663066516107/TA2t7StPE7YiE25pWjBjYs/ai-automation-visual-Au4GgPv762VGgbF8hHyyZJ.webp"
                alt="AI Automation"
                className="w-full max-w-sm drop-shadow-2xl"
              />
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <div>
                <div className="text-label text-accent mb-2">Specialization</div>
                <h2 className="text-heading text-foreground mb-4">AI-Powered Automation</h2>
                <p className="text-body text-foreground/70">
                  I design and implement intelligent automation workflows that leverage AI agents, API integrations, and intelligent decision-making to streamline complex business processes and reduce manual work.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Workflow orchestration with AI agents",
                  "Real-time data processing and updates",
                  "Multi-system API integration",
                  "Intelligent error handling and recovery",
                  "Scalable automation architecture",
                ].map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                    </div>
                    <p className="text-body text-foreground/70">{feature}</p>
                  </div>
                ))}
              </div>

              <Button className="bg-accent hover:bg-accent/90 text-primary gap-2 w-fit font-semibold">
                Learn More <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80">
        <div className="container text-center">
          <h2 className="text-heading text-white mb-4">Let's Work Together</h2>
          <p className="text-body text-white/80 max-w-2xl mx-auto mb-8">
            Ready to transform your data into insights or automate your workflows? Get in touch and let's discuss how I can help your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white hover:bg-white/90 text-primary gap-2 font-semibold">
              <Mail className="w-4 h-4" /> Send Email
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 gap-2 font-semibold">
              <Linkedin className="w-4 h-4" /> Connect on LinkedIn
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-white/60 text-sm">© 2026 Data Analyst & AI Automation Specialist. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
