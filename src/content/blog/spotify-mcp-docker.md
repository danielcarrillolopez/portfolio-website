---
title: "Spotify MCP: Bridging AI and Music via Docker"
date: "March 08, 2026"
excerpt: "A technical guide to setting up the Spotify MCP server using Docker and PowerShell, featuring cross-platform troubleshooting fixes."
category: "Tutorials"
readTime: "6 min read"
image: "/images/projects/robotics-kit.jpg"
tags: ["Docker", "AI", "Automation", "PowerShell", "MCP"]
---

Today I finally cleared the last hurdle in my local automation stack: **Spotify integration via the Model Context Protocol (MCP)**. For a long time, I wanted my AI assistants to have context of what I was listening to while I work, or even be able to control my playback. However, setting this up on Windows (win32) with local Python dependencies was a headache. 

The solution? **Docker**. 

## Why Docker for MCP?
Using Docker avoids the "it works on my machine" problem. It packages the entire Spotify MCP environment into a container, ensuring that Python version mismatches or missing libraries don't break the server. It’s cleaner, more portable, and easier to manage in a long-term engineering workflow.

## The PowerShell Nuance
One of the biggest traps I fell into was the line-continuation character. Most guides are written for Linux (using `
`), but **PowerShell** requires the backtick (`` ` ``). Using the wrong one causes the terminal to fail silently or execute partial commands.

### The Correct PowerShell Setup:
```powershell
docker run --rm -it `
  -v "C:\Users\yourname\.cache\spotify-mcp:/app/.cache" `
  -e SPOTIPY_CLIENT_ID="your-id" `
  -e SPOTIPY_CLIENT_SECRET="your-secret" `
  -e SPOTIPY_REDIRECT_URI="http://127.0.0.1:8888/callback" `
  -e SPOTIPY_CACHE_PATH="/app/.cache/token" `
  allesy/spotify-mcp:latest python -u -m spotify_mcp.cli.auth_init
```

## Setup Milestones
1.  **Developer Credentials:** You must create an app in the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard) and whitelist your email in "User Management."
2.  **Redirect URI:** The URI must *exactly* match `http://127.0.0.1:8888/callback`. Even a trailing slash can break the OAuth flow.
3.  **Authentication Flow:** After running the Docker command, copy the URL to your browser, authorize, and then paste the *entire* resulting URL back into the terminal.

## Integrating with Claude Desktop
Once authenticated, you can add the server to your `claude_desktop_config.json`:
```json
{
  "mcpServers": {
    "spotify": {
      "command": "docker",
      "args": [
        "run", "--rm", "-i",
        "-v", "C:/Users/yourname/.cache/spotify-mcp:/app/.cache",
        "-e", "SPOTIPY_CLIENT_ID",
        "-e", "SPOTIPY_CLIENT_SECRET",
        "allesy/spotify-mcp:latest"
      ]
    }
  }
}
```

## Lessons Learned
It appears likely that the best automation is the one that removes the most friction. By shifting the Spotify MCP to Docker, I’ve made my system more resilient. Intellectual hesitation made me think Docker was "overkill" for a simple music server, but nuance suggests that reliability is always worth the initial setup cost.

**Tasks & Questions:**
- [x] Successfully authenticated and controlled playback via CLI.
- [ ] Research how to trigger specific playlists based on my "Engineering Focus" timer.
- [ ] Experiment with other Docker-based MCP servers for local database management.

In the end, engineering is about building robust bridges between disparate systems. Whether it’s a haptic band for the deaf or a music server for an AI, the principles of clear communication and modular design remain the same.

---
*For technical inquiries or a deeper dive into my Docker-based automation stack, please contact Daniel Carrillo directly.*
