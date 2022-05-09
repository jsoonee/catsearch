export default class ImageInfo {
  // $imageInfo = null;
  // data = null;

  // constructor({ $target, data }) {
  //   const $imageInfo = document.createElement("div");
  //   $imageInfo.className = "ImageInfo";
  //   this.$imageInfo = $imageInfo;
  //   $target.appendChild($imageInfo);

  //   this.data = data;

  //   this.render();
  // }

  // setState(nextData) {
  //   this.data = nextData;
  //   this.render();
  // }

  // render() {
  //   if (this.data.visible) {
  //     const { name, url, temperament, origin } = this.data.image;

  //     this.$imageInfo.innerHTML = `
  //         <div class="content-wrapper">
  //           <div class="title">
  //             <span>${name}</span>
  //             <div class="close">x</div>
  //           </div>
  //           <img src="${url}" alt="${name}"/>        
  //           <div class="description">
  //             <div>성격: ${temperament}</div>
  //             <div>태생: ${origin}</div>
  //           </div>
  //         </div>`;
  //     this.$imageInfo.style.display = "block";
  //   } else {
  //     this.$imageInfo.style.display = "none";
  //   }
  // }

  constructor({ $target, data }) {
    this.section = document.createElement('div');
    this.section.className = 'info-section';
    $target.appendChild(this.section);

    this.data = data;
    this.render();
  }

  render() {
    if (this.data.visible) {
      const { name, url, temperament, origin } = this.data.image;
      this.section.innerHTML = `
        <article class="modalWrapper">
          <div class="title">
            <h1>${name}</h1>
            <button type="button" class="close">x</button>
          </div>
          <img src="${url}" alt="${name}">
          <div class="descrption">
            <div>성격: ${temperament}</div>
            <div>태생: ${origin}</div>
          </div>
        </article>
      `;
      this.section.style.display = 'block';
    } else {
      this.section.style.display = 'none';
    }
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }
}
