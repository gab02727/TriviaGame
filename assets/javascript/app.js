
// Countdown also starts at 60 seconds (same at the limit of the page timer)
var count = 90;
// global variable
var correctCount = 0;
var wrongCount = 0;
var unansweredCount = 0;


//functions
$(document).ready(function(){

	// TimeOut page after 1 minute (60 seconds)




	// Start the game with hidden Divs
	$("#mid_game_container").hide();
    $("#end_container").hide();
    
    
	// Set Scroll position so 
	window.scrollTo(0, 500);



	$("#start_button").on("click", function(){

		// Hide the start Div from the user
		$("#start_container").hide();


		// Show the Game Div
		$("#mid_game_container").show();

		startCountdown();
		return;

	});



	// Counts down and displays the time to the user and Decrement the counter, down from 60 seconds using count--;
	function countdown(){	
		count--;

		// Display the count to the user in the DOM
    	$('#timer_number').html(count + " Seconds");

    	

    	
			// User finishes before time is up and clicks done
			$("#done_button").on("click", function(){

			// Stop the countdown and run the timeUp function
			//clearInterval(startCountdown);
			count = 0; 
			return;

			});


			// Finish the game after the timer reaches 0
			if(count == -1){

				// Collect the radio inputs
				timeUp();

				// Hide the game Div from the user
				$("#mid_game_container").hide();

			}


	}


	// Show the countdown, increment is 1 second
	function startCountdown(){

		setInterval(countdown, 1000);

	}


	// Function to be run after the timer is up
	function timeUp(){


		// Checked values of Radio Buttons
		var Q1 = $('input:radio[name="q1"]:checked').val();
		var Q2 = $('input:radio[name="q2"]:checked').val();
		var Q3 = $('input:radio[name="q3"]:checked').val();
		var Q4 = $('input:radio[name="q4"]:checked').val();
		var Q5 = $('input:radio[name="q5"]:checked').val();
		var Q6 = $('input:radio[name="q6"]:checked').val();
		var Q7 = $('input:radio[name="q7"]:checked').val();
		var Q8 = $('input:radio[name="q8"]:checked').val();
		var Q9 = $('input:radio[name="q9"]:checked').val();
		var Q10 = $('input:radio[name="q10"]:checked').val();



		// Determine the right/wrong/unanswered counts 
		if(Q1 == undefined){
			unansweredCount++;
		}
		else if(Q1 == "1987"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q2 == undefined){
			unansweredCount++;
		}
		else if(Q2 == "$35"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q3 == undefined){
			unansweredCount++;
		}
		else if(Q3 == "Ilie Nastase"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q4 == undefined){
			unansweredCount++;
		}
		else if(Q4 == "Stussy"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q5 == undefined){
			unansweredCount++;
		}
		else if(Q5 == "1982"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q6 == undefined){
			unansweredCount++;
		}
		else if(Q6 == "Tinker Hatfield"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q7 == undefined){
			unansweredCount++;
		}
		else if(Q7 == "1985"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q8 == undefined){
			unansweredCount++;
		}
		else if(Q8 == "Cortez"){
			correctCount++;
		}
		else{
			wrongCount++;
		}


		if(Q9 == undefined){
			unansweredCount++;
		}
		else if(Q9 == "California"){
			correctCount++;
		}
		else{
			wrongCount++;
		}



		if(Q10 == undefined){
			unansweredCount++;
		}
		else if(Q10 == "Onitsuka Tiger"){
			correctCount++;
		}
		else{
			wrongCount++;
		}




		//  display the score results
		$('#correct_answers').html(correctCount);
		$('#wrong_answers').html(wrongCount);
		$('#unanswered').html(unansweredCount);


		// Show the completed Score Div
        $("#end_container").show();
        
        window.scrollTo(0, 550);

	}

});
