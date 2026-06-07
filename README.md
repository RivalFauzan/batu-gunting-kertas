# Batu-Gunting-Kertas (Rock-Paper-Scissors)

A simple, interactive Rock-Paper-Scissors game that runs entirely inside the browser console. This project was built as a practical way to learn foundational JavaScript concepts such as functions, scoping, conditional logic, and loops.

---

## 🚀 Features

- **Play Against the Computer:** An automated opponent that makes random choices every round.
- **5-Round Game Structure:** The game encapsulates the score tracking and round management inside a main controller function.
- **Case-Insensitive Input:** Players can type their choice in any format (e.g., `batu`, `BATU`, `Gunting`, `gUnTiNg`) safely.
- **Score Tracking:** Keeps track of both human and computer scores, updating them after each round.

---

## 🧠 How the Computer Choice Works

The computer's choice relies on a randomized logic using JavaScript's built-in `Math` object:

1. `Math.random()` generates a random float number between `0` (inclusive) and `1` (exclusive).
2. This float is multiplied by `3` to scale the range.
3. `Math.floor()` rounds the number down to the nearest integer.

This process yields a clean integer of either **0, 1, or 2**, which maps directly to the game choices:

- `0` ➔ Rock (Batu)
- `1` ➔ Paper (Kertas)
- `2` ➔ Scissors (Gunting)

---

## 🛠️ Built With

- **JavaScript (ES6+)** - Core game logic, functions, and scoping.
- **Browser Console & Prompts** - User interface for inputs and game status logging.

---

## 🎮 How to Run the Game

1. **Clone or Download** this repository to your local machine.
2. Open the `index.html` file in any modern web browser (Chrome, Edge, Brave, Firefox, etc.).
3. Open the **Developer Tools / Console** (`F12` or `Right-Click ➔ Inspect ➔ Console`).
