/*jshint esversion: 6 */

$(document).ready(function(){

  $('#submitBtn').on('click', makeGrid);

  function makeGrid(e) {
    //get the grid size
    let gridHeight = $('#inputRow').val();
    let gridWidth = $('#inputCol').val();
    //access the table
    let canvasElem = $('#canvas');

    //clear the grid
    canvasElem.children().remove();

    //make the rows
    for (let i = 0; i < gridHeight; i++) {
      let tr = $('<tr></tr>').appendTo(canvasElem);
      //make the columns
      for (var j = 0; j < gridWidth; j++) {
        tr.append('<td></td>');
      }
      canvasElem.append(tr);
    }
    e.preventDefault();
  }

  //add color
  $('#canvas').on('click','td',function(){
    $(this).css('background-color', $('#colorPicker').val());
  });

});
