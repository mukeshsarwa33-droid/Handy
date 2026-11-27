# Handy

[![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![YouTube](https://img.shields.io/badge/YouTube-Shorts_Automation-FF0000?logo=youtube&logoColor=white)](https://www.youtube.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**Handy** is a YouTube Shorts and workflow automation toolkit featuring repeatable templates, run logs, and AI-assisted scripts.

## Architecture

```mermaid
flowchart LR
    Input["Topic / Script Prompt"] --> Template["Shorts Template
(youtube/shorts-template)"]
    Template --> Claude["AI Workflow Config
(.claude)"]
    Claude --> Run["Automation Run
(youtube/runs)"]
    Run --> Output["Packaged Shorts Assets"]
```

## Quickstart

```bash
git clone https://github.com/mukeshsarwa33-droid/Handy.git
cd Handy
ls -la youtube/shorts-template
```

## License

This project is licensed under the [MIT License](LICENSE).
