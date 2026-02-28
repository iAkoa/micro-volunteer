import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { tasks, urgencyColors } from "@/lib/data";

export function generateStaticParams() {
  return tasks.map((task) => ({ id: task.id }));
}

export default async function TaskDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Link
        href="/tasks"
        className="mb-6 inline-block text-sm text-muted-foreground hover:text-foreground"
      >
        &larr; Back to tasks
      </Link>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Main content */}
        <div className="md:col-span-2">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="outline">{task.causeArea}</Badge>
            <span
              className={`rounded-full px-2 py-0.5 text-xs font-medium ${urgencyColors[task.urgency]}`}
            >
              {task.urgency} priority
            </span>
            <Badge variant="secondary">~{task.timeEstimate} min</Badge>
          </div>

          <h1 className="mb-2 text-3xl font-bold">{task.title}</h1>

          <p className="mb-6 text-muted-foreground">
            Posted by{" "}
            <Link
              href={`/organizations/${task.organizationId}`}
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              {task.organization.name}
            </Link>
          </p>

          <Separator className="mb-6" />

          <div className="mb-6">
            <h2 className="mb-3 text-lg font-semibold">Description</h2>
            <p className="leading-relaxed text-muted-foreground">
              {task.description}
            </p>
          </div>

          <div className="mb-6">
            <h2 className="mb-3 text-lg font-semibold">Skills Required</h2>
            <div className="flex flex-wrap gap-2">
              {task.skillsRequired.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <Button size="lg" className="w-full sm:w-auto">
            Apply for This Task
          </Button>
        </div>

        {/* Sidebar — Organization Info */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Organization</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="mb-2 font-semibold">
                {task.organization.name}
              </h3>
              <p className="mb-3 text-sm text-muted-foreground">
                {task.organization.description}
              </p>
              <Badge variant="outline">{task.organization.causeArea}</Badge>
              {task.organization.website && (
                <p className="mt-3">
                  <a
                    href={task.organization.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    Visit website &rarr;
                  </a>
                </p>
              )}
              <Separator className="my-4" />
              <Button variant="outline" className="w-full" asChild>
                <Link href={`/organizations/${task.organizationId}`}>
                  View Organization
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle className="text-base">Task Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Time estimate</span>
                <span className="font-medium">~{task.timeEstimate} min</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Urgency</span>
                <span className="font-medium">{task.urgency}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status</span>
                <span className="font-medium">{task.status}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
