# Contributing to SignSpeak

Thank you for your interest in contributing to SignSpeak! This document provides guidelines for contributing to the project.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/OMgaupale1024/sign-language-to-text-converter.git
   cd sign-language-to-text-converter
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Create a new branch** for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### Running Locally
```bash
npm run dev
```
The app will be available at `http://localhost:5173`

### Building for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Code Style Guidelines

### TypeScript
- Use TypeScript for all new files
- Avoid using `any` type
- Define proper interfaces for props and state

### React Components
- Use functional components with hooks
- Keep components small and focused
- Extract reusable logic into custom hooks

### Styling
- Use Tailwind CSS utility classes
- Follow the brutalist design system defined in `/styles/globals.css`
- Maintain the color palette and border/shadow styles

### File Organization
```
components/
  ├── ScreenName.tsx        # Main screen components
  ├── ComponentName.tsx     # Reusable components
  └── ui/                   # Shadcn UI components (don't modify)
```

## Commit Guidelines

Use clear, descriptive commit messages:

```
feat: add gesture filtering to library
fix: resolve dark mode text contrast issue
docs: update README installation steps
style: improve brutalist shadow consistency
refactor: extract gesture detection logic
test: add unit tests for CameraScreen
```

### Commit Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Build process or auxiliary tool changes

## Pull Request Process

1. **Update documentation** if you've changed functionality
2. **Test thoroughly** on both light and dark modes
3. **Ensure responsive design** works on mobile viewports
4. **Update README.md** if you've added new features
5. **Create a Pull Request** with:
   - Clear title describing the change
   - Detailed description of what changed and why
   - Screenshots/GIFs if UI changes are involved
   - Link to any related issues

### PR Checklist
- [ ] Code follows the project's style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] No console errors or warnings
- [ ] Dark mode tested
- [ ] Mobile responsive tested

## Adding New Features

### New Screen Component
1. Create file in `/components/ScreenName.tsx`
2. Export default function component
3. Add route to `App.tsx` if needed
4. Update navigation in `BottomNavigation.tsx`
5. Test in both light and dark themes

### New UI Component
1. Use Shadcn components from `/components/ui/` when possible
2. Follow brutalist design patterns (thick borders, hard shadows)
3. Ensure theme support (light/dark)
4. Add proper TypeScript types

## Design System

### Colors
Maintain the brutalist color palette:
- Pink: `#ff6b9d`
- Purple: `#c084fc`
- Yellow: `#fbbf24`
- Blue: `#60a5fa`
- Cream (light bg): `#fef3c7`
- Dark (dark bg): `#1a1a1a`

### Borders & Shadows
- Borders: `3-6px` solid black
- Shadows: `4-12px` offset, no blur
- Example: `shadow-[6px_6px_0_0_rgba(0,0,0,1)]`

### Typography
- Font: Inter (Google Fonts)
- Headings: Bold, all-caps
- Body: Regular weight

### Animations
- Duration: `0.3s` for most transitions
- Use `motion` (Framer Motion) for complex animations
- Keep animations smooth and purposeful

## Bug Reports

When reporting bugs, include:
- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Browser/device information
- Console errors (if any)

## Feature Requests

When requesting features:
- Explain the use case
- Describe the desired behavior
- Consider how it fits with existing features
- Optional: Provide mockups or examples

## Questions?

- Open an issue with the `question` label
- Check existing issues first to avoid duplicates

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Follow the project's coding standards

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to SignSpeak! 🙌
