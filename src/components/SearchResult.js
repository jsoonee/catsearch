export default class SearchResult {
  // $searchResult = null;
  // data = null;
  // onClick = null;

  // constructor({ $target, initialData, onClick }) {
  //   this.$searchResult = document.createElement("div");
  //   this.$searchResult.className = "SearchResult";
  //   $target.appendChild(this.$searchResult);

  //   this.data = initialData;
  //   this.onClick = onClick;

  //   this.render();
  // }

  // setState(nextData) {
  //   this.data = nextData;
  //   this.render();
  // }

  // render() {
  //   this.$searchResult.innerHTML = this.data
  //     .map(
  //       (cat) => `
  //           <div class="item">
  //             <img src=${cat.url} alt=${cat.name} />
  //           </div>
  //         `
  //     )
  //     .join("");

  //   this.$searchResult.querySelectorAll(".item").forEach(($item, index) => {
  //     $item.addEventListener("click", () => {
  //       this.onClick(this.data[index]);
  //     });
  //   });
  // }

  constructor({ $target, initialData, onClick }) {
    const section = document.createElement('section');
    section.className= 'list-section';
    this.cardContainer = document.createElement('div');
    this.cardContainer.className ='cardContainer';
    $target.appendChild(section);
    section.appendChild(this.cardContainer);

    this.data = initialData;
    this.onClick = onClick;
    
    this.render();
  }

  render() {
    this.cardContainer.innerHTML = this.data.map(cat => `
      <article class="card">
        <img src="${cat.url}" alt="${cat.name}">
      </article>
    `).join('');
    this.setEvent();
  }

  setEvent(){
    this.cardContainer.querySelectorAll('.card').forEach((v, i) => {
      v.addEventListener('click', () => {
        this.onClick(this.data[i]);
      });
    });
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }
}
