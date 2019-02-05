class Tab {
    constructor(tab) {
        this.tab = tab;
        this.data = tab.dataset.tab;
        this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
        this.content = new TabContent(this.itemElement);
        this.tab.addEventListener('click', () => this.select());
    }

    select() {
        tabs.forEach(tab => tab.classList.remove('tab-selected'));
        this.tab.classList.add('tab-selected');
        this.content.select();
    }
}

class TabContent {
    constructor(item) {
        this.item = item;
    }

    select() {
        const items = document.querySelectorAll('.tabs-item');
        items.forEach(item => item.classList.remove('tabs-item-selected'));
        this.item.classList.add('tabs-item-selected');
    }
}

const tabs = document.querySelectorAll('.actual-tab');
tabs.forEach(tab => new Tab(tab));