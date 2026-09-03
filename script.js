const galleries = {
    standard: [
        "stk1.jpg",
        "stk2.jpg",
        "stk3.jpg",
        "stk4.jpg"
    ],

    twin: [
        "tw1.jpg",
        "tw2.jpg",
        "tw3.jpg",
        "tw4.jpg"
    ],

    twindeluxe: [
        "dl1.jpg",
        "dl2.jpg",
        "dl3.jpg",
        "dl4.jpg"
    ],

    luxe: [
        "l1.jpg",
        "l2.jpg",
        "l3.jpg",
        "l4.jpg"
    ],

    sauna: [
        "sauna1.jpg",
        "sauna2.jpg",
        "sauna3.jpg",
        "sauna4.jpg",
        "sauna5.jpg"
    ],

    gym: [
        "gym1.jpg",
        "gym2.jpg",
        "gym3.jpg",
        "gym4.jpg",
        "gym5.jpg"
    ],

    restoran: [
        "restoran1.jpg",
        "restoran2.jpg",
        "restoran3.jpg",
        "restoran4.jpg",
        "restoran5.jpg"
    ]
};

const currentIndex = {
    standard: 0,
    twin: 0,
    twindeluxe: 0,
    luxe: 0,

    sauna: 0,
    gym: 0,
    restoran: 0
};

function nextImage(room){

    currentIndex[room]++;

    if(currentIndex[room] >= galleries[room].length){
        currentIndex[room] = 0;
    }

    changeImage(
    room,
    galleries[room][currentIndex[room]]
    );
}

function prevImage(room){

    currentIndex[room]--;

    if(currentIndex[room] < 0){
        currentIndex[room] = galleries[room].length - 1;
    }

    changeImage(
    room,
    galleries[room][currentIndex[room]]
    );
}
function changeImage(room, src){

    let img = document.getElementById(room);

    img.style.opacity = "0";

    setTimeout(() => {
        img.src = src;
        img.style.opacity = "1";
    }, 300);

}
