import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { userApplications, userBadges, urgencyColors } from "@/lib/data";

const stats = {
  tasksCompleted: 1,
  hoursVolunteered: 0.5,
  activeTasks: 1,
  badgesEarned: 2,
};

const applicationStatusColors: Record<string, string> = {
  APPLIED: "bg-blue-100 text-blue-800",
  ACCEPTED: "bg-green-100 text-green-800",
  IN_PROGRESS: "bg-yellow-100 text-yellow-800",
  COMPLETED: "bg-emerald-100 text-emerald-800",
  REJECTED: "bg-red-100 text-red-800",
};

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="mt-1 text-muted-foreground">
          Track your volunteer activity and impact
        </p>
      </div>

      {/* Stats cards */}
      <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">Tasks Completed</p>
            <p className="mt-1 text-3xl font-bold">{stats.tasksCompleted}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">Hours Volunteered</p>
            <p className="mt-1 text-3xl font-bold">{stats.hoursVolunteered}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">Active Tasks</p>
            <p className="mt-1 text-3xl font-bold">{stats.activeTasks}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">Badges Earned</p>
            <p className="mt-1 text-3xl font-bold">{stats.badgesEarned}</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Active + History */}
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Your Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              {userApplications.length === 0 ? (
                <div className="py-8 text-center">
                  <p className="text-muted-foreground">No tasks yet</p>
                  <Button className="mt-4" asChild>
                    <Link href="/tasks">Browse Tasks</Link>
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {userApplications.map((app) => (
                    <div key={app.id}>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <Link
                            href={`/tasks/${app.taskId}`}
                            className="font-medium hover:underline"
                          >
                            {app.task.title}
                          </Link>
                          <p className="mt-0.5 text-sm text-muted-foreground">
                            {app.task.organization.name}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`rounded-full px-2 py-0.5 text-xs font-medium ${urgencyColors[app.task.urgency]}`}
                          >
                            {app.task.urgency}
                          </span>
                          <span
                            className={`rounded-full px-2 py-0.5 text-xs font-medium ${applicationStatusColors[app.status]}`}
                          >
                            {app.status.replace("_", " ")}
                          </span>
                        </div>
                      </div>
                      {app.hoursLogged && (
                        <p className="mt-1 text-xs text-muted-foreground">
                          {app.hoursLogged}h logged
                        </p>
                      )}
                      <Separator className="mt-4" />
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Progress towards next badge */}
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Next Badge Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span>5 Hour Hero</span>
                    <span className="text-muted-foreground">0.5 / 5 hours</span>
                  </div>
                  <Progress value={10} />
                </div>
                <div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span>Task Master</span>
                    <span className="text-muted-foreground">1 / 10 tasks</span>
                  </div>
                  <Progress value={10} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Badges sidebar */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Your Badges</CardTitle>
            </CardHeader>
            <CardContent>
              {userBadges.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  Complete tasks to earn badges!
                </p>
              ) : (
                <div className="space-y-4">
                  {userBadges.map((ub) => (
                    <div key={ub.id} className="flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-lg">
                        {ub.badge.icon === "Star" ? "\u2605" : "\u{1F310}"}
                      </div>
                      <div>
                        <p className="font-medium">{ub.badge.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {ub.badge.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full" asChild>
                <Link href="/tasks">Find a Task</Link>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/impact">View Impact</Link>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/profile">Edit Profile</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
