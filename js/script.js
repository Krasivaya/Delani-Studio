$(document).ready(function() {
	$('.whatwedo_img1').click(function() {
		$('.icon1').toggle();
		$('.icon1_onhover').toggle();
	});
});
$(document).ready(function() {
	$('.whatwedo_p1').click(function() {
		$('.icon1').toggle();
		$('.icon1_onhover').toggle();
	});
});
$(document).ready(function() {
	$('.whatwedo_img2').click(function() {
		$('.icon2').toggle();
		$('.icon2_onhover').toggle();
	});
});
$(document).ready(function() {
	$('.whatwedo_p2').click(function() {
		$('.icon2').toggle();
		$('.icon2_onhover').toggle();
	});
});
$(document).ready(function() {
	$('.whatwedo_img3').click(function() {
		$('.icon3').toggle();
		$('.icon3_onhover').toggle();
	});
});
$(document).ready(function() {
	$('.whatwedo_p3').click(function() {
		$('.icon3').toggle();
		$('.icon3_onhover').toggle();
	});
});
$('.hover1').hover(function() {
	$('.text1').css('visibility', 'visible');
});

$('.hover1').mouseout(function() {
	$('.text1').css('visibility', 'hidden');
});
$('.hover2').hover(function() {
	$('.text2').css('visibility', 'visible');
});

$('.hover2').mouseout(function() {
	$('.text2').css('visibility', 'hidden');
});
$('.hover3').hover(function() {
	$('.text3').css('visibility', 'visible');
});

$('.hover3').mouseout(function() {
	$('.text3').css('visibility', 'hidden');
});
$('.hover4').hover(function() {
	$('.text4').css('visibility', 'visible');
});

$('.hover4').mouseout(function() {
	$('.text4').css('visibility', 'hidden');
});
$('.hover5').hover(function() {
	$('.text5').css('visibility', 'visible');
});

$('.hover5').mouseout(function() {
	$('.text5').css('visibility', 'hidden');
});
$('.hover6').hover(function() {
	$('.text6').css('visibility', 'visible');
});

$('.hover6').mouseout(function() {
	$('.text6').css('visibility', 'hidden');
});
$('.hover7').hover(function() {
	$('.text7').css('visibility', 'visible');
});

$('.hover7').mouseout(function() {
	$('.text7').css('visibility', 'hidden');
});
$('.hover8').hover(function() {
	$('.text8').css('visibility', 'visible');
});

$('.hover8').mouseout(function() {
	$('.text8').css('visibility', 'hidden');
});
$(document).ready(function() {
	$('button').click(function() {
		$.post(
			'demo_test_post.asp',
			{
				name: 'Donald Duck'
			},
			function(data) {
				alert(data + 'we have received your message. Thank you fro reaching out to us.');
			}
		);
	});
});
