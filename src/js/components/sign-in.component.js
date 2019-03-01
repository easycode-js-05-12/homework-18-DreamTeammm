import { AuthService } from './../services/auth.service';

export class SignInComponent {
	constructor() {
		this._autService = new AuthService();
	}

	render() {
		return `
			<div class="container">
				<div class="auth-wrap row py-5">
					<div class="auth-form col col-6 mx-auto my-auto">
						<h3>Login to Social.</h3>
						<p class="text-secondary">Enter your e-mail address & password to login to your Social account.</p>
						<form name="loginForm" novalidate>
							<div class="form-group">
								<input type="email" class="form-control form-control-sm" id="email" placeholder="name@example.com" required data-pattern="^\S+@[a-z]+\.[a-z]+$">
								<input type="password" class="form-control form-control-sm mt-3" id="password" placeholder="password" required data-pattern="\S+">
								<div class="d-flex mt-5">
									<button type="submit" class="btn btn-primary btn-sm">Login</button>
								</div>
							</div>
						</form>
					</div>
					<!-- /.auth-form -->
					<div class="auth-bg col col-6"></div>
					<!-- /.auth-bg -->
				</div>
				<!-- /.auth-wrap -->
			</div>
		`;
	}

	afterRender() {
		document.forms['loginForm'].addEventListener('submit', (e) => {
			e.preventDefault();

			const email = e.target.elements['email'].value;
			const password = e.target.elements['password'].value;

			if (!email || !password) return;

			this._autService.login(email, password)
				.then((response) => {
					console.log(response);
				})
				.catch((err) => {
					console.log(err);
				});
		});
	}
}