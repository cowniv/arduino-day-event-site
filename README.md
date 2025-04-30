# 16 · Arduino Day Event Site (React Router)

**Roadmap stage:** Phase 5 – React · April 2025
**Inspired by:** Arduino Day Philippines 2025, where I led UI/UX

After designing the Arduino Day PH pages, I rebuilt my own version as a multi-page React app to learn React Router. All the event data lives in JSON files and you can build your own schedule that stays saved after a refresh. Speaker names and the venue are placeholders.

### Features
- Pages: Home, Schedule, Speakers, Speaker detail (`/speakers/:id`), Workshops, Venue, My Schedule, 404
- Shared `Layout` with `<Outlet />` and `NavLink` active styles
- Schedule with day tabs and track filter
- "Add to my schedule" saved in `localStorage`, with a count badge in the nav
- Workshops with seat counts, a progress bar, and reserve/cancel
- Speaker detail page lists that speaker's sessions; unknown ids show the 404 page

### Run
```bash
npm install
