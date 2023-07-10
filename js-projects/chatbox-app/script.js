$(document).ready(function() {


    // Form submission
    $('form').submit(function(e){
        // avoid page reload
        e.preventDefault();

        // get the message
        let getMessage = $('input').val()

        // if message not empty
        if (getMessage !== ''){
            
            // find message length
            let messageLength = getMessage.length;
            let messageClass = '';

            if (messageLength <= 10) {
              messageClass = 'short';
            } else if (messageLength <= 20) {
              messageClass = 'medium';
            } else {
              messageClass = 'long';
            }
            
            // prepare message
            let newMessage = "<p class='message " + messageClass + "'>" + getMessage + "</p>";
            
            // create a jQuery object from the new message
            let $message = $(newMessage); 

            // append the message to .box .inner and measure its width
            $('.box .inner').append($message);
            let messageWidth = $message.outerWidth();

            // set the width of the message element
            $message.css('width', messageWidth + 'px');

            // clear form field
            $('input').val("");

            // move scroll to end after message submission
            $('.box .inner').scrollTop($('.box .inner')[0].scrollHeight);
        }


    });





});