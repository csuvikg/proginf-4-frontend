class Cascade {
    constructor(select) {
        this.select = select;
        this.collect();
        this.updateDom();
    }

    collect() {
        this.items = new Map();
        this.select.querySelectorAll("optgroup").forEach(group => {
            const options = Array.from(group.querySelectorAll('option'))
                .map(({ value, label }) => ({ value, label }));
            this.items.set(group.label, options);
        });
    }

    updateDom() {
        const parent = this.select.parentNode;

        this.groupSelect = document.createElement("select");
        parent.insertBefore(this.groupSelect, this.select);
        this.groupSelect.innerHTML = Array.from(this.items.keys())
            .map(group => `<option>${group}</option>`)
            .join();
        this.groupSelect.onchange = this.handleChange;

        this.optionSelect = document.createElement("select");
        parent.insertBefore(this.optionSelect, this.select);
        this.optionSelect.name = this.select.name;
        this.fillOptions(Array.from(this.items.keys())[0]);

        parent.removeChild(this.select);
    }

    fillOptions = (groupName) => {
        this.optionSelect.innerHTML = this.items.get(groupName)
            .map(({ value, label }) => `<option value=${value}>${label}</option>`)
            .join();
    }

    handleChange = e => {
        this.fillOptions(e.target.value);
    }
}

new Cascade(document.querySelector('select[name="pets"]'));
