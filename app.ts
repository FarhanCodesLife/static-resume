document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get values from the form
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const summary = (document.getElementById('summary') as HTMLTextAreaElement).value;

    // Update the resume section
    (document.getElementById('resumeName') as HTMLElement).innerText = name;
    (document.getElementById('resumeAddress') as HTMLElement).innerText = address;
    (document.getElementById('resumeEmail') as HTMLElement).innerText = email;
    (document.getElementById('resumePhone') as HTMLElement).innerText = phone;
    (document.getElementById('resumeSummary') as HTMLElement).innerText = summary;

    // Show the resume section
    document.getElementById('resume')?.classList.remove('hidden');
});
