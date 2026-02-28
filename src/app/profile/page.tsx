"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { allSkills, causeAreas, userBadges } from "@/lib/data";

export default function ProfilePage() {
  const [name, setName] = useState("Alex Johnson");
  const [email, setEmail] = useState("alex@example.com");
  const [bio, setBio] = useState(
    "Full-stack developer passionate about using tech for social good."
  );
  const [availability, setAvailability] = useState("weekends");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([
    "React",
    "Code Review",
    "Spanish",
    "Translation",
  ]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    "Education",
    "Environment",
  ]);

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Profile Settings</h1>
        <p className="mt-1 text-muted-foreground">
          Manage your profile, skills, and preferences
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          {/* Basic info */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium">Name</label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Email</label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Bio</label>
                <Input value={bio} onChange={(e) => setBio(e.target.value)} />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Availability
                </label>
                <Select value={availability} onValueChange={setAvailability}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekdays">Weekdays</SelectItem>
                    <SelectItem value="weekends">Weekends</SelectItem>
                    <SelectItem value="evenings">Evenings</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-sm text-muted-foreground">
                Select skills you can contribute. These help match you with
                relevant tasks.
              </p>
              <div className="flex flex-wrap gap-2">
                {allSkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant={
                      selectedSkills.includes(skill) ? "default" : "outline"
                    }
                    className="cursor-pointer"
                    onClick={() => toggleSkill(skill)}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Interests */}
          <Card>
            <CardHeader>
              <CardTitle>Cause Interests</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-sm text-muted-foreground">
                Select causes you care about to see relevant tasks first.
              </p>
              <div className="flex flex-wrap gap-2">
                {causeAreas.map((cause) => (
                  <Badge
                    key={cause}
                    variant={
                      selectedInterests.includes(cause) ? "default" : "outline"
                    }
                    className="cursor-pointer"
                    onClick={() => toggleInterest(cause)}
                  >
                    {cause}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Badge showcase sidebar */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Badge Showcase</CardTitle>
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
              <CardTitle>Profile Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <span className="text-muted-foreground">Name</span>
                <p className="font-medium">{name}</p>
              </div>
              <Separator />
              <div>
                <span className="text-muted-foreground">Skills</span>
                <div className="mt-1 flex flex-wrap gap-1">
                  {selectedSkills.map((s) => (
                    <Badge key={s} variant="secondary" className="text-xs">
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>
              <Separator />
              <div>
                <span className="text-muted-foreground">Interests</span>
                <div className="mt-1 flex flex-wrap gap-1">
                  {selectedInterests.map((i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {i}
                    </Badge>
                  ))}
                </div>
              </div>
              <Separator />
              <div>
                <span className="text-muted-foreground">Availability</span>
                <p className="font-medium capitalize">{availability}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
