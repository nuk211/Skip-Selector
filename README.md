# Skip Selector - Modern React Application

A professional, responsive, and themeable application for selecting skip sizes for waste management services. This project features a modern user interface with dark/light mode support, animated components, and a responsive design that works across all devices.

![Skip Selector App](https://via.placeholder.com/800x400?text=Skip+Selector+Application)

## Features

- ✅ **Dark/Light Theme Support** - Attractive color schemes for both modes with automatic system preference detection
- ✅ **Responsive Design** - Works seamlessly on mobile, tablet and desktop
- ✅ **Modern UI Elements** - Interactive components with subtle animations and transitions
- ✅ **Progress Tracking** - Visual progress indicator showing the booking journey
- ✅ **Interactive Cards** - Visual skip selection with detailed information
- ✅ **Accessibility** - WCAG compliant with proper focus indicators and reduced motion support

## Technology Stack

- React 19
- CSS3 with CSS Variables for theming
- Context API for state management
- Custom Hooks for data fetching
- Responsive design with CSS Grid and Flexbox

## Design Approach

### Theming System

The application uses a robust theming system based on CSS variables that enables seamless switching between dark and light modes. The theme is controlled via a Context API provider that:

- Detects user system preferences
- Stores user preference in local storage
- Provides an intuitive toggle UI component
- Applies theme changes in real-time

### Visual Design

The design follows these key principles:

1. **Clarity** - Clear visual hierarchy, readable typography, and intuitive interactions
2. **Consistency** - Uniform spacing, consistent color usage, and cohesive component design
3. **Feedback** - Interactive elements provide visual feedback through subtle animations
4. **Aesthetics** - Modern, clean visual style with appropriate use of shadows, gradients, and transitions

### Component Architecture

Components are built with reusability and maintainability in mind:

- **SkipSelector** - Main orchestrating component that manages state and layout
- **ProgressBar** - Visual indicator of the user's journey through the selection process
- **SkipCard** - Interactive card displaying skip information and selection controls
- **ThemeToggle** - Animated toggle for switching between themes
- **LoadingSpinner** - Feedback component for asynchronous operations

### UX Enhancements

- **Entrance Animations** - Components animate into view to create a polished experience
- **Interactive Elements** - Buttons, cards, and toggles have hover/focus states with subtle transitions
- **Loading States** - Clear indicators when data is loading
- **Error Handling** - User-friendly error messages with recovery options
- **Responsive Behavior** - Layout adapts to different screen sizes with appropriate component sizing

## Installation and Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/skip-selector-redesign.git
cd skip-selector-redesign
```
