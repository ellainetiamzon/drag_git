// JavaScript Document

var counter = 0;

//reset button and restart 
	location.reload();	
};

function setDraggables() {
	randomizeDraggables();
	for (var i = 1; i <= totalDraggables; i++) {
		$("#draggable" + i).draggable({
			revert: "invalid",
			cursor: "hand",
			stack: "div"
		});
	}
}

function setDroppables() {
	for (var i = 1; i <= totalDraggables; i++) {
		$("#droppable" + i).droppable({
			accept: "#draggable" + i,
			drop: function( event, ui ) {
				$(this)
				ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
				counter++;
				if (counter == totalDraggables) {
					$('#feedback').show();
				}
			}
		});
	}
}


// This code was found here: http://stackoverflow.com/questions/11296247/how-to-sort-a-random-div-order-in-jquery
function randomizeDraggables() {
	var grp = $("#randomize").children();
	var cnt = grp.length;

	var temp, x;
	for (var i = 0; i < cnt; i++) {
		temp = grp[i];
		x = Math.floor(Math.random() * cnt);
		grp[i] = grp[x];
		grp[x] = temp;
	}
	$(grp).remove();
	$("#randomize").append($(grp));
}


$(document).ready(function() {

	// hide feedback
	$('#feedback').hide();

	setDraggables();
	setDroppables();

});

// end