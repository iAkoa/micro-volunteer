import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

const globalStats = [
  { label: "Total Volunteers", value: "2,437" },
  { label: "Tasks Completed", value: "12,384" },
  { label: "Hours Donated", value: "8,512" },
  { label: "Nonprofits Helped", value: "183" },
];

const causeBreakdown = [
  { cause: "Education", tasks: 4200, percentage: 34 },
  { cause: "Environment", tasks: 3100, percentage: 25 },
  { cause: "Health", tasks: 2500, percentage: 20 },
  { cause: "Youth", tasks: 1600, percentage: 13 },
  { cause: "Community", tasks: 984, percentage: 8 },
];

const topVolunteers = [
  { name: "Sarah K.", hours: 142, tasks: 89, badges: 12 },
  { name: "Marcus W.", hours: 128, tasks: 76, badges: 10 },
  { name: "Priya N.", hours: 115, tasks: 68, badges: 11 },
  { name: "James L.", hours: 98, tasks: 61, badges: 9 },
  { name: "Amara T.", hours: 87, tasks: 55, badges: 8 },
];

const milestones = [
  {
    target: "15,000 tasks",
    current: 12384,
    max: 15000,
    label: "Community Goal",
  },
  {
    target: "10,000 hours",
    current: 8512,
    max: 10000,
    label: "Hours Milestone",
  },
  {
    target: "200 nonprofits",
    current: 183,
    max: 200,
    label: "Nonprofit Partners",
  },
];

export default function ImpactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Community Impact</h1>
        <p className="mt-1 text-muted-foreground">
          See the collective difference our volunteers are making
        </p>
      </div>

      {/* Global stats */}
      <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {globalStats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-bold tracking-tight">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Community milestones */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Community Milestones</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {milestones.map((m) => (
            <div key={m.label}>
              <div className="mb-2 flex justify-between text-sm">
                <span className="font-medium">{m.label}</span>
                <span className="text-muted-foreground">
                  {m.current.toLocaleString()} / {m.target}
                </span>
              </div>
              <Progress value={Math.round((m.current / m.max) * 100)} />
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Cause breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Tasks by Cause Area</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {causeBreakdown.map((item) => (
              <div key={item.cause}>
                <div className="mb-1 flex justify-between text-sm">
                  <span>{item.cause}</span>
                  <span className="text-muted-foreground">
                    {item.tasks.toLocaleString()} tasks ({item.percentage}%)
                  </span>
                </div>
                <Progress value={item.percentage} />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Leaderboard */}
        <Card>
          <CardHeader>
            <CardTitle>Top Volunteers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topVolunteers.map((vol, index) => (
                <div key={vol.name}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      <p className="font-medium">{vol.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {vol.hours}h &middot; {vol.tasks} tasks &middot;{" "}
                        {vol.badges} badges
                      </p>
                    </div>
                  </div>
                  {index < topVolunteers.length - 1 && (
                    <Separator className="mt-4" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
