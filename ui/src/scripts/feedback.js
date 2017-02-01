if (feedbackAlert) {
	feedbackAlert.dispose();
	feedbackAlert = null;
}

var feedbackAlert = new metal.Toast({
	spinner: true,
	spinnerDone: true,
	visible: false
});

var noBtn  = document.querySelector('.guide-feedback-btn-no');
var yesBtn = document.querySelector('.guide-feedback-btn-yes');

if(noBtn) {
	noBtn.addEventListener('click', function() {
		noBtn.setAttribute('disabled', true);
		yesBtn.removeAttribute('disabled');
		sendFeedback(false);
	});
}

if(yesBtn) {
	yesBtn.addEventListener('click', function() {
		yesBtn.setAttribute('disabled', true);
		noBtn.removeAttribute('disabled');
		sendFeedback(true);
	});
}

function sendFeedback(liked) {
	WeDeploy.data('docs.wozniak16.wedeploy.me')
		.create('feedback', {
			liked: liked,
			url: window.location.href,
			timestamp: new Date().toISOString()
		})
		.then(function(result) {
			feedbackAlert.body = 'Thanks for your feedback!';
			feedbackAlert.elementClasses = 'alert-success';
			feedbackAlert.visible = true;
		})
		.catch(function(error) {
			feedbackAlert.body = 'Something wrong happened! Please try again later.';
			feedbackAlert.elementClasses = 'alert-danger';
			feedbackAlert.visible = true;
		});
}