# Simple and Modern Day-to-Day Tasks Notes App

## Features

**Create and Edit Notes:** Capture your thoughts quickly by adding new notes. And edit your notes seamlessly.

**Delete Notes:** Completed a task? Simply delete the note associated with it.

## Downloading and installing Node.js and npm

[Installation instructions ](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Setting up your own repository

To create your own version of this project, follow these steps:

1. **Clone this repository**:
    ```bash
    git clone https://github.com/eficode/copilot-notes-app.git
    cd copilot-notes-app
    ```

2. **Create a new repository on GitHub**:
   - Go to GitHub and create a new repository (don't initialize with README, .gitignore, or license)
   - Copy the repository URL

3. **Remove the original remote and add your new repository**:
    ```bash
    git remote remove origin
    git remote add origin NEW_REPO_URL
    ```

4. **Push the code to your new repository**:
    ```bash
    git branch -M main
    git push -u origin main
    ```

Now you have your own copy of the project that you can modify and experiment with!

## Running the application

To run the application, follow these steps:

1. **Install dependencies**:
    ```bash
    npm install
    ```

2. **Start the application**:
    ```bash
    npm run dev
    ```

3. **Run tests** (optional):
    ```bash
    npm run test
    ```

## Enable Copilot coding agent on your repository

Before we can start delegating requests to Copilot, we need to grant access to our repository.

1. In the top right, click your **user icon** and select **Settings**.

1. In the left navigation, expand the **Copilot** section and select **Coding agent**.

1. The **Repository access** field should either have All repositories or `Only selected repositories` and ensure the new repository is selected.

## Explore Copilot coding agent settings in your repository

To check the Copilot coding agent settings for your repository:

1. Go to your repository on GitHub.
2. Click on **Settings** in the repository menu.
3. In the left sidebar, find and select the **Copilot** section.
4. Click on **Coding agent**.
5. Explore the **Internet access**settings. This is the place where the Copilot's access to internet can be restricted. [More information](https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/use-copilot-agents/coding-agent/customize-the-agent-firewall)

This ensures the Copilot coding agent is properly configured for your repository.

## Adding new feature

1. **Create a new issue** in this repository, similar to the [Issue](https://github.com/eficode/copilot-notes-app/issues/1).
2. **Assign the issue to GitHub Copilot Agent**:
   - After creating the issue, you can assign it to `Copilot` using the assignees section on the right sidebar of the issue.
3. **Use GitHub Copilot Agent in your issue**:
   - Once assigned,The issue will have an `👀` reaction to show Copilot is reading the issue.
   - The activity log shows you assigned the issue to Copilot.
   - The issue log includes a linked pull request. 
    
    Copilot Agent can provide ongoing assistance and track progress on the issue.
4. Scroll down slightly to view the timeline and high-level notes provided by Copilot. Click the **View session** button

## Provide Copilot feedback

1. Back in the pull request, click the **Add your review** button.
2. Find the new entry created by Copilot. Hover over a line to show the plus sign. **Click** to open the add comment dialog box.
3. Enter any additional comments and click on **Start a review**.
4. At the top of the changes list, click the **Finish your review** button and select **Submit Review**.
5. After a moment, Copilot will add a new session entry and indicate progress on the timeline. You can also mention `@copilot` in the PR comments if it takes longer for the session to get started
6. Wait for Copilot to finish working on the change and then click the **View changes** button to see the updated activity description.
7. While adding a comment, you can also use the `Copilot` icon in the text field to generate  `Summary`
8. Activate the pull requests by clicking the **Ready to Review** button then click the **Merge** button.

This workflow helps you collaborate and get AI-powered assistance while contributing new features!

## Filtering

Try the Filtering [Issue](https://github.com/eficode/copilot-notes-app/issues/3)


## Refactoring

Try the refactoring [Issue](https://github.com/eficode/copilot-notes-app/issues/2)

## Document the code

Documenting code is always a boring and painful task. However, we can use Copilot to document it for us.

## Other things that can be tried

- Create new features in the code
- Ask Copilot to make the UI better
