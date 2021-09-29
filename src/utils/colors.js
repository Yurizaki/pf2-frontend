class ColorScheme {
	constructor(name, bgCol) {
        this.name = name;
        this.bgCol = bgCol;
	}

    getBgColor() {
        return this.bgCol;
    }

    getName() {
        return this.name;
    }
}

class ColorController {
	constructor() {
		const COLD = new ColorScheme("cold", "cold-bg-col");
		const WARM = new ColorScheme("warm", "warm-bg-col");

		this.colSchemes = [COLD, WARM];
		this.colScheme = "cold";
	}

    getScheme() {
        return this.colScheme;
    }

    setScheme(scheme) {
        this.colScheme = scheme;
    }

    getBgColor() {
        let col = "";
        this.colSchemes.forEach((scheme) => {
            if (scheme.getName() === this.colScheme) {
                col = scheme.getBgColor();
            }
        });
        return col
    }
}

const col = new ColorController();

export function getBgCol() {
	return col.getBgColor();
}

export function toggleScheme() {
	if (col.getScheme() === "cold") {
		col.setScheme("warm");
	} else {
		col.setScheme("cold");
	}
}
