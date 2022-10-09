const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Prevents the default mini-infobar or install dialog from appearing
    event.preventDefault();
    // Save the event because you'll need to trigger it later.
    window.deferredPrompt = event;
    // Show the button
    butInstall.style.visibility = 'visible';

    // TODO: Implement a click event handler on the `butInstall` element
    butInstall.addEventListener('click', async () => {
        const eventPrompt = window.deferredPrompt;
        if(!eventPrompt) {
            return;
        }
        // Show the prompt installation dialog
        eventPrompt.prompt();
        // reset the prompt back to null as it can only be used once
        window.deferredPrompt = null;
        // hide the button
        butInstall.setAttribute('disabled', true);
    });
});



// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
    console.log('👍', 'appinstalled', event);
  });
