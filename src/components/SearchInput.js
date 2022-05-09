// const TEMPLATE = '<input type="text">';

export default class SearchInput {
  // constructor({ $target, onSearch }) {
  //   const $searchInput = document.createElement("input");
  //   this.$searchInput = $searchInput;
  //   this.$searchInput.placeholder = "고양이를 검색해보세요.|";

  //   $searchInput.className = "SearchInput";
  //   $target.appendChild($searchInput);

  //   $searchInput.addEventListener("keyup", (e) => {
  //     if (e.keyCode === 13) {
  //       onSearch(e.target.value);
  //     }
  //   });

  //   console.log("SearchInput created.", this);
  // }
  // render() {}
  constructor({ $target, onSearch }) {
    this.section = document.createElement('section');
    this.section.className = 'search-section';
    $target.append(this.section);

    this.onSearch = onSearch;

    this.render();
  }

  render() {
    this.section.innerHTML = `
      <input class="searchBox" placeholder="고양이를 검색해보세요.">
    `;
    this.setEvent();
  }

  setEvent() {
    const searchBox = this.section.querySelector('.searchBox');
    searchBox.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) {
        this.onSearch(e.target.value);
      }
    });
  }
}
