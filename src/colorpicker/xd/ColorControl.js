import Hue from '../ui/control/VerticalHue';
import Opacity from '../ui/control/VerticalOpacity'
import UIElement from '../UIElement';

export default class ColorControl extends UIElement {

    components () {
        return { Hue, Opacity }
    }

    template () {
        return `
        <div class="control">
            <div target="Hue" ></div>
            <div target="Opacity" ></div>
        </div>
        `
    }

    refresh () {
        this.setColorUI();
    }

    setColorUI() {
        this.Hue.setColorUI()
        this.Opacity.setColorUI()
    }    

    '@changeColor' () {
        this.refresh()
    }

    '@initColor' () { this.refresh() }    

}
 