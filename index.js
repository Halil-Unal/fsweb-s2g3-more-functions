// Aşağıdaki görevleri tamamlayın

/*
  GÖREV 1
  - Input:  Bir dosya yolunu (path) parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon, verilen bir dosya adresideki(path) dosyanın adını vermeli.
  * İpucu:  Dosya adresinin / işaretleri ile bölümlendiğine dikkat et.

  örnek input:  "C:/Users/johnsmith/Music/Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  "Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  ""
  örnek output: ""
*/

function dosyaAdiniBul(/* kodlar buraya */) {
  // kodlar buraya
}

/*
  GÖREV 2
  - Input:  Bir sayı arrayini parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasını dönmeli.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: 46

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: 104
*/

const sayilar =[8109, 869, 2078, 7402, 1953, 2816, 6892, 6067, 3162, 7875, 5590, 2624, 2424,
  3098, 4672, 4454, 8783, 1760, 4653, 5042, 1067, 3154, 7865, 7923, 1189, 1627,
  4106, 182, 454, 4264, 9794, 5513, 7980, 3381, 8391, 2971, 2274, 2983, 2725,
  6738, 403, 3038, 9102, 161, 8904, 439, 9667, 7333, 5965, 1240, 2801, 113,
  5048, 3682, 3749, 2300, 499, 4098, 5126, 1978, 900, 8496, 7716, 6672, 3050,
  6383, 403, 5353, 8494, 3948, 9090, 9400, 4953, 4623, 8423, 2212, 2971, 3174,
  6739, 3932, 4297, 8475, 3243, 9405, 768, 6864, 9732, 6887, 3115, 3771, 6521,
  4983, 5194, 3864, 6872, 2290, 293, 5976, 5931, 4869, 1007, 9705, 4789, 2944,
  8167, 6200, 1216, 1951, 8497, 1345, 3183, 5676, 7575, 6666, 1244, 1155, 2690,
  3410, 281, 1692, 5133, 2644, 1966, 4214, 5074, 5139, 4457, 1346, 5939, 7366,
  6542, 3533, 9782, 7310, 4569, 5660, 2838, 6762, 5477, 7047, 8812, 7919, 4692,
  9978, 5392, 2243, 184, 3514, 2172, 6572, 2142, 8703, 7012, 635, 8310, 8440,
  7337, 1461, 9737, 8434, 9539, 6004, 273, 2628, 7281, 1805, 9908, 1255, 6507,
  1776, 5777, 3492, 6277, 5433, 5043, 7506, 8427, 1184, 7720, 8850, 2299, 5549,
  396, 1082, 3344, 5941, 3455, 7398, 6850, 7084, 1722, 7444, 8991, 324, 5439,
  7512, 2419, 5155, 5377, 8871, 1043, 473, 6876, 5019, 1353, 4171, 6309, 8763,
  7347, 1216, 2480599, 6182, 3218, 2737, 352, 2492, 5505, 7975, 4719, 7099,
  9730, 7848, 2567, 4220, 1948, 3345, 7207, 8789, 5930, 7496, 6748, 8549, 9047,
  7278, 5245, 5482, 14, 7407, 4144, 9804, 1969, 8409, 7263, 6624, 5051, 7823,
  6393, 6427, 7032, 107, 6076, 3375, 1583, 7692, 2341, 9590, 6028, 7573, 7073,
  3643, 213, 3267, 6356, 3330, 9265, 4089, 2999, 8731, 4798, 8101, 1545, 91,
  9398, 6292, 2966, 925, 6917, 5996, 8787, 2880, 2218, 4997, 4325, 4120, 6109,
  2117, 3013, 3076, 7612, 1437, 804, 9353, 9606, 3114, 6509, 6691, 3362, 3877,
  8106, 5857, 6622, 3437, 1324, 4734, 9341, 960, 6947, 6943, 3052, 8396, 5303,
  2898, 2457, 9309, 4169, 7898, 5378, 5080, 7424, 6756, 8661, 2514, 5232, 5634,
  9007, 815, 3016, 3018, 5634, 6998, 5649, 5521, 199, 3715, 5077, 7981, 1722,
  1487, 3606, 3515, 2048, 8001, 7028, 774, 8266, 5261, 5194, 4590, 491, 4909,
  4600, 4428, 104, 7937, 2002, 9122, 1316, 9894, 5454, 4619, 5656, 4848, 6214,
  8923, 6262, 5821, 9351, 8736, 621, 1992, 683, 605, 1085, 4819, 8886, 2358,
  4977, 6281, 998, 6412, 1010, 995, 6750, 250, 1878, 1682, 2552, 102, 9139,
  4263, 8028, 5925, 3171, 7741, 3637, 4731, 1783, 2746, 3202, 9998, 8800, 2658,
  244, 3197, 4716, 5851, 8482, 2319, 1191, 1984, 4309, 7976, 2450, 1847, 2140,
  7942, 7695, 9126, 3642, 1358, 3807, 8903, 7768, 1752, 9830, 5114, 9616, 1612,
  8971, 7634, 8568, 7211, 949, 8043, 8678, 6903, 1489, 8892, 388, 1502, 9043,
  1204, 3615, 9446, 6640, 5554, 8303, 1111, 2447, 7838, 6067, 5025, 6545, 195,
  3891, 4181, 2130, 378, 7283, 1670, 5597, 4641, 2546, 7875, 8867, 6180, 3576,
  33, 2837, 8003, 1033, 7315, 6160, 9366, 4888, 2608, 4534, 7629, 209, 174,
  5117, 6101, 4863, 2077, 8104, 8787, 3706, 3263, 6363, 7686, 7361, 3052, 3150,
  1040, 3899, 7308, 7699, 5024, 5089, 3423,];
function ortalamaBul(){
  let sayi=0;
  for (let i=0;i<sayilar.length;i++){
     sayi= sayi+sayilar[i];

  }
  return sayi/sayilar.length;
}
console.log(ortalamaBul());

/*
  GÖREV 3
  - Input:  Bir sayı arrayini ve ortalama bulmaya yarayacak bir fonksiyonu parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasından büyük ya da eşit elemanlardan oluşan bir array dönmeli.
  * Çağırırken kendi ortalama fonksiyonunla çağırabilirsin, ama parametrenin tanımlama aşamasında soyut bir ifade olduğunu unutma.
  * f(x) = 2x+5 içerisindeki x değeri gibi.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: [50, 153]

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: [109, 216, 288, 143, 185, 194]
*/

function ortalamadanBuyukleriBul() {
  const büyükler =[];
  for (let i=0;i<sayilar.length;i++){
if (sayilar[i]>=ortalamaBul()){
büyükler.push(sayilar[i]);


}
}
return büyükler;
 
}
console.log(ortalamadanBuyukleriBul());


/* !!!! Burdan aşağısını değiştirmeyin !!!! */
function as() {
  console.log("Kodlar sorunsuz çalışıyor!");
  return "sa";
}
as();
export { dosyaAdiniBul, ortalamaBul, ortalamadanBuyukleriBul, as };
