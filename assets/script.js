$(function () {

    function updateColors() {
      var currentHour = dayjs().hour();
  
      $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
  
        if (blockHour < currentHour) {
          $(this).removeClass("present future").addClass("past");
        } else if (blockHour === currentHour) {
          $(this).removeClass("past future").addClass("present");
        } else {
          $(this).removeClass("past present").addClass("future");
        }
      });
    }
  

    function loadEvents() {
      $(".time-block").each(function () {
        var blockHour = $(this).attr("id");
        var event = localStorage.getItem(blockHour);
  
        if (event !== null) {
          $(this).children(".description").val(event);
        }
      });
    }
  
    
    $(".saveBtn").on("click", function () {
      var blockHour = $(this).parent().attr("id");
      var eventText = $(this).siblings(".description").val();
  
      localStorage.setItem(blockHour, eventText);
    });
  
    
    $("#currentDay").text(dayjs().format("dddd, MMMM D"));
  
    
    for (var i = 9; i <= 17; i++) {
      var timeBlock = $("<div>")
        .attr("id", "hour-" + i)
        .addClass("row time-block");
  
      var hourCol = $("<div>")
        .addClass("col-2 col-md-1 hour text-center py-3")
        .text(dayjs().hour(i).format("ha"));
  
      var descriptionCol = $("<textarea>")
        .addClass("col-8 col-md-10 description")
        .attr("rows", "3");
  
      var saveBtn = $("<button>")
        .addClass("btn saveBtn col-2 col-md-1")
        .attr("aria-label", "save")
        .html("<i class='fas fa-save' aria-hidden='true'></i>");
  
      timeBlock.append(hourCol, descriptionCol, saveBtn);
      $(".container-fluid").append(timeBlock);
    }
  
   
    updateColors();
    loadEvents();
  
    
    setInterval(function () {
      updateColors();
    }, 60000);
  });















