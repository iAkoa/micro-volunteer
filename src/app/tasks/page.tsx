"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { tasks, causeAreas, urgencyColors } from "@/lib/data";

export default function TasksPage() {
  const [search, setSearch] = useState("");
  const [causeFilter, setCauseFilter] = useState<string>("all");
  const [urgencyFilter, setUrgencyFilter] = useState<string>("all");

  const filtered = tasks.filter((task) => {
    const matchesSearch =
      search === "" ||
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.skillsRequired.some((s) =>
        s.toLowerCase().includes(search.toLowerCase())
      );
    const matchesCause =
      causeFilter === "all" || task.causeArea === causeFilter;
    const matchesUrgency =
      urgencyFilter === "all" || task.urgency === urgencyFilter;
    return matchesSearch && matchesCause && matchesUrgency;
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Browse Tasks</h1>
        <p className="mt-1 text-muted-foreground">
          Find a micro-task that matches your skills
        </p>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row">
        <Input
          placeholder="Search tasks or skills..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="sm:max-w-xs"
        />
        <Select value={causeFilter} onValueChange={setCauseFilter}>
          <SelectTrigger className="sm:w-[180px]">
            <SelectValue placeholder="Cause Area" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Causes</SelectItem>
            {causeAreas.map((cause) => (
              <SelectItem key={cause} value={cause}>
                {cause}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={urgencyFilter} onValueChange={setUrgencyFilter}>
          <SelectTrigger className="sm:w-[180px]">
            <SelectValue placeholder="Urgency" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Urgencies</SelectItem>
            <SelectItem value="CRITICAL">Critical</SelectItem>
            <SelectItem value="HIGH">High</SelectItem>
            <SelectItem value="MEDIUM">Medium</SelectItem>
            <SelectItem value="LOW">Low</SelectItem>
          </SelectContent>
        </Select>
        {(search || causeFilter !== "all" || urgencyFilter !== "all") && (
          <Button
            variant="ghost"
            onClick={() => {
              setSearch("");
              setCauseFilter("all");
              setUrgencyFilter("all");
            }}
          >
            Clear filters
          </Button>
        )}
      </div>

      {/* Results */}
      <p className="mb-4 text-sm text-muted-foreground">
        {filtered.length} task{filtered.length !== 1 ? "s" : ""} found
      </p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((task) => (
          <Link key={task.id} href={`/tasks/${task.id}`}>
            <Card className="h-full transition-shadow hover:shadow-md">
              <CardContent className="flex h-full flex-col p-6">
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
                  {task.organization.name}
                </p>
                <p className="mb-4 line-clamp-2 flex-1 text-sm text-muted-foreground">
                  {task.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {task.skillsRequired.slice(0, 2).map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                    {task.skillsRequired.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{task.skillsRequired.length - 2}
                      </Badge>
                    )}
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

      {filtered.length === 0 && (
        <div className="py-16 text-center">
          <p className="text-lg font-medium">No tasks match your filters</p>
          <p className="mt-1 text-muted-foreground">
            Try adjusting your search or filters
          </p>
        </div>
      )}
    </div>
  );
}
