import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const featuredTasks = [
  {
    id: "1",
    title: "Translate FAQ Page to Spanish",
    org: "GreenEarth Foundation",
    causeArea: "Environment",
    timeEstimate: 20,
    urgency: "HIGH" as const,
    skills: ["Spanish", "Translation"],
  },
  {
    id: "2",
    title: "Review Donation Page Code",
    org: "CodeForGood",
    causeArea: "Education",
    timeEstimate: 30,
    urgency: "MEDIUM" as const,
    skills: ["React", "Code Review"],
  },
  {
    id: "3",
    title: "Design Social Media Banner",
    org: "Youth Mentors Network",
    causeArea: "Youth",
    timeEstimate: 15,
    urgency: "LOW" as const,
    skills: ["Design", "Canva"],
  },
];

const urgencyColors = {
  LOW: "bg-green-100 text-green-800",
  MEDIUM: "bg-yellow-100 text-yellow-800",
  HIGH: "bg-orange-100 text-orange-800",
  CRITICAL: "bg-red-100 text-red-800",
};

const stats = [
  { label: "Volunteers", value: "2,400+" },
  { label: "Tasks Completed", value: "12,000+" },
  { label: "Hours Donated", value: "8,500+" },
  { label: "Nonprofits Helped", value: "180+" },
];

const steps = [
  {
    step: "1",
    title: "Set Your Skills",
    description: "Tell us what you're good at — coding, writing, design, languages, and more.",
  },
  {
    step: "2",
    title: "Pick a Task",
    description: "Browse bite-sized tasks that match your skills. Each takes 15-30 minutes.",
  },
  {
    step: "3",
    title: "Make an Impact",
    description: "Complete the task, earn badges, and track your contribution to the community.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center md:py-32">
          <Badge variant="secondary" className="mb-4">
            15-30 min tasks that change lives
          </Badge>
          <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Volunteer in minutes,{" "}
            <span className="text-primary">not hours</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Connect with nonprofits for quick remote tasks — translation, code
            review, mentoring, design. No commute, no long commitments. Just
            real impact.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/tasks">Browse Tasks</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/impact">See Our Impact</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Global Impact Counter */}
      <section className="border-b">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold tracking-tight">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Tasks */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Featured Tasks</h2>
              <p className="mt-1 text-muted-foreground">
                Quick tasks that need your skills right now
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/tasks">View All</Link>
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {featuredTasks.map((task) => (
              <Link key={task.id} href={`/tasks/${task.id}`}>
                <Card className="transition-shadow hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="mb-3 flex items-start justify-between">
                      <Badge variant="outline">{task.causeArea}</Badge>
                      <span
                        className={`rounded-full px-2 py-0.5 text-xs font-medium ${urgencyColors[task.urgency]}`}
                      >
                        {task.urgency}
                      </span>
                    </div>
                    <h3 className="mb-1 font-semibold">{task.title}</h3>
                    <p className="mb-3 text-sm text-muted-foreground">
                      {task.org}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        {task.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        ~{task.timeEstimate} min
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="mb-8 text-center text-2xl font-bold">How It Works</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  {item.step}
                </div>
                <h3 className="mb-2 font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <h2 className="text-2xl font-bold">Ready to make a difference?</h2>
          <p className="mt-2 text-muted-foreground">
            Join thousands of volunteers making an impact in minutes.
          </p>
          <Button size="lg" className="mt-6" asChild>
            <Link href="/tasks">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
