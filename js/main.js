//////////////////////////////////////////////////
// WATS1020 Dom Manipulation
// Custom script goes here.
//////////////////////////////////////////////////

$( document ).ready(function() {
    var userInfo = {
        firstName: 'Jane',
        lastName: 'Doe'
    };
    var voteCounts = {
        great: 0,
        greatest: 0,
        total: 0
    };
    // Place all your Javascript code inside this "document ready" function so
    // it does not run until the DOM is ready for Javascript manipulation.


  //function tracking the clicks:
    $('.loginclick').on('click',function(event){
      //fading out the login form:
      $('#login-form').fadeOut();
      //fading in the users full name:
      var fullName = userInfo.firstName + ' ' + userInfo.lastName;
      $('.user-fullname').text(fullName);
      $('.user-info').fadeIn();
    }
    );

   
    //function tracking the clicks:
    $('.view-details').on('click',function(event){
        //targeting the event:
        var targetElement = event.target;
        // making a container for the elements grandparent:
        var container = targetElement.parentElement.parentElement;
        //new function to find if he element is not visible, have button say view details
        $(container).find('.details').each(function(index, element){
           if ( $(element).is(':visible') ){
             $(element).fadeOut();
             targetElement.innerText = "View Details"

           //Or if the element is visible have the button say hide details 
           }else {
             $(element).fadeIn();
             targetElement.innerText = "Hide Details"
           }
         });
       }

     );

    // TODO: Create a function that listens for clicks on the voting buttons and
    // looks at the `data-vote` attribute on each button to see what was voted for,
    // then determines the updated vote breakdown to adjust the progress bars.
    //      1. Set up an event listener on the buttons with the `vote` class.
    //      2. When a button is clicked, look at the `data-vote` attribute to determine
    //          what the user is voting for ("great" or "greatest").
    //      3. Increment the counter for whichever vote talley is affected.
    //      4. Determine the respective percentages (out of 100) for each progress bar.
    //      5. Modify the `width` attribute on each progress bar to set the updated percentage.
  //function tracking the click:
  $('.vote').on('click', function(event){
    //targeting the click event:
    var targetElement = event.target;
    var result = $(targetElement).data('vote');
    //if result is great add 1 vote:
    if (result === "great"){
      voteCounts.great++;
     //if click result is greatest add 1:
    }else if (result === "greatest"){
      voteCounts.greatest++;
           
    }
    voteCounts.total++;
    //the math for the width of the voting bars:
    $('.great-progress').width((voteCounts.great/100)*100 + '%' );
    $('.greatest-progress').width((voteCounts.greatest/100)*100 + '%' );
  }
  );
  
  
  
  
});























