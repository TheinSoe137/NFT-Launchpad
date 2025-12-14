# 🚀 NFT Launchpad

## 📜 Project Title and Description

This project is an **NFT Launchpad and Minting Site** designed specifically for the Scroll of Coronation NFT collection on the **Monad Testnet** blockchain. It provides a user-friendly frontend interface for users to connect their wallet and mint NFTs directly from the smart contract.

> Built using Next.js and Monad Testnet to deliver a seamless, high-performance minting experience.

### ✨ Key Features
* **Monad Testnet Integration:** Seamlessly connects and interacts with the Monad Testnet environment.
* **Wallet Connection:** Easy and secure connection via common Web3 wallet connectors (e.g., using Wagmi or similar libraries).
* **Intuitive Minting Interface:** A clear, interactive card component for initiating the NFT minting process.
* **Modern UI:** A clean, responsive design built with Tailwind CSS and Next.js.

---

## ⚙️ Tech Stack Used

This project leverages modern frontend and Web3 technologies to deliver a fast and robust decentralized application (dApp).

| Technology | Purpose | Badge |
| :--- | :--- | :--- |
| **Next.js** | React Framework for the frontend structure, routing, and server-side rendering. | [![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/) |
| **TypeScript** | Primary language for type safety, ensuring predictable and robust code. | [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) |
| **Tailwind CSS** | Utility-first CSS framework for rapid, highly customizable styling. | [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/) |
| **Monad Testnet** | The target blockchain environment for contract deployment and interaction. | [![Blockchain](https://img.shields.io/badge/Blockchain-Monad-yellow?style=for-the-badge&logo=ethereum&logoColor=white)](https://monad.xyz/) |

---

## 🛠️ Installation & Setup

### Prerequisites

You need to have **Node.js** and a package manager installed on your machine.

* [Node.js](https://nodejs.org/) (LTS version recommended)
* `npm` (Comes with Node.js) or `yarn` or `pnpm`

### Step-by-Step Instructions

1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/TheinSoe137/NFT-Launchpad.git](https://github.com/TheinSoe137/NFT-Launchpad.git)
    cd NFT-Launchpad
    ```

2.  **Install Dependencies**
    Use your preferred package manager:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Configure Environment Variables (Crucial)**
    Create a file named `.env.local` in the root of your project directory and populate it with the required blockchain variables:

    ```bash
    # Example .env.local content
    
    # 1. Your Monad Testnet RPC endpoint
    NEXT_PUBLIC_MONAD_RPC_URL=YOUR_MONAD_TESTNET_RPC_URL 

    # 2. Address of your deployed NFT Launchpad Smart Contract
    NEXT_PUBLIC_CONTRACT_ADDRESS=0x...
    
    # 3. (Optional) Any required wallet connect project ID (e.g., WalletConnect V2)
    NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=...
    ```

---

## 🏃 How to Run / Usage

### Start the Development Server

Execute the following command to start the application:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
