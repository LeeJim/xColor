/*
 * @desc HEX转换成RGB
 * @param {String} hex HEX格式的色值
 * @return {Obejct} rgb RGB格式的色值
 */
const hex2rgb = function hex2rgb(hex) {
  if (typeof hex !== 'string') {
    throw new TypeError('请输入字符串');
  }

  // #333 || #123456
  if (!hex.startWith('#') || !(hex.length === 4 || hex.length === 7)) {
    throw new TypeError('请输入正确的HEX格式');
  }

  if (hex.length === 4) {

    const r = parseInt(hex[1], 16);
    const g = parseInt(hex[2], 16);
    const b = parseInt(hex[3], 16);

    return {
      r: r*10 + r,
      g: g*10 + g,
      b: b*10 + b,
    }
  }
  else {
    return {
      r: parseInt(hex[1], 16)*10 + parseInt(hex[2], 16),
      g: parseInt(hex[3], 16)*10 + parseInt(hex[4], 16),
      b: parseInt(hex[5], 16)*10 + parseInt(hex[6], 16),
    }
  }
}

/*
 * @desc RGB转换成HEX
 * @param r {String} R值
 * @param g {String} G值
 * @param b {String} B值
 * @return hex {String} HEX格式色值
 */
const rgb2hex = function rgb2hex(r, g, b) {

  const toHex = function(n) {
   n = parseInt(n,10);

   if (isNaN(n)) return "00";

   n = Math.max(0,Math.min(n,255));

   return "0123456789ABCDEF".charAt((n-n%16)/16)
        + "0123456789ABCDEF".charAt(n%16);
  }

  return toHex(r)+toHex(g)+toHex(b) 
}

/*
 * @desc RGB转换成HSV
 * @param r {String} R值
 * @param g {String} G值
 * @param b {String} B值
 * @return hsv {Array} HSV格式色值
 */
const rgb2hsv = function rgb2hsv(r,g,b) {
 var computedH = 0;
 var computedS = 0;
 var computedV = 0;

 //remove spaces from input RGB values, convert to int
 var r = parseInt( (''+r).replace(/\s/g,''),10 ); 
 var g = parseInt( (''+g).replace(/\s/g,''),10 ); 
 var b = parseInt( (''+b).replace(/\s/g,''),10 ); 

 if ( r==null || g==null || b==null ||
     isNaN(r) || isNaN(g)|| isNaN(b) ) {
   alert ('Please enter numeric RGB values!');
   return;
 }

 if (r<0 || g<0 || b<0 || r>255 || g>255 || b>255) {
   alert ('RGB values must be in the range 0 to 255.');
   return;
 }

 r=r/255; g=g/255; b=b/255;
 var minRGB = Math.min(r,Math.min(g,b));
 var maxRGB = Math.max(r,Math.max(g,b));

 // Black-gray-white
 if (minRGB==maxRGB) {
  computedV = minRGB;
  return [0,0,computedV];
 }

 // Colors other than black-gray-white:
 var d = (r==minRGB) ? g-b : ((b==minRGB) ? r-g : b-r);
 var h = (r==minRGB) ? 3 : ((b==minRGB) ? 1 : 5);
 computedH = 60*(h - d/(maxRGB - minRGB));
 computedS = (maxRGB - minRGB)/maxRGB;
 computedV = maxRGB;
 return [computedH,computedS,computedV];
}

module.exports = {
  hex2rgb,
  rgb2hex,
  rgb2hsv
}