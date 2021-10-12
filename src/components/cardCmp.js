import * as React from "react";
import { Link } from "gatsby";

const CardCmp = ({ element }) => {
	let image;
	if (element.node.media) {
		image = element.node.media.file.url;
	} else {
		image = "https://bulma.io/images/placeholders/1280x960.png";
	}

	return (
		<div>
			<div class="card">
				<div className="columns p-0 m-0 is-mobile">
					<div className="column is-one-fifth-desktop p-0 m-0 is-hidden-mobile">
						<figure class="image is-4by3">
							<img
								src={image}
								alt="Generic stock photo related image to blog article"
							/>
						</figure>
					</div>

					<div className="column is-three-fifths-desktop p-0 m-0">
						<div class="card-content p-2 m-0">
							<div class="content">
								<p class="title is-size-5 p-0 m-0">
									{element.node.title}
								</p>
								<p class="subtitle is-size-7 p-0 m-0 mt-3">
									{element.node.excerpt}
								</p>
								<div className="columns mt-3 p-0 m-0 ">
									<span className="tag tag-tag m-0 p-0 pl-2 pr-2">
										Published :{" "}
										{new Date(
											element.node.createdAt
										).getDate()}
										-
										{new Date(
											element.node.createdAt
										).getMonth()}
										-
										{new Date(
											element.node.createdAt
										).getFullYear()}
									</span>
									<Link
										className="p-0 m-0 ml-2"
										to={"/blogs/" + element.node.slug}
									>
										Read Arcticle...
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<hr />
		</div>
	);
};

export default CardCmp;
