import { SignInComponent } from './components/sign-in.component';
import { HomeComponent } from './components/home.component';
import { NotFoundComponent } from './components/notfound.component';
import { SignUpComponent } from "./components/sign-up.component";

const routes = {
	'/': new HomeComponent(),
	'/sign-in': new SignInComponent(),
	'/sign-up': new SignUpComponent(),
	'**': new NotFoundComponent()
};

const router = () => {
	const container = document.querySelector('app-container');
	const url = location.hash.slice(1).toLowerCase() || '/';

	const component = routes[url] || routes['**'];
	container.innerHTML = component.render();
	component.afterRender();
};

window.addEventListener('load', router);
window.addEventListener('hashchange', router);

window.addEventListener('load', function() {
	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	let forms = document.getElementsByClassName('needs-validation');
	// Loop over them and prevent submission
	let validation = Array.prototype.filter.call(forms, function(form) {
		form.addEventListener('submit', function(event) {
			if (form.checkValidity() === false) {
				event.preventDefault();
				event.stopPropagation();
			}
			form.classList.add('was-validated');
		}, false);
	});
}, false);