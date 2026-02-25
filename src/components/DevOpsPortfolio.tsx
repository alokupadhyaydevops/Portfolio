'use client'
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Terminal,
  Cloud,
  Boxes,
  ShieldCheck,
  Wrench,
  Rocket,
  Cpu,
  Search,
  Link as LinkIcon,
  Sun,
  Moon,
  Download,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

// -----------------------------
// Simple data model (edit me!)
// -----------------------------
const PROFILE = {
  name: "Sudhanshu Verma",
  title: "DevOps Engineer",
  location: "India (Open to Remote)",
  email: "alokupadhyay039@gmail.com",
  phone: "+91-96283-71650",
  summary:
    "DevOps Engineer Intern with hands-on experience in Docker, Kubernetes, CI/CD and AWS. I build real-world projects to automate deployments, manage infrastructure as code, and monitor applications. Focused on learning production-grade DevOps practices.",
  links: {
    github: "https://github.com/alokupadhyaydevops",
    linkedin: "https://linkedin.com/in/alokupadhyaydevops",
    resume: "Alokupadhyaydevops.pdf",
  },
};

const SKILLS = [
  {
    name: "Linux & Shell",
    icon: <Terminal className="h-5 w-5" />,
    items: ["Ubuntu", "Bash", "Systemd", "Networking"],
  },
  {
    name: "DevOps & CI/CD",
    icon: <Rocket className="h-5 w-5" />,
    items: ["GitHub Actions", "Jenkins", "CI/CD Pipelines"],
  },
  {
    name: "Containers & Orchestration",
    icon: <Boxes className="h-5 w-5" />,
    items: ["Docker", "Kubernetes", "Helm"],
  },
  {
    name: "Cloud",
    icon: <Cloud className="h-5 w-5" />,
    items: ["AWS (EC2, S3, VPC, IAM)"],
  },
  {
    name: "Infrastructure as Code",
    icon: <Wrench className="h-5 w-5" />,
    items: ["Terraform", "Ansible"],
  },
  {
    name: "Observability & Security",
    icon: <ShieldCheck className="h-5 w-5" />,
    items: ["Prometheus", "Grafana", "ELK", "OWASP"],
  },
];

const BLOGS = [
  {
    title: "Setting up CI/CD with GitHub Actions",
    desc: "Learned how to automate build and deployment pipelines using GitHub Actions for Dockerized apps.",
    link: "https://github.com/alokupadhyaydevops",
  },
  {
    title: "Deploying Apps on Kubernetes",
    desc: "Practiced Kubernetes deployments, services and scaling workloads.",
    link: "https://github.com/alokupadhyaydevops",
  },
  {
    title: "Terraform for AWS Infrastructure",
    desc: "Used Terraform to provision VPCs, EC2 and load balancers in AWS.",
    link: "https://github.com/alokupadhyaydevops",
  },
];


type ProjectLinks = {
  github: string;
  demo?: string;
  writeup?: string;
};

type Project = {
  title: string;
  description: string;
  stack: string[];
  tags: string[];
  links: ProjectLinks;
  highlights?: string[];
};

