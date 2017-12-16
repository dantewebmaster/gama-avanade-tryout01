jQuery(document).ready(function ($) {

	var name = $("#name");
	var email = $("#email");

	/**
	 * Very simple validation function.
	 */
	function formError() {

		$(".error-message, .alert").hide();		

		// if name or email are empty
		if (!name.val() || !email.val()) {
			$("#apply-error").slideDown();
		}

		// if name is empty
		if (!name.val()) {
			$('<span id="feedback-name" class="error-message text-danger">Não pode estar vazio</span>').insertAfter(name);
		}
		// if email is ampty
		if (!email.val()) {
			$('<span id="feedback-email" class="error-message text-danger">Não pode estar vazio <br />Não é válido</span>').insertAfter(email);
		}

	}

	/**
	 * Success message.
	 */
	function formSuccess() {
		$(".error-message, .alert").hide();

		$("#apply-success").slideDown();
	}

	$('#form').submit( function(e) {
		e.preventDefault();

		$.ajax({
			method: 'POST',
			url: 'http://avanade.gama.academy/api/process_applications',
			dataType: 'json',
			headers: { EMAIL: 'dantewebmaster@outlook.com' }, // coloque seu email que usou para se inscrever aqui!
			contentType: 'application/json',
			data: JSON.stringify({ process_application: { name: $('#name').val(), email: $('#email').val() } }),
			success: function (json) {
				console.log('Sucesso!');

				formSuccess();
			},
			error: function (jqXHR, textStatus, errorThrown) {
				console.log('Erro: ', jqXHR.responseText);

				formError();
			}
		});
		
	});

});
