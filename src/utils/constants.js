class Constants {
	constructor() {
		const homeProps = { url: "/", text: "Home" };
		const aboutProps = { url: "/about", text: "About Me", };
		const blogProps = { url: "/blogs", text: "Blog", };

		const github = { url: "https://github.com/Yurizaki", text: "Github", };
		const linkedin = { url: "https://www.linkedin.com/in/alex-holmes-296435128", text: "LinkedIn", };

		const propsList = [homeProps, aboutProps, blogProps];
		const externalList = [github, linkedin];

		this.getPropsList = () => propsList;
		this.getExternalList = () => externalList;
	}
}

export default Constants;