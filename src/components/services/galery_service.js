
export default class GalleryService {  // export default  

  constructor() {
    this._apiUrlBase = 'http://api.programator.sk'; // !!!  this.  !!!
  }

  // !!!!!  CRUCIAL THING: Where Promice Will Be Returned ? -> Then .then() Should Be Used  !!!!!

  getResource = async (url) => { // BASE f() FOR ALL NEXT f()s

    const res = await fetch(`${this._apiUrlBase}${url}`); //  !!!  await -> fetch()  !!! 

    if (! res.ok) { throw new Error(`!!!!!! COULD NOT FETCH ${this._apiUrlBase}. Error status: ${res.status} !!!!!!`) };

    return await res.json(); //  !!!  await -> .json()  !!! 
  }


  getAllGalleries = async () => {
    const galleries = await this.getResource(`/gallery`);
    return galleries;

    //return galleries.map(this._transformGallrey);
  }


  getCertainGallery = async (path) => {
      const gallery = await this.getResource(`/gallery/${path}`);
      return this._transformGallrey(gallery);
  }

  getImageExample = async (width = 300, height = 200, fullPath = 'DFauta/1.jpg') => {
    const image = await this.getResource(`/images/${width}x${height}/${fullPath}`);
    return image;

    //return galleries.map(this._transformGallrey);
  }

  



  // Utils Functions Below

  isSet(data) {
      if (data) {
          return data
      } else {
          return 'no data :('
      }
  }

  _extractId = (item) => {
      const idRegExp = /\/([0-9]*)$/;
      return item.url.match(idRegExp)[1];
  }

  _transformGallrey = (gallery) => {
      return {
          //id: this._extractId(char),
          path: this.isSet(gallery.path),
          name: this.isSet(gallery.name)
      };
  }

}

// TESTING EXAMPLE
//const galleryService = new GalleryService();

// galleryService.getResourse() // !!! return PROMICE !!!
//   .then ( res => console.log(res))


// galleryService.getAllGalleries() // !!! return PROMICE !!!
//   .then ( res => console.log(res))