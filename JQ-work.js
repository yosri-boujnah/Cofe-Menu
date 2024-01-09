



function makeprudect(name,img,price,ingredient,category){
    return{
        name:name,
        img:img,
        price:price,
        ingredient:ingredient,
        category:category
    }
}
//ICE COFFE
var icevanill=makeprudect(vanillaIceCoffe,'img/download.jpg',8,cofee-ice-cubes-vanilla-serum-CremFraiche,iceCoffe)
var iceChokola=makeprudect(ChokolaIceCofee,'img/Iced-Mocha.jpg',9,cofee-ice-cubes-chokola-serum-CremFraiche,iceCoffe)
var iceBanan=makeprudect(IceCoffeBanan,'img/coconut_banana_iced_latte.png',10,cofee-ice-cubes-banan-serum-CremFraiche,iceCoffe)
var Icefrapp=makeprudect(Frappuccino,'img/double-chocolate-chip-frap.jpg',11,ice-espresso-milk_chocolatesyrup,iceCoffe)
//HOTCOFFE
var cappucino=makeprudect(cappucino,'img/Capuccino.webp',4,'',hotCoffe)
var espresso=makeprudect(Espresso,'img/Espresso-Taste-Metallic.webp',3,'',hotCoffe)
var americano=makeprudect(americano,'img/americano-kahve-nedir-nasil-yapilir-9-faydasi.jpg',3,'',hotCoffe)
var coffeCrem=makeprudect(coffeCrem,'img/cafe-creme-fritz-bertschi.webp',4,'',hotCoffe)
//BREAKFAST
var lumberjackt=makeprudect(lumberjacktBreakfast,'breakfast/download.jpg',15,sausage-eggs-tost-bacon-mayo,breakfast)
var EggTartine=makeprudect(EggTartine,'breakfast/images.jpg',11,egg-tartine-tomate-avoca-mayo,breakfast)
var japanesecrepe=makeprudect(JapaneseCrepe,'breakfast/crepe.jpg',14,chocla-banan-strawberry,breakfast)
var omlette=makeprudect(Omlette,'breakfast/Basic-omelette-1024x656.jpg',14,eggs-cheese-vegtable,breakfast)
//COOKISE
var mango=makeprudect(mangoCashew,'cookise/mango.jpg',5,mango,Cookise)
var bluberry=makeprudect(Bluberry-Cookise,'cookise/blueberry.jpg',5,bluberry,Cookise)
var chocolate=makeprudect(chocolate-cookise,'cookise/chocclate chip.jpg',5,chocola,Cookise)
var cranberry=makeprudect(Cranberry-pecan,'cookise/cranberry.jpg',5,cranberry,Cookise)
var goldenMac=makeprudect(Golden_macadamia,'cookise/golden.jpg',5,macadamia,Cookise)
//
var All=[
    icevanill,
    iceChokola,
    iceBanan,
    Icefrapp,
    cappucino,
    espresso,
    americano,
    coffeCrem,
    lumberjackt,
    EggTartine,
    japanesecrepe,
    omlette,
    mango,
    bluberry,
    chocolate,
    goldenMac
]



























function each(array, func) {
    for (var i = 0; i < array.length; i++) {
      func(array[i], i)
    }
  }
  
  function map(array, f) {
    var acc = []
    each(array, function (element, i) {
      acc.push(f(element, i))
    })
    return acc
  }
  
  function filter(array, predicate) {
    var acc = []
    each(array, function (element, index) {
      if (predicate(element, index)) {
        acc.push(element)
      }
    })
    return acc
  }
  
  function reduce(array, f, acc) {
    if (acc === undefined) {
      acc = array[0]
      array = array.slice(1)
    }
    each(array, function (element, i) {
      acc = f(acc, element, i)
    })
    return acc
  }
  //
  var each = function (coll, func) {
    if (Array.isArray(coll)) {
        for (var i = 0; i < coll.length; i++) {
            func(coll[i], i)
        }
    }
    else {
        for (var key in coll) {
            func(coll[key], key)
        }
    }
}

var filter = function (array, predicate) {
    var acc = [];
    each(array, function (e, i) {
        if (predicate(e, i)) {
            acc.push(e)
        }
    })
    return acc;
}