const PROJECTS: Project[] = [
  {
    title: "CloudShip CI/CD Pipeline",
    description:
      "Built an end-to-end CI/CD pipeline using GitHub Actions, Docker and Kubernetes. Automated build, test and deployment workflows.",
    stack: ["Docker", "Kubernetes", "GitHub Actions", "AWS"],
    tags: ["CI/CD", "Automation", "DevOps"],
    links: {
      github: "https://github.com/alokupadhyaydevops/cloudship-devops-pipeline",
      // demo: "https://demo.example.com",
      // writeup: "#",
    },
    highlights: [
      "Automated build and deployment using GitHub Actions",
      "Containerized application for consistent delivery",
      "Deployed workloads on Kubernetes cluster",
      "Implemented CI/CD workflow for faster releases"
    ],
  },
  {
    title: "Terraform AWS Production Architecture",
    description:
      "Designed and deployed production-style AWS infrastructure using Terraform. Includes VPC, multi-AZ subnets, load balancing, auto scaling and modular IaC patterns.",
    stack: ["Terraform", "AWS", "EC2", "ALB", "Auto Scaling"],
    tags: ["Terraform", "AWS", "IaC", "Cloud Architecture"],
    links: {
      github: "https://github.com/alokupadhyaydevops/terraform-aws-production-architecture",
      // writeup: "#",
    },
    highlights: [
      "Provisioned VPC with multi-AZ public subnets",
      "Configured Auto Scaling groups with an Application Load Balancer",
      "Implemented Auto Scaling for reliability",
      "Modular Terraform code ideal for scalable infrastructure"
    ],
  },
  {
    title: "AWS CI/CD Production Web Platform",
    description:
      "Designed and deployed a scalable web platform on AWS with automated CI/CD using GitHub Actions, including load balancing, auto scaling, and secure IAM integration.",
    stack: ["AWS", "GitHub Actions", "Auto Scaling", "Application Load Balancer", "S3", "Bash"],
    tags: ["CI/CD", "AWS", "Auto Scaling", "DevOps"],
    links: {
      github: "https://github.com/alokupadhyaydevops/aws-ci-cd-production-web-platform",
    },
    highlights: [
      "Built an automated CI/CD pipeline using GitHub Actions",
      "Configured AWS Auto Scaling Group behind ALB",
      "Integrated secure IAM and deployment artifact storage on S3",
      "Implemented versioned deployments and rollback strategy"
    ],
  },
  {
    title: "Production-Ready Web App Deployment on AWS",
    description:
      "Provisioned and deployed a production-ready web application on AWS using Terraform and cloud-native services, including VPC setup, security groups, and automated server configuration.",
    stack: ["Terraform", "AWS", "EC2", "Nginx", "Security Groups", "User Data Scripts"],
    tags: ["AWS", "Terraform", "IaC", "Web Deployment"],
    links: {
      github: "https://github.com/alokupadhyaydevops/production-ready-web-application-deployment-on-aws"
    },
    highlights: [
      "Configured secure VPC and subnet architecture",
      "Automated EC2 provisioning and application setup",
      "Deployed a web application with production-oriented networking",
      "Reusable Terraform modules for infra automation"
    ]
  },
  {
    title: "Company Technology Foundation Blueprint",
    description:
      "Created a detailed blueprint outlining a scalable, secure, and maintainable technology foundation. Includes architectural diagrams and guidelines for CI/CD, cloud infrastructure, monitoring, and best practices for team adoption.",
    stack: ["Cloud Architecture", "Infrastructure Strategy", "Best Practices", "Documentation"],
    tags: ["Architecture", "Blueprint", "DevOps Strategy"],
    links: {
      github: "https://github.com/alokupadhyaydevops/Company-Technology-Foundation-Blueprint"
    },
    highlights: [
      "Documented scalable and secure tech stack foundations",
      "Included best practices for CI/CD and monitoring",
      "Architecture diagrams for cloud adoption and operations",
      "Blueprint aimed at long-term maintainability and reliability"
    ]
  },
];

const EXPERIENCE = [
  {
    role: "DevOps Engineer Intern",
    org: "Eucoders Technologies Pvt. Ltd.",
    period: "June 2025 – Present",
    bullets: [
      "Assisting in CI/CD pipeline setup using GitHub Actions for automated deployments",
      "Working with Docker containers and Kubernetes for application deployment",
      "Supporting AWS infrastructure provisioning and configuration tasks",
      "Monitoring application performance using Prometheus and Grafana"
    ],
  },
];

const CERTS = [
  { name: "AWS Certified Cloud Practitioner (CLF‑C02)", year: 2025 },
  { name: "Kubernetes and Cloud Native Associate (KCNA)", year: 2025 },
  { name: "HashiCorp Terraform Associate (003)", year: 2025 },
];

const TOOLS = [
  "Git", "GitHub", "GitLab", "Jenkins", "Docker", "Kubernetes", "Helm",
  "ArgoCD", "Terraform", "Ansible", "AWS", "GCP", "Prometheus",
  "Grafana", "Loki", "ELK", "SonarQube", "Trivy", "Snyk",
];

// Utility badges
type TagProps = {
  children: React.ReactNode;
};

const Tag: React.FC<TagProps> = ({ children }) => (
  <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs">
    {children}
  </Badge>
);


type SectionProps = {
  id: string;
  title: string;
  desc?: string; // now optional
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ id, title, desc, children }) => (

  <section id={id} className="scroll-mt-24">
    <div className="mb-6">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      {desc && (
        <p className="text-sm text-muted-foreground mt-1 max-w-3xl">{desc}</p>
      )}
    </div>
    {children}
  </section>
);

