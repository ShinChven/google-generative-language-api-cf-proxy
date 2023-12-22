# Google Generative Language API CloudFlare Proxy

## Introduction

This repository provides a CloudFlare Worker setup to proxy the Google Generative Language API. It's especially useful for users who encounter difficulties accessing the API directly.

## Prerequisites

- A CloudFlare account
- Basic familiarity with terminal/command-line operations

## Setup Instructions

1. **Create a CloudFlare Account:** Sign up for an account at [CloudFlare's website](https://www.cloudflare.com/).

2. **Clone the Repository:** Download or clone this repository to your local machine.

   ```
   git clone [repository-link]
   ```

3. **Install CloudFlare CLI:** Open your terminal and run the following command to install the CloudFlare Wrangler CLI.

   ```
   npm i -g wrangler
   ```

4. **Configure `wrangler.toml`:** Navigate to the cloned repository's directory and update the `wrangler.toml` file with your desired worker name.

   ```
   cd [repository-name]
   vim wrangler.toml
   ```

5. **Deploy the Worker:** Deploy your CloudFlare worker using the following command.

   ```
   npm run deploy
   ```

   This command will automatically compile and upload your worker to CloudFlare.

6. **Set a Domain Trigger:** Go to your CloudFlare dashboard and set a domain in the `Triggers` settings of your worker. This step is crucial for the worker to respond to API requests.

## Usage

```bash
#!/bin/bash

API_KEY="you api key"

PROXY_URL="https://proxy.yourdomain.com"

curl \
  -X POST ${PROXY_URL}'/v1beta/models/gemini-pro:generateContent?key='${API_KEY} \
  -H 'Content-Type: application/json' \
  -d @<(echo '{
  "contents": [
    {
      "parts": [
        { text: "What is Cyberpunk 2077?" }
      ]
    }
  ],
  "generationConfig": {
    "temperature": 0.9,
    "topK": 1,
    "topP": 1,
    "maxOutputTokens": 2048,
    "stopSequences": []
  },
  "safetySettings": [
    {
      "category": "HARM_CATEGORY_HARASSMENT",
      "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
      "category": "HARM_CATEGORY_HATE_SPEECH",
      "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
      "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
      "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
      "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
      "threshold": "BLOCK_MEDIUM_AND_ABOVE"
    }
  ]
}')
```

## Contributing

Your contributions to improve this proxy are welcome. Please feel free to fork the repository, make your changes, and submit a pull request.

## License

[LICENSE](./LICENSE)