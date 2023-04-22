// Replace with your own values
var messageId = 'example_message_id';
var userId = 'me';

// Authorize the client
gapi.auth.authorize({
    'client_id': '532276903581-o51emkfb244rk3h50scacl02lqe82gb3.apps.googleusercontent.com',
    'scope': 'https://www.googleapis.com/auth/gmail.readonly',
    'immediate': true
}, function (authResult) {
    if (authResult && !authResult.error) {
        // Call the messages.get method with format=full to get the original message form
        gapi.client.gmail.users.messages.get({
            'userId': userId,
            'id': messageId,
            'format': 'full'
        }).execute(function (response) {
            var rawMessage = response.raw;
            var messageData = window.atob(rawMessage.replace(/-/g, '+').replace(/_/g, '/')); // decode from base64
            console.log(messageData); // This is the original form of the email message
        });
    }
});
