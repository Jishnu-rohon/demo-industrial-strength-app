# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start app**: `npm start`
- **Build app**: `npm run build`
- **Run tests**: `npm test`
- **Run a single test**: `npm test -- <pattern>` (e.g., `npm test -- App.test.tsx`)

## Architecture and Structure

This is a React application bootstrapped with Create React App and written in TypeScript.

### High-Level Structure
- `src/`: Main application source code.
  - `App.tsx`: Root component defining the layout and routing using `react-router-dom`.
  - `Home.tsx`, `PanelA.tsx`, `PanelB.tsx`, `PanelC.tsx`, `Employee.tsx`: Page/View components mapped to specific routes.
  - `Menu.tsx`, `ButtonsPanel.tsx`: Shared UI components.
  - `src/classes/`: Contains business logic and service classes (e.g., `RestClient.ts` for API interactions).
  - `index.tsx`: Entry point of the application.

### Routing
The app uses `react-router-dom` for navigation. Routes are defined in `App.tsx`, including dynamic routing for employees (`/employee/:id`).
