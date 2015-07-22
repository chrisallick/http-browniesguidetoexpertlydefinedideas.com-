$(window).load(function() {
	$("#wrapper").animate({
		opacity: 1
	}, 'slow', function(){
		loadBook();
	});
});

function loadBook() {
	$("#gallery .images .image").each(function(){
		var url = "url('./img/gallery_image_"+$(this).data("src")+".jpg')";
		$(this).css({
			backgroundImage: url
		});
	});
}

function resize() {
	$(".center").each(function(value,index){
		$(this).css({
			left: $(document).width()/2 - $(this).width()/2,
			top: $(document).height()/2 - $(this).height()/2
		})
	});

	$("#wrapper .two-column").css({
		top: $(document).height()/2 - $("#wrapper .two-column").height()/2
	});
}

var gallery_index = 0;
$(document).ready(function() {
	resize();

	$(window).resize(function(){
		resize();
	});

	$("#gallery .next").click(function(event) {
		var el = $("#gallery .images .on");

		if( el.index() < $("#gallery .images .image").length - 1 ) {
			$(el).removeClass("on").next().addClass("on");
		} else {
			$(el).removeClass("on");
			$("#gallery .images .image").first().addClass("on");
		}
	});

	$("#gallery .prev").click(function(event){
		var el = $("#gallery .images .on");

		if( el.index() > 0 ) {
			$(el).removeClass("on").prev().addClass("on");
		} else {
			$(el).removeClass("on");
			$("#gallery .images .image").last().addClass("on");
		}
	});

	$("#right .viewmore").click(function(event) {
		$("#gallery").addClass("on");

		return false;
	});

	$("#gallery .close").click(function(event){
		$("#gallery").removeClass("on");
	});
});