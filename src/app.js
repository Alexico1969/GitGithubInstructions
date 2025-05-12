const steps = [
    {
        title: "Step 1: Install Git",
        content: "To install Git, visit the official Git website and download the installer for your operating system. Follow the installation instructions provided."
    },
    {
        title: "Step 2: Create a Basic index.html File",
        content: "Open your text editor and create a new file named 'index.html'. Add the basic HTML structure to this file."
    },
    {
        title: "Step 3: Initialize a Git Repository",
        content: "Open your terminal or command prompt, navigate to the directory where your 'index.html' file is located, and run the command 'git init' to initialize a new Git repository."
    },
    {
        title: "Step 4: Add and Commit Your First Version",
        content: "Run 'git add index.html' to stage your file, then commit it with 'git commit -m \"Initial commit\"'."
    },
    {
        title: "Step 5: Register for GitHub",
        content: "Go to GitHub's website and sign up for a new account if you don't have one."
    },
    {
        title: "Step 6: Create a New PRIVATE Repository on GitHub",
        content: "Once logged in, click on 'New' to create a new repository. Make sure to select 'Private' for the repository visibility."
    },
    {
        title: "Step 7: Create a Personalized Access Token on GitHub",
        content: "Go to your GitHub settings, navigate to 'Developer settings', then 'Personal access tokens'. Generate a new token with the necessary permissions."
    },
    {
        title: "Step 8: Push the Local Repo to GitHub (Private)",
        content: "In your terminal, run 'git remote add origin <your-repo-url>' followed by 'git push -u origin master' to push your local repository to GitHub."
    },
    {
        title: "Step 9: Check if Everything Went Well",
        content: "Visit your GitHub repository page to confirm that your files have been uploaded successfully."
    },
    {
        title: "Step 10: Mini Quiz",
        content: "Take the mini quiz to test your understanding of the steps you just completed."
    },
    {
        title: "Step 11: Download PDF",
        content: "Click the link to download a PDF summarizing all the steps and information covered in this walkthrough."
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const stepContainer = document.getElementById("steps");
    steps.forEach(step => {
        const stepElement = document.createElement("div");
        stepElement.classList.add("step");
        stepElement.innerHTML = `<h2>${step.title}</h2><p>${step.content}</p>`;
        stepContainer.appendChild(stepElement);
    });
});