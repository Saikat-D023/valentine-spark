# Valentines-app 💖

A playful and interactive Valentine's Day proposal application built with [Vite](https://vitejs.dev) a React bundler. This app features a "Will you be my Valentine?" flow with a mischievous "No" button and a celebratory finale.

## ✨ Features

- **Interactive Proposal**: A "Yes" and "No" button interface.
- **Dodging "No" Button**: The "No" button actively evades the cursor, making it happily impossible to reject the proposal! It can even dodge off-screen for extra fun.
- **Celebration Screen**: A festive success screen with confetti, sparkles, and a cute cat GIF.
- **Responsive Design**: Works on desktop and mobile (though the dodging button is best experienced on desktop).

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (active LTS or maintenance LTS version).
- [Bun](https://bun.sh/) (optional, but used in this project's commands).

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd valentine-spark
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   bun install
   ```

### Running Locally

Start the development server:

```bash
npm run dev
# or
bun dev
```

Open your browser to the URL shown in the console (usually `http://localhost:8080`).

## 🛠️ Customization

- **Cat GIF**: The celebration GIF is located at `/public/Cute Cat GIF.gif`. You can replace this file with your own favorite GIF (keep the name or update `src/components/CelebrationScreen.tsx`).
- **Dodge Intensity**: Modify `src/components/DodgeButton.tsx` to change how far the "No" button moves.
- **Text & Colors**: Adjust the text in `src/components/ProposalScreen.tsx` and colors in `tailwind.config.ts`.

## 📦 Tech Stack

- **Framework**: React + Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Animations**: Framer Motion
- **Language**: TypeScript

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Made with 💝 for your special someone.
