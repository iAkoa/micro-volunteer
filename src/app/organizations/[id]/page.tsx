import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { organizations, tasks, urgencyColors } from "@/lib/data";

export function generateStaticParams() {
  return organizations.map((org) => ({ id: org.id }));
}

export default async function OrganizationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const org = organizations.find((o) => o.id === id);

  if (!org) {
    notFound();
  }

  const orgTasks = tasks.filter((t) => t.organizationId === org.id);
  const openTasks = orgTasks.filter((t) => t.status === "OPEN");

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Link
        href="/tasks"
        className="mb-6 inline-block text-sm text-muted-foreground hover:text-foreground"
      >
        &larr; Back to tasks
      </Link>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-2xl font-bold text-primary">
            {org.name.charAt(0)}
          </div>
          <div>
            <h1 className="text-3xl font-bold">{org.name}</h1>
            <div className="mt-2 flex items-center gap-2">
              <Badge variant="outline">{org.causeArea}</Badge>
              {org.website && (
                <a
                  href={org.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  {org.website}
                </a>
              )}
            </div>
          </div>
        </div>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          {org.description}
        </p>
      </div>

      <Separator className="mb-8" />

      {/* Stats */}
      <div className="mb-8 grid grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold">{orgTasks.length}</p>
            <p className="text-sm text-muted-foreground">Total Tasks</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold">{openTasks.length}</p>
            <p className="text-sm text-muted-foreground">Open Tasks</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold">
              {orgTasks.length - openTasks.length}
            </p>
            <p className="text-sm text-muted-foreground">Completed</p>
          </CardContent>
        </Card>
      </div>

      {/* Open tasks */}
      <h2 className="mb-4 text-xl font-semibold">
        Open Tasks ({openTasks.length})
      </h2>
      {openTasks.length === 0 ? (
        <p className="text-muted-foreground">
          No open tasks at the moment. Check back later!
        </p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {openTasks.map((task) => (
            <Link key={task.id} href={`/tasks/${task.id}`}>
              <Card className="transition-shadow hover:shadow-md">
                <CardContent className="p-6">
                  <div className="mb-3 flex items-start justify-between">
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${urgencyColors[task.urgency]}`}
                    >
                      {task.urgency}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      ~{task.timeEstimate} min
                    </span>
                  </div>
                  <h3 className="mb-2 font-semibold">{task.title}</h3>
                  <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
                    {task.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {task.skillsRequired.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}

      <div className="mt-8 text-center">
        <Button variant="outline" asChild>
          <Link href="/tasks">Browse All Tasks</Link>
        </Button>
      </div>
    </div>
  );
}
