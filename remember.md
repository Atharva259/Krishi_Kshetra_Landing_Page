# Project Memory: Krishi Kshetra

This file serves as a reference for the current UI architecture, security protocols, and feature state of the Krishi Kshetra platform.

## 🎨 UI & Design System
- **Theme**: Premium Glassmorphism (Light/Dark support).
- **Core Tokens**:
  - `emerald-to-forest-green` accent gradients.
  - `surface-blur` (10px) for glass effects.
  - Custom `Inter` font stack for a modern feel.
- **Key Components**:
  - **Glass Panels**: Reusable `.glass-panel` class with adaptive borders.
  - **Premium Navigation**: Glassmorphism navbar with a gradient-styled logo.
  - **Interactive Dashboard**:
    - **Soil Moisture**: Real-time line charts (Chart.js).
    - **Water Pump**: Custom premium toggle switch with "Active/Standby" states.
    - **Weather**: Animated pulse icons with drop-shadow glows.
    - **Crop Health**: Circular pulse-ring indicators with health scoring.

## 🔐 Security & Auth Flow
- **Firebase Auth**: Supports Email/Password, Google, and Magic Links.
- **Redirection Logic**:
  - Login/Signup -> Dashboard (automatic).
  - Public Pages: `/`, `/login`, `/signup`.
- **Device MPIN**:
  - 4-digit device-specific security layer.
  - **ProtectedRoute**: Completely blocks rendering of children until MPIN is verified.
  - Stored in `localStorage` per UID; session-verified via `sessionStorage`.

## 🛠️ Technical Stack
- **Framework**: Next.js 16.2.4 (Turbopack).
- **Icons**: Lucide React.
- **Charts**: Chart.js + React-Chartjs-2.
- **State**: Custom `AuthContext` and `MessagingContext`.
- **Styling**: Vanilla CSS with CSS Modules.

## 📍 Current Page Routes
- `/`: Home (Landing Page).
- `/login` / `/signup`: Authentication.
- `/dashboard`: Premium Farm Intelligence.
- `/irrigation`: Water control system.
- `/budget`: Financial planning.
- `/chat`: Encrypted community messaging.
- `/assistant`: AI farm helper.
