window.onload = function () {
    window.resizeTo(400, 200);
};

document.getElementById('submitForm').addEventListener('click', function () {
    const summaryData = {
        memberName: document.getElementById('memberName').value,
        item: document.getElementById('item').value,
        diagnosis: document.getElementById('diagnosis').value,
        nextSteps: document.getElementById('nextSteps').value,
        nextStepsDetails: document.getElementById('nextStepsDetails').value,
        partsNeeded: document.getElementById('partsNeeded').value,
        partsList: document.getElementById('partsList').value,
        unlimitedMember: document.getElementById('unlimitedMember').value,
    };

    let templateScript = `Thank you for opening the Frontdoor, ${summaryData.memberName}!\n\n`;
    templateScript += `You called in today about ${summaryData.item}\n\n`;
    templateScript += `With your help, we were able to ${summaryData.diagnosis}\n\n`;

    if (summaryData.nextSteps === 'yes') {
        templateScript += `Next Steps:\n<ul>`;
        const nextStepsList = summaryData.nextStepsDetails.split('\n').filter(Boolean);
        nextStepsList.forEach(step => {
            templateScript += `<li>${step}</li>`;
        });
        templateScript += `</ul>\n\n`;
    }

    if (summaryData.partsNeeded === 'yes') {
        templateScript += `Parts Needed:\n<ul>`;
        const partsList = summaryData.partsList.split('\n').filter(Boolean);
        partsList.forEach(part => {
            templateScript += `<li>${part}</li>`;
        });
        templateScript += `</ul>\n\n`;
    }

    templateScript += `We look forward to your next call, and our Experts are available 7 days a week from 6:00 AM to 9:00 PM CST.\n\n`;
    templateScript += `Your survey response is greatly appreciated, and we would REALLY appreciate you telling your friends and family about us. Thanks again.\n\n`;

    if (summaryData.unlimitedMember === 'no') {
        templateScript += `Enhance your Frontdoor experience by checking out the perks of our Unlimited Membership.\n\n`;
    }

    if (summaryData.unlimitedMember === 'yes') {
        templateScript += `Thank you for being part of the Frontdoor Family.`;
    }

    // Open a new window with the filled-in template
    const summaryWindow = window.open('', 'Summary Window', 'width=400,height=auto');
    summaryWindow.document.write('<html><head><title>Call Summary</title>');
    summaryWindow.document.write('<style>');
    summaryWindow.document.write('body { font-family: "Arial", sans-serif; background-color: #f4f4f4; color: #333; margin: 20px; font-size: 16px; }');
    // Add other styles as needed
    summaryWindow.document.write('ul { list-style-type: disc; margin-bottom: 10px; }');
    summaryWindow.document.write('</style></head><body>');

    // Display the filled-in template
    summaryWindow.document.write('<h1>Call Summary</h1>');
    templateScript.split('\n').forEach(line => {
        summaryWindow.document.write(`<p>${line}</p>`);
    });

    // Close the HTML document
    summaryWindow.document.write('</body></html>');
});

// Show/hide next steps details based on "Are there next steps?" answer
document.getElementById('nextSteps').addEventListener('change', function () {
    const nextStepsContainer = document.getElementById('nextStepsContainer');
    if (this.value === 'yes') {
        nextStepsContainer.style.display = 'block';
    } else {
        nextStepsContainer.style.display = 'none';
    }
});

// Show/hide parts list based on "Are there parts needed?" answer
document.getElementById('partsNeeded').addEventListener('change', function () {
    const partsNeededContainer = document.getElementById('partsNeededContainer');
    if (this.value === 'yes') {
        partsNeededContainer.style.display = 'block';
    } else {
        partsNeededContainer.style.display = 'none';
    }
});
