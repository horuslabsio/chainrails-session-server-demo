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
```

## ⚙️ Configuration

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `CHAINRAILS_API_KEY` | ✅ | Your Chainrails API key for authentication |
| `PORT` | ❌ | Server port (default: 4000) |
| `CHAINRAILS_DOMAIN_WHITELIST` | ❌ | Comma-separated list of allowed origins for CORS |

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

## 🔒 Security Considerations

- Always keep your `CHAINRAILS_API_KEY` secret and never commit it to version control

