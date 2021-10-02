import "../styles/colors.scss"
import { getSessionItem, saveSessionItem } from "./utils";

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
		const RAND = new ColorScheme("random", "rand-bg-col");
		const JUICY = new ColorScheme("juicy", "juicy-bg-col");
		const FOREST = new ColorScheme("forest", "forest-bg-col");
		const FRENCH = new ColorScheme("french", "french-bg-col");
		this.colSchemes = [COLD, WARM, FOREST, FRENCH];

        this.index = 0;
        this.max = this.colSchemes.length;
	}

    getIndex() {
        return this.index;
    }

    setIndex(index) {
        this.index = index;
    }

    getMaxIndex() {
        return this.max;
    }

    getScheme() {
        return this.colSchemes[this.index].getName();
    }

    getBgColor() {
        return this.colSchemes[this.index].getBgColor();
    }
}

const col = new ColorController();

export function getSchemeName() {
	return col.getScheme().toUpperCase();
}

export function getBgCol() {
	return col.getBgColor();
}

export function toggleScheme() {
	if (col.getIndex() + 1 < col.getMaxIndex()) {
		col.setIndex(col.getIndex() + 1);
	}
	else {
		col.setIndex(0);
	}

    saveSessionItem('scheme-index', col.getIndex());
}

const index = parseInt(getSessionItem('scheme-index'));
if (index) {
    col.setIndex(index);
}