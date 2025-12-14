🚀 NFT Launchpad📜 Project Title and DescriptionThis project is an NFT Launchpad and Minting Site designed specifically for the Scroll of Coronation NFT collection on the Monad Testnet blockchain. It provides a user-friendly frontend interface for users to connect their wallet and mint NFTs directly from the smart contract.✨ FeaturesMonad Testnet Integration: Built to connect and interact with the Monad Testnet environment.Wallet Connection: Seamless connection via common Web3 wallet connectors.Minting Interface: A clear, interactive card for initiating the NFT minting process.Modern UI: A clean, responsive design built with Next.js and Tailwind CSS.⚙️ Tech Stack UsedThis project is a modern full-stack web application with a focus on Web3 interaction.TechnologyPurposeLogo/BadgeNext.jsReact Framework for the frontend structure and routing.TypeScriptPrimary language for type safety and code quality.Tailwind CSSUtility-first CSS framework for fast, consistent styling.Web3 Libraries (Inferred)For Monad Testnet contract interaction (e.g., Wagmi/Viem, Ethers.js)🛠️ Installation & SetupPrerequisitesEnsure you have the following installed locally:Node.js (LTS version recommended)npm or Yarn or pnpm (npm is used in the examples below)Step-by-Step InstructionsClone the RepositoryBashgit clone https://github.com/TheinSoe137/NFT-Launchpad.git
cd NFT-Launchpad
Install DependenciesUse your preferred package manager to install the project dependencies.Bashnpm install
# or
yarn install
# or
pnpm install
Configure Environment Variables (Crucial)This project requires blockchain configuration details (e.g., Monad RPC URL, Contract Addresses).Create a file named .env.local in the root of the project.Add your environment variables. At a minimum, you will likely need:# Your Alchemy/Infura/Monad RPC URL for the network
NEXT_PUBLIC_MONAD_RPC_URL=YOUR_MONAD_TESTNET_RPC_URL

# Address of your deployed NFT Launchpad Smart Contract
NEXT_PUBLIC_CONTRACT_ADDRESS=0x...
🏃 How to Run / UsageStart the Development ServerOnce setup is complete, you can start the local development server:Bashnpm run dev
# or
yarn dev
# or
pnpm dev
Access the ApplicationOpen your browser and navigate to:http://localhost:3000The page will auto-update as you make edits to the source code.Key Files for ModificationFrontend Logic: Modify the code in the app and src directories, particularly files like app/page.tsx, to change the main content and layout.UI Components: Customize reusable components in the components/ui directory.Web3 Logic: Check the lib directory for configuration related to your wallet connectors and Monad network settings.🔗 Link to Live Demo (if applicable)If you have deployed your project (e.g., on Vercel), include the link here.Live Demo Link Here (Example)(Replace this with your actual deployment URL)For deployment, the easiest way is to use the Vercel Platform from the creators of Next.js.
