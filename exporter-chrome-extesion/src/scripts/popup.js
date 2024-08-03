document.addEventListener('DOMContentLoaded', function() {
    // Load the saved URL from Chrome Storage
    chrome.storage.sync.get(['hisStoryExtUploadUrl'], function(result) {
        if (result.hisStoryExtUploadUrl) {
            document.getElementById('his-story-ext-url').value = result.hisStoryExtUploadUrl;
        }
    });

    chrome.storage.sync.get(['supabaseAPIKey'], function(result) {
        if (result.supabaseAPIKey) {
            document.getElementById('his-story-ext-supabase-key').value = result.supabaseAPIKey;
        }
    });
    

    // Add event listener to the export button
    document.getElementById('his-story-ext-export').addEventListener('click', function() {
        const url = document.getElementById('his-story-ext-url').value;
        // Save the URL to Chrome Storage
        chrome.storage.sync.set({ hisStoryExtUploadUrl: url });

        const supabaseAPIKey = document.getElementById('his-story-ext-supabase-key').value;
        // Save api key to Chrome Storage
        chrome.storage.sync.set({ supabaseAPIKey: supabaseAPIKey});
    });
});