const { jsPDF } = require("jspdf");

function generatePDF() {
    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.text("Git Walkthrough for Students", 20, 20);

    doc.setFontSize(16);
    doc.text("1. Installing Git", 20, 40);
    doc.text("Follow the instructions on the official Git website to install Git on your machine.", 20, 50);

    doc.text("2. Creating a Basic index.html File", 20, 70);
    doc.text("Create a new file named index.html and add basic HTML structure.", 20, 80);

    doc.text("3. Initializing a Git Repository", 20, 100);
    doc.text("Use the command 'git init' in your terminal to initialize a new Git repository.", 20, 110);

    doc.text("4. Adding and Committing Your First Version", 20, 130);
    doc.text("Use 'git add .' to stage your changes and 'git commit -m \"Initial commit\"' to commit.", 20, 140);

    doc.text("5. Registering for GitHub", 20, 160);
    doc.text("Go to GitHub and create an account if you don't have one.", 20, 170);

    doc.text("6. Creating a New PRIVATE Repository on GitHub", 20, 190);
    doc.text("Create a new repository and set it to private.", 20, 200);

    doc.text("7. Creating a Personalized Access Token on GitHub", 20, 220);
    doc.text("Generate a new access token in your GitHub settings.", 20, 230);

    doc.text("8. Pushing the Local Repo to GitHub (Private)", 20, 250);
    doc.text("Use 'git remote add origin <repository-url>' and 'git push -u origin master'.", 20, 260);

    doc.text("9. Checking if Everything Went Well", 20, 280);
    doc.text("Verify your repository on GitHub to ensure everything is uploaded correctly.", 20, 290);

    doc.text("10. Mini Quiz", 20, 310);
    doc.text("Take the quiz to test your understanding of the steps.", 20, 320);

    doc.text("11. PDF Summary", 20, 340);
    doc.text("This PDF summarizes the steps you have learned.", 20, 350);

    doc.save("Git_Walkthrough_Summary.pdf");
}

module.exports = { generatePDF };