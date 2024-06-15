Automated Testing for YT Landing Page

This repository contains automated tests using Playwright for the YT Landing Page.

Table of Contents

	•	Introduction
	•	Setup
	•	Prerequisites
	•	Installation
	•	Configuration
	•	Running Tests
	•	Project Structure
	•	Contributing
	•	License

Introduction

This repository hosts automated tests for the YT Landing Page. The tests are implemented using Playwright, a modern and versatile Node.js library for browser automation. These tests cover critical functionalities and user interactions on the YT Landing Page to ensure quality and reliability.

Setup

Prerequisites

Make sure you have the following installed:

	•	Node.js (version >= 12.18)
	•	npm or yarn package manager
	•	Git

Installation

	1.	Clone the repository:
    ```shell
    git clone https://github.com/ytsymbala/yt-landing-page-automation.git
    ```
    2.	Navigate into the project directory:
    ```shell
    cd yt-landing-page-automation
    ```
    3.	Install dependencies:
    ```shell
    npm install
    ```
    or
    ```shell
    yarn install
    ```
Configuration

No additional configuration is required to run the tests. However, ensure that you have the correct URL of the YT Landing Page set in your test files.

Running Tests

To run the tests, use the following command:
    ```shell
    npm test
    ```
    or
    ```shell
    yarn test
    ```
This command will execute all the tests defined in the repository using Playwright.

Project Structure

The project structure is organized as follows:

yt-landing-page-automation/
├── page-objects/         # Page objects to encapsulate page functionality
│   ├── LoginPage.ts      # Page object for the login page
│   └── ...               # Other relevant page objects
├── tests/                # Test files
│   ├── login.spec.ts     # Example test file for login functionality
│   └── ...               # Other test files
├── .gitignore            # Git ignore file
├── package.json          # npm package configuration
└── README.md             # Project documentation

	•	page-objects/: Contains page objects to encapsulate page-specific functionality and interactions.
	•	tests/: Includes test files that utilize Playwright to automate interactions and assertions on the YT Landing Page.
	•	.gitignore: Specifies files to be ignored by Git, such as node_modules/.
	•	package.json: Configuration file for npm dependencies and scripts.
	•	README.md: Detailed documentation about the project, setup instructions, usage, and other relevant information.

Contributing

Contributions to improve and expand the test coverage are welcome! If you have suggestions, enhancements, or bug fixes, please fork the repository, create a new branch, and submit a pull request.

To contribute, follow these steps:

	1.	Fork the repository.
	2.	Create your feature branch (git checkout -b feature/new-feature).
	3.	Make your changes.
	4.	Commit your changes (git commit -am 'Add new feature').
	5.	Push to the branch (git push origin feature/new-feature).
	6.	Create a new Pull Request.

License

This project is licensed under the MIT License.

Feel free to customize this README further based on specific details of your implementation and any additional setup instructions or guidelines.