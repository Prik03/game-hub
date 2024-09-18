import noimage from '../assets/No_Image_Available.jpg'
const getCroppedImageUrl = (url) => {
    if(!url) return noimage
const target='media/';
const index=url.indexOf(target) + target.length;
return url.slice(0,index)+'crop/600/400/'+url.slice(index);
}

export default getCroppedImageUrl;
