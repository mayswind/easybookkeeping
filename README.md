# ezBookkeeping

[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/mayswind/ezbookkeeping/blob/master/LICENSE)
[![Latest Build](https://img.shields.io/github/actions/workflow/status/mayswind/ezbookkeeping/docker-snapshot.yml?branch=main)](https://github.com/mayswind/ezbookkeeping/actions)
[![Go Report](https://goreportcard.com/badge/github.com/mayswind/ezbookkeeping)](https://goreportcard.com/report/github.com/mayswind/ezbookkeeping)
[![Latest Docker Image Size](https://img.shields.io/docker/image-size/mayswind/ezbookkeeping.svg?style=flat)](https://hub.docker.com/r/mayswind/ezbookkeeping)
[![Latest Release](https://img.shields.io/github/release/mayswind/ezbookkeeping.svg?style=flat)](https://github.com/mayswind/ezbookkeeping/releases)

## Introduction

ezBookkeeping is a simple, lightweight personal bookkeeping app that you can host yourself. It works on almost any platform, including Windows, macOS, and Linux, and supports various processor architectures like x86, amd64, and ARM. You can even run it on a Raspberry device! The app supports multiple databases, including SQLite and MySQL. If you're not familiar with server setup, you can use Docker to deploy it with a single command.

Try the Online Demo: [https://ezbookkeeping-demo.mayswind.net](https://ezbookkeeping-demo.mayswind.net)

## Why Choose ezBookkeeping?
- **Open Source & Self-Hosted** – Full control over your data.
- **Lightweight & Fast** – Runs smoothly on almost any device.
- **Easy Installation** – No coding knowledge required!
  - Supports Docker for quick setup.
  - Works with different databases (SQLite, MySQL, PostgreSQL, etc.).
  - Compatible with multiple operating systems and hardware (Windows, macOS, Linux, Raspberry Pi, etc.).
- **User-Friendly Interface** – Designed for both desktop and mobile.
  - Feels like a native app on mobile devices.
  - Two-level account and category structure.
  - Predefined expense/income categories.
  - Location-based tracking and map support.
  - Powerful search and filtering tools.
  - Interactive statistics and analytics.
  - Dark mode support.
- **Other Features**
  - Supports multiple currencies with automatic exchange rate updates.
  - Works across different time zones.
- **Security & Privacy**
  - Two-factor authentication for added security.
  - App lock via PIN code or WebAuthn.
- **Data Management**
  - Easily import and export your data.

## Screenshots

### Desktop Version
![ezBookkeeping](https://raw.githubusercontent.com/wiki/mayswind/ezbookkeeping/img/desktop/en.png)

### Mobile Version
![ezBookkeeping](https://raw.githubusercontent.com/wiki/mayswind/ezbookkeeping/img/mobile/en.png)

## How to Install ezBookkeeping

### **Option 1: Quick Install with Docker** (Recommended)
If you don't want to deal with manual setup, use Docker for a one-command installation.

#### **Step 1: Install Docker**
If you haven't installed Docker, follow the official guide: [Docker Installation](https://www.docker.com/get-started)

#### **Step 2: Run ezBookkeeping**
- To install the latest stable version:
  ```sh
  docker run -p 8080:8080 mayswind/ezbookkeeping
  ```
- To install the latest development build:
  ```sh
  docker run -p 8080:8080 mayswind/ezbookkeeping:latest-snapshot
  ```

### **Option 2: Install from Pre-Built Binary**
Download the latest release from [GitHub Releases](https://github.com/mayswind/ezbookkeeping/releases) and follow the instructions for your platform.

#### **Linux / macOS**
```sh
./ezbookkeeping server run
```

#### **Windows**
```sh
.\ezbookkeeping.exe server run
```
By default, the app runs on port **8080**. You can access it at:
```
http://{YOUR_HOST_ADDRESS}:8080/
```

### **Option 3: Build from Source (For Advanced Users)**
If you're a developer and want to compile the app yourself, install the following dependencies:
- [Golang](https://golang.org/)
- [GCC](http://gcc.gnu.org/)
- [Node.js](https://nodejs.org/)
- [NPM](https://www.npmjs.com/)

Then, download the source code and run:

#### **Linux / macOS**
```sh
./build.sh package -o ezbookkeeping.tar.gz
```
This creates a file named `ezbookkeeping.tar.gz`.

#### **Windows**
```sh
.\build.bat package -o ezbookkeeping.zip
```
This creates a file named `ezbookkeeping.zip`.

### **Building a Docker Image**
If you want to create your own Docker image, install Docker and run:
```sh
./build.sh docker
```

## Documentation & Support
- **English**: [ezBookkeeping Documentation](http://ezbookkeeping.mayswind.net)
- **简体中文 (Simplified Chinese)**: [ezBookkeeping 文档](http://ezbookkeeping.mayswind.net/zh_Hans)

## License
This project is licensed under the **MIT License**. Read more here: [MIT License](https://github.com/mayswind/ezbookkeeping/blob/master/LICENSE)

## Need Help?
If you run into any issues, check the [GitHub Issues](https://github.com/mayswind/ezbookkeeping/issues) section or ask for help in the project's discussions.
