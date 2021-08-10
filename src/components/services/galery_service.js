
export default class GalleryService {  // export default  

  constructor() {
    this._apiUrlBase = 'http://api.programator.sk'; // !!!  this.  !!!
  }

  // !!!!!  CRUCIAL THING: Where Promice Will Be Returned ? -> Then .then() Should Be Used  !!!!!

  getResource = async (url) => { // BASE f() FOR ALL NEXT f()s

    const res = await fetch(`${this._apiUrlBase}${url}`); //  !!!  await -> fetch()  !!! 

    if (! res.ok) { throw new Error(`!!!!!! COULD NOT GET ${this._apiUrlBase}. Error status: ${res.status} !!!!!!`) };

    return await res.json(); //  !!!  await -> .json()  !!! 
  }

  postResource = async (url, contentTypeStr, dataObj) => { // BASE f() FOR ALL NEXT f()s
    let infoStr = '___IMAGE___';
    if(contentTypeStr === 'application/json') { 
      dataObj =  JSON.stringify(dataObj);
      console.log('application/json !!!!!!!');
      infoStr = '___CATEGORY___';
    }

    const res = await fetch(`${this._apiUrlBase}${url}`, {
                                                            method: 'POST',
                                                            body:  dataObj,
                                                            headers: { 'Content-Type': contentTypeStr}     
                                                          }
    ); 
    if (! res.ok) { throw new Error(`!!!!!! COULD NOT POST ${infoStr} ${this._apiUrlBase}. Error status: ${res.status} !!!!!!`) };

    return await res.json(); //  !!!  await -> .json()  !!! 
  }
  postNewImgToCategory = async ( categUrlStr, dataObj ) => {
    let infoStr = '___IMAGE___';

    const res = await fetch(`${this._apiUrlBase}/gallery${categUrlStr}`, {
                                                            method: 'POST',
                                                            body:  dataObj 
                                                          }
    ); 
    if (! res.ok) { throw new Error(`!!!!!! COULD NOT POST ${infoStr} ${this._apiUrlBase}. Error status: ${res.status} !!!!!!`) };

    return await res.json();


    // const image = await this.postResource(`/gallery${categUrlStr}`, 'multipart/form-data; boundary=--boundary', dataObj);
    // return image;
  }

  postNewGallery = async ( dataObj ) => {
    const galleries = await this.postResource(`/gallery`, 'application/json', dataObj);
    return galleries;
  }


  getAllGalleries = async () => {
    const galleries = await this.getResource(`/gallery`);
    return galleries;

    //return galleries.map(this._transformGallrey);
  }

  getCategoryImages = async (path) => {
      const images = await this.getResource(`/gallery/${path}`);
      return images;
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