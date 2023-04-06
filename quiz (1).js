$(document).ready(function(){
    correct = ["2009", "Rome", "Grand Canyon, USA"];
    questions = ["Which year Nazarbayev University was founded?", 
                 "In which Italian city can you find the Colosseum?", 
                 "What is the largest canyon in the world?"];
    choice_options = [["2009","2010","2011","2012"],
                      ["Venice", "Rome", "Naples", "Milan"],
                      ["Verdon Gorge, France", "King's Canyon, Australia", "Grand Canyon, USA", "Fjarrgljfur Canyon, Iceland"]];
    
    // Generate quiz questions
    // ...
    quizBox = $("#quiz-box"); // Jquery
    
    for (let i = 0; i < questions.length; i++) {
     const questionBox = $("<div class='question'></div>");
     quizBox.append(questionBox);
     const question = $("<p class='d'>" + "Question " + (i + 1) + ": " + questions[i] + "</p>");
     questionBox.append(question);
     for (let j = 0; j < choice_options[i].length; j++) {
          questionBox.append("<label><input type='radio' name='q" + i + "'>" + choice_options[i][j] + "</label>");
     }
    }
    countCorrect = 0;
    reset = false;
    
    $("button").click (function (event){
          for (let i = 0; i < 4; i++) {
         $("input[name=q" + i + "]").each (function (index){
                choice = $(this).parent().text();
                index = $(this).parent().parent().index();
                console.log(index);
                if ($( this ).prop("checked") == true && correct [index - 1] == choice){
                     countCorrect += 1;
                }
         });
     }
    $("#quiz-box").append ("<h2>Result of the quiz is: " + countCorrect + "</h2>");
    countCorrect = 0;
    }); 

});