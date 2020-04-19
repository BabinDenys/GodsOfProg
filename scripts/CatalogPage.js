var arr = [
    {
        name: "Овощи"
    },
    {
        name: "Фрукты"
    },
    {
        name: "Молочные продукты"
    },
    {
        name: "Мясные продукты"
    }
]

var arrr0 = [
    {
        price: 30,
        disc: 'Это Яблоко',
        name: "Яблоко"
    },
    {
        price: 304,
        disc: 'Это пирожок',
        name: "пирожок"
    },
    {
        price: 90,
        disc: 'Это помидорка',
        name: "Помидор"
    }
]

var arrr1 = [
    {
        price: 233330,
        disc: 'Это Ябл33333око',
        name: "090"
    }
]

function loadProducts() {
    for (let index = 0; index < arr.length; index++) {
        newDiv = document.createElement("div");
        newDiv.innerHTML = arrr0[index].name;

        my_div = document.getElementById("prod");

        document.body.appendChild(newDiv, my_div);
    }
}


function showParam (param) {
    console.log(param);
    document.getElementById("qwerty").innerHTML = param;
}

function loadCat() {
    for (let index = 0; index < arr.length; index++) {
        newDiv = document.createElement("button");
        newDiv.innerHTML = arr[index].name;
        newDiv.id = 'btn' + index;
        newDiv.addEventListener("click", loadProducts(0))

        my_div = document.getElementById("prod");

        document.body.appendChild(newDiv, my_div);
    }
}