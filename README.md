# Chainrails Session Server Demo

A lightweight production-ready Express.js server that demonstrates how to integrate with the **Chainrails SDK** to generate secure session tokens for cross-chain transactions. This demo server handles session creation for Chainrails.

## ✨ Features

- **Express.js Server**: Fast and lightweight HTTP server
- **CORS Support**: Configurable cross-origin resource sharing
- **Environment Configuration**: Flexible setup with environment variables
- **Session Token Generation**: Secure token creation via Chainrails SDK
- **Vercel Deployment Ready**: Pre-configured for serverless deployment

## 📦 Prerequisites

- **Node.js** >= 16.x
- **Chainrails API Key** - Get it from [Chainrails Dashboard](https://chainrails.io)

## 🚀 Installation

### 1. Clone the repository

```bash
git clone https://github.com/horuslabsio/chainrails-session-server-demo
cd chainrails-session-server-demo
```

### 2. Install dependencies

Or using npm:
```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory:

```env
# Chainrails API Configuration
CHAINRAILS_API_KEY=your_api_key_here

# CORS Configuration
CHAINRAILS_DOMAIN_WHITELIST=http://localhost:3000,https://yourdomain.com

# Optional: Fixed Parameters
# If set, these override request body parameters
CHAINRAILS_FIXED_AMOUNT=1000000
CHAINRAILS_FIXED_RECIPIENT=0x...
CHAINRAILS_FIXED_DESTINATION_CHAIN=BASE
CHAINRAILS_FIXED_TOKEN=USDC
```

## ⚙️ Configuration

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `CHAINRAILS_API_KEY` | ✅ | Your Chainrails API key for authentication |
| `PORT` | ❌ | Server port (default: 4000) |
| `CHAINRAILS_DOMAIN_WHITELIST` | ❌ | Comma-separated list of allowed origins for CORS |
| `CHAINRAILS_FIXED_AMOUNT` | ❌ | Fixed token amount (overrides request body) |
| `CHAINRAILS_FIXED_RECIPIENT` | ❌ | Fixed recipient address (overrides request body) |
| `CHAINRAILS_FIXED_DESTINATION_CHAIN` | ❌ | Fixed destination chain (overrides request body) |
| `CHAINRAILS_FIXED_TOKEN` | ❌ | Fixed token type (overrides request body) |

## 💡 Usage

### Start the server

```bash
npm start
```

The server will start on `http://localhost:4000`


## 🚀 Deployment

### Deploy to Vercel

The project includes a `vercel.json` configuration file for easy deployment to Vercel.

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard:
   - `CHAINRAILS_API_KEY`
   - `CHAINRAILS_DOMAIN_WHITELIST`
   - Any other configuration variables

## 🔒 Security Considerations

- Always keep your `CHAINRAILS_API_KEY` secret and never commit it to version control

