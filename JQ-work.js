
function makeprudect(id,name,img,price,ingredient,category){
    return{
        id:0,
        name:name,
        img:img,
        price:price,
        ingredient:ingredient,
        category:category
    }
}
//ICE COFFE
var icevanill=makeprudect(1,'name:vanilla_Ice_Coffe','iccecofee.png','price:8dt','the ingredient is: coffe ice cubes vanilla serum CremFraiche','iceCoffe')
var iceChokola=makeprudect(2,'name:Chokola_Ice_Cofee','icecoff.png','price:9dt','the ingredient is:coffe ice cubes chokola serum CremFraiche','iceCoffe')
var iceBanan=makeprudect(3,'name:Ice_Coffe_Banan','banan.png','price:10dt','the ingredient is:cofee ice cubes banan serum CremFraiche','iceCoffe')
var Icefrapp=makeprudect(4,'name:Frappuccino','frappo.png','price:11dt','the ingredient is: ice espresso milk chocolatesyrup','iceCoffe') 
//HOTCOFFE
var cappucino=makeprudect(5,'name:cappucino','cappoucino.png','price:4dt','','hotCoffe')
var espresso=makeprudect(6,'name:Espresso','espresso.png','price:3dt','','hotCoffe')
var americano=makeprudect(7,'name:americano','americano.jpg','price:3dt','','hotCoffe')
var coffeCrem=makeprudect(8,'name:coffeCrem','caffecrem.png','price:4dt','','hotCoffe')
//BREAKFAST
var lumberjackt=makeprudect(9,'name:lumberjackt_Breakfast','download.jpg','price:15dt','the ingredient is:sausage eggs tost bacon mayo','breakfast')
var EggTartine=makeprudect(10,'name:Egg_Tartine','Eggtart.png','price:11dt','the ingredient is:egg tartin avoca','breakfast')
var japanesecrepe=makeprudect(11,'name:Japanese_Crepe','crep.png','price:14dt','the ingredient is:chocla banan strawberry','breakfast')
var omlette=makeprudect(12,'name:Omlette','omlett.png','price:14dt','the ingredient is:eggs cheese vegtable','breakfast')
//COOKISE
var bluberry=makeprudect(14,'name:Bluberry-Cookise','blueberry.png','price:5dt','the ingredient is:bluberry','Cookise')
var chocolate=makeprudect(15,'name:chocolate-cookise','choclat.png','price:5dt','the ingredient is:chocola','Cookise')
var cranberry=makeprudect(16,'name:Cranberry-pecan','cammill.png','price:5dt','the ingredient is:cranberry','Cookise')
var goldenMac=makeprudect(17,'name:Golden_macadamia','wayhek.png','price:5dt','the ingredient is:macadamia','Cookise')
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
    bluberry,
    chocolate,
    goldenMac,
    cranberry
]
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
var filterByCategory=function (params) {
    return filter(All,function (element) {
        return element.category===params
    })
    
}

function show(All) {
    each(All,function (element) {
              $('.section-center').append(`<div class="item">
              
             <div> <img src=${element.img}></div>
             <div> <h2>${element.name}</h2> &nbsp;
              <h2>${element.price}</h2>&nbsp;
              <h2>${element.ingredient}</h2>
              <button>Buy</button></div>`)
           })
}
// show (All)

var test 
$("#All").click(function () {
    $('.section-center').empty()
show(All)
})
$("#ice").on("click",function () {
    $('.section-center').empty()
     test = filterByCategory("iceCoffe")
    show(test)
})
$("#hot").click(function () {
    $('.section-center').empty()
     test = filterByCategory("hotCoffe")
    show(test)
})
$("#break").click(function () {
    $('.section-center').empty()
     test = filterByCategory("breakfast")
    show(test)
})
$("#cook").on("click",function () {
    $('.section-center').empty()
     test = filterByCategory("Cookise")
    show(test)
})


function filter(array, predicate) {
    var acc = [];
    each(array, function (element, index) {

        if (predicate(element, index)) {

            acc.push(element);
        }
    });
    return acc;
}
function filterByCategory(query) {
    return filter(products, function (ele, i) {
        return ele.Categorie === query;
    });
}