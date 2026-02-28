# micro-volunteer

A platform connecting volunteers with nonprofits for quick 15-30 minute remote tasks like translation, code review, mentoring, and design — with impact tracking and skill badges.

## Project Overview

- **Target users**: People who want to volunteer but lack time; nonprofits needing small remote help
- **Core value**: Lower the barrier to volunteering by offering bite-sized tasks that fit into any schedule

## Features

1. **Task Discovery Feed** — Browse and filter micro-tasks by skill, cause area, time commitment, urgency
2. **Task Detail** — View full task info with org context, requirements, estimated time, and quick-apply
3. **User Dashboard** — Track active tasks, completion history, hours volunteered, and earned badges
4. **Organization Profiles** — Nonprofit pages showing description, active opportunities, and reviews
5. **Skill Matching** — Set skills and interests to receive personalized task recommendations
6. **Impact Tracking** — Personal impact stats + community-wide global impact counter
7. **Badge System** — Milestone-based badges (first task, 10h, skill mastery, streaks)
8. **User Profiles** — Public profile with bio, skills, availability, and badge showcase

## Architecture

- **Runtime**: Bun
- **Framework**: Next.js 15 (App Router, src/ directory)
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **Database**: PostgreSQL + Prisma
- **API**: Next.js Route Handlers

### Project Structure

```
src/
  app/
    page.tsx                    # Landing page
    layout.tsx                  # Root layout with nav
    tasks/
      page.tsx                  # Task discovery feed
      [id]/page.tsx             # Task detail
    dashboard/page.tsx          # User dashboard
    organizations/[id]/page.tsx # Org profile
    profile/page.tsx            # User profile/settings
    impact/page.tsx             # Community impact stats
    api/
      tasks/route.ts            # Task CRUD
      organizations/route.ts    # Org endpoints
      applications/route.ts     # Task application endpoints
      users/route.ts            # User endpoints
  components/                   # Shared UI components
  components/ui/                # shadcn/ui (auto-managed)
  lib/
    db.ts                       # Prisma client
    utils.ts                    # Utilities (shadcn)
prisma/
  schema.prisma                 # Data model
```

### Data Model

- **User**: id, name, email, bio, avatarUrl, skills, interests, availability
- **Organization**: id, name, description, logoUrl, website, causeArea
- **Task**: id, title, description, skillsRequired, causeArea, timeEstimate, urgency, status, organizationId
- **TaskApplication**: id, userId, taskId, status (applied/accepted/completed), completedAt, hoursLogged
- **Badge**: id, name, description, icon, criteria
- **UserBadge**: id, userId, badgeId, earnedAt
- **Review**: id, userId, organizationId, taskId, rating, comment

### Pages

- `/` — Landing: hero, global impact counter, featured tasks, how-it-works
- `/tasks` — Discovery feed with filters (skill, cause, time, urgency)
- `/tasks/[id]` — Task detail with org info, requirements, apply
- `/dashboard` — Active tasks, history, stats, badges
- `/organizations/[id]` — Org profile with tasks and reviews
- `/profile` — User settings (skills, interests, availability)
- `/impact` — Community impact stats and leaderboard

## Conventions

- TypeScript strict mode
- Bun for runtime and package management
- Server components by default, client components only when needed
- shadcn/ui for all UI components — never build custom when shadcn has it
- Next.js Image for images, Link for navigation
- Prisma for all database operations
- Route Handlers for API endpoints

## Roadmap (implementation order)

1. Prisma schema + DB client
2. Root layout + navigation + footer
3. Landing page (hero, featured tasks, how-it-works, global impact counter)
4. Task discovery feed with filters
5. Task detail page with apply action
6. User dashboard (active tasks, history, stats)
7. Organization profiles
8. Impact tracking page with leaderboard
9. Badge system
10. User profile settings

## Deployment

- **Domain**: https://micro-volunteer.mattheoroffi.com
- **Server**: Coolify on hostinger vps
- **Build**: Docker multi-stage (Bun)
- **Port**: 3000
- **Output**: standalone