function useDarkMode(): [boolean, React.Dispatch<React.SetStateAction<boolean>>] {
  const [dark, setDark] = useState<boolean>(true);
  React.useEffect(() => {
    const root = window.document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);
  return [dark, setDark];
}


export default function DevOpsPortfolio() {
  const [query, setQuery] = useState("");
  const [dark, setDark] = useDarkMode();

  const filtered = useMemo(() => {
    if (!query) return PROJECTS;
    const q = query.toLowerCase();
    return PROJECTS.filter((p) =>
      [
        p.title,
        p.description,
        ...(p.stack || []),
        ...(p.tags || []),
      ]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Cpu className="h-5 w-5" />
            <span className="font-semibold">{PROFILE.name}</span>
            <span className="text-muted-foreground">— {PROFILE.title}</span>
          </div>
          <nav className="ml-auto hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#experience" className="hover:underline">Experience</a>
            <a href="#certs" className="hover:underline">Certifications</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
          <div className="ml-3 flex items-center gap-2">
            <Button size="icon" variant="ghost" onClick={() => setDark(!dark)}>
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <a href={PROFILE.links.resume}>
                <Download className="h-4 w-4" /> Resume
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="max-w-6xl mx-auto px-4">
        <section className="grid md:grid-cols-2 gap-6 py-10 md:py-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <Badge className="rounded-full">Open to DevOps & Cloud Roles</Badge>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              {PROFILE.title} | AWS • Kubernetes • CI/CD • Terraform
            </h1>
            <p className="text-muted-foreground max-w-prose">
              {PROFILE.summary}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="gap-2">
                <a href="#projects">
                  <Rocket className="h-4 w-4" /> View Projects
                </a>
              </Button>
              <Button asChild variant="outline" className="gap-2">
                <a href={PROFILE.links.github}>
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </Button>
              <Button asChild variant="outline" className="gap-2">
                <a href={PROFILE.links.linkedin}>
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="border-dashed">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cloud className="h-5 w-5" /> Quick Stats
                </CardTitle>
                <CardDescription>
                  What I bring to your engineering team
                </CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-2xl font-semibold">Real-World </p>
                  <p className="text-sm text-muted-foreground">DevOps Projects</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold">Hands-On </p>
                  <p className="text-sm text-muted-foreground">AWS & Terraform</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold">CI/CD </p>
                  <p className="text-sm text-muted-foreground">Automation Focus</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold">Docker + K8s</p>
                  <p className="text-sm text-muted-foreground">Deployment Practice</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <Separator className="my-8" />

        {/* About */}
        <Section
          id="about"
          title="About"
          desc="I automate delivery pipelines, codify infrastructure, and design observable systems so teams can ship faster with confidence."
        >
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact</CardTitle>
                <CardDescription>{PROFILE.location}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-2 hover:underline">
                  <Mail className="h-4 w-4" /> {PROFILE.email}
                </a>
                <a href={`tel:${PROFILE.phone}`} className="flex items-center gap-2 hover:underline">
                  <Phone className="h-4 w-4" /> {PROFILE.phone}
                </a>
              </CardContent>
            </Card>
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>What I&apos;m focusing on</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Building real-world CI/CD pipelines using GitHub Actions, Docker, and Kubernetes</li>
                  <li>Designing and provisioning AWS infrastructure with Terraform using best practices</li>
                  <li>Improving system monitoring and reliability with Prometheus and Grafana</li>

                </ul>
              </CardContent>
            </Card>
          </div>
        </Section>



        <Separator className="my-8" />

        <Section
          id="github"
          title="Open Source & GitHub"
          desc="I actively build and share DevOps projects on GitHub."
        >
          <Card>
            <CardContent className="pt-6 space-y-4">

              <p className="text-sm text-muted-foreground">
                My GitHub showcases real DevOps projects including Terraform infrastructure,
                CI/CD pipelines, and AWS deployments.
              </p>

              <Button asChild className="gap-2">
                <a href="https://github.com/alokupadhyaydevops" target="_blank">
                  <Github className="h-4 w-4" /> Visit My GitHub
                </a>
              </Button>

            </CardContent>
          </Card>
        </Section>  





        <Separator className="my-8" />

        {/* Skills */}
        <Section
          id="skills"
          title="Skills"
          desc="Core tools & platforms I use to turn ideas into reliable, observable services."
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SKILLS.map((s) => (
              <Card key={s.name} className="">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    {s.icon}
                    {s.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {s.items.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {TOOLS.map((t) => (
              <Badge key={t} variant="outline" className="rounded-full">
                {t}
              </Badge>
            ))}
          </div>
        </Section>

        <Separator className="my-8" />

        {/* Projects */}
        <Section
          id="projects"
          title="Projects"
          desc="Real, reproducible projects showing CI/CD, IaC, Kubernetes, and observability in action."
        >
          <div className="flex items-center gap-2 mb-4">
            <Search className="h-4 w-4" />
            <Input
              placeholder="Search by tool, tag, or title…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="max-w-sm"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((p) => (
              <Card key={p.title} className="hover:shadow-sm transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Boxes className="h-5 w-5" /> {p.title}
                  </CardTitle>
                  <CardDescription>{p.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <Tag key={s}>{s}</Tag>
                    ))}
                  </div>
                  {p.highlights?.length ? (
                    <ul className="text-sm list-disc pl-5 space-y-1 text-muted-foreground">
                      {p.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  ) : null}
                  <div className="flex flex-wrap gap-2">
                    {p.links?.github && (
                      <Button asChild variant="outline" className="gap-2">
                        <a href={p.links.github}>
                          <Github className="h-4 w-4" /> Code
                        </a>
                      </Button>
                    )}
                    {p.links?.demo && (
                      <Button asChild variant="outline" className="gap-2">
                        <a href={p.links.demo}>
                          <ExternalLink className="h-4 w-4" /> Live
                        </a>
                      </Button>
                    )}
                    {p.links?.writeup && (
                      <Button asChild variant="ghost" className="gap-2">
                        <a href={p.links.writeup}>
                          <LinkIcon className="h-4 w-4" /> Write‑up
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Separator className="my-8" />

        {/* Experience */}
        <Section
          id="experience"
          title="Experience"
          desc="Hands‑on, impact‑focused experience."
        >
          <div className="space-y-4">
            {EXPERIENCE.map((e) => (
              <Card key={e.role}>
                <CardHeader>
                  <CardTitle className="text-base">{e.role} · {e.org}</CardTitle>
                  <CardDescription>{e.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm list-disc pl-5 space-y-2 text-muted-foreground">
                    {e.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Separator className="my-8" />

        {/* Certifications */}
        <Section id="certs" title="Certifications">
          <div className="flex flex-wrap gap-2">
            {CERTS.map((c) => (
              <Badge key={c.name} className="rounded-full">
                {c.name} · {c.year}
              </Badge>
            ))}
          </div>
        </Section>

        <Separator className="my-8" />


        <Section
          id="blog"
          title="DevOps Learning Logs"
          desc="I document my DevOps learning and hands-on practice."
>
          <div className="grid md:grid-cols-3 gap-4">
            {BLOGS.map((b) => (
              <Card key={b.title}>
                <CardHeader>
                  <CardTitle className="text-base">{b.title}</CardTitle>
                  <CardDescription>{b.desc}</CardDescription>
                </CardHeader>

                <CardContent>
                  <Button asChild variant="outline" size="sm">
                    <a href={b.link} target="_blank">
                      Read More
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>


        <Separator className="my-8" />

        {/* Contact */}
        <Section
          id="contact"
          title="Contact"
          desc="Open to DevOps Engineer, Cloud Engineer and SRE roles. Available for interviews."
        >
          <Card className="max-w-2xl">
            <CardContent className="pt-6">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const data = new FormData(form);
                  const body = encodeURIComponent(
                    `Hi ${PROFILE.name},%0D%0A%0D%0A` +
                      `${data.get("message")}%0D%0A%0D%0A— ${data.get("name")} (${data.get(
                        "email"
                      )})`
                  );
                  window.location.href = `mailto:${PROFILE.email}?subject=Portfolio%20Inquiry&body=${body}`;
                }}
                className="grid gap-4"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm">Name</label>
                    <Input name="name" required placeholder="Your name" />
                  </div>
                  <div>
                    <label className="text-sm">Email</label>
                    <Input name="email" type="email" required placeholder="you@company.com" />
                  </div>
                </div>
                <div>
                  <label className="text-sm">Message</label>
                  <Textarea name="message" rows={5} required placeholder="What problem are we solving?" />
                </div>
                <div className="flex gap-2">
                  <Button type="submit" className="gap-2">
                    <Mail className="h-4 w-4" /> Send Email
                  </Button>
                  <Button asChild variant="outline" className="gap-2">
                    <a href={PROFILE.links.linkedin}>
                      <Linkedin className="h-4 w-4" /> DM on LinkedIn
                    </a>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </Section>

        <Separator className="my-8" />

        <footer className="py-10 text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} {PROFILE.name}.
        </footer>
      </div>
    </div>
  );
}
