function showFeedback(feedbackId) {
    // Hide all feedback first
    document.querySelectorAll('.feedback').forEach(function(el) {
        el.style.display = 'none';
    });

    // Show the selected feedback
    document.getElementById(feedbackId).style.display = 'block';
}