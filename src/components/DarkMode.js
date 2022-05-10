export default class DarkMode {
    constructor({ $target }) {
        this.darkModeBtn = document.createElement('label');
        this.darkModeBtn.className = 'switch';
        this.darkModeBtn.innerHTML = `
          <input type="checkbox" class="toggle">
          <span class="round"></span>
        `;

        // this.currentMode = 
        //     window.matchMedia("(prefers-color-scheme: dark)")
        //         .matches
        //         ? 'dark'
        //         : 'light';

        this.currentMode = 'light';

        this.toggleInput = this.darkModeBtn.querySelector('.toggle');
        const body = document.querySelector('body');
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            this.toggleInput.checked = true;
            this.currentMode = 'dark';
            body.className = 'dark';
        }

        $target.appendChild(this.darkModeBtn);

        this.render();
    }

    render() {
        this.setEvent();
    }

    setEvent() {
        this.darkModeBtn.querySelector('.round').addEventListener('click', (e) => {
            const body = document.querySelector('body');
            if (this.currentMode == 'dark') {
                this.currentMode = 'light';
                body.className = 'light';
            } else {
                this.currentMode = 'dark';
                body.className = 'dark';
            }
            console.log(this.currentMode);
        });
    }
}