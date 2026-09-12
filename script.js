const galleries = {
    standard: [
        "stk1.jpg",
        "059.png",
        "stk3.jpg",
        "stk4.jpg"
    ],

    twin: [
        "043.png",
        "044.png",
        "045.png",
        "046.png",
        "048.png"
    ],

    twindeluxe: [
        "dl1.jpg",
        "dl2.jpg",
        "dl3.jpg",
        "dl4.jpg"
    ],

    luxe: [
        "035.png",
        "037.png",
        "039.png",
        "040.png",
        "041.png",
        "042.png"
    ],

    restoran: [
        "restoran1.jpg",
        "019.jpg",
        "027.jpg",
        "024.jpg",
        "restoran2.jpg",
        "restoran3.jpg"
    ],

    gym: [
        "gym1.jpg",
        "gym2.jpg",
        "gym3.jpg",
        "gym4.jpg",
        "gym5.jpg"
    ],

    sauna: [
        "sauna1.jpg",
        "sauna2.jpg",
        "sauna3.jpg",
        "sauna4.jpg",
        "sauna5.jpg"
    ]
};

const currentIndex = {
    standard: 0,
    twin: 0,
    twindeluxe: 0,
    luxe: 0,
    restoran: 0,
    gym: 0,
    sauna: 0
};

function nextImage(room) {
    if (!galleries[room]) return;

    currentIndex[room]++;

    if (currentIndex[room] >= galleries[room].length) {
        currentIndex[room] = 0;
    }

    changeImage(room, galleries[room][currentIndex[room]]);
}

function prevImage(room) {
    if (!galleries[room]) return;

    currentIndex[room]--;

    if (currentIndex[room] < 0) {
        currentIndex[room] = galleries[room].length - 1;
    }

    changeImage(room, galleries[room][currentIndex[room]]);
}

function changeImage(room, src) {
    let img = document.getElementById(room);
    if (!img) return;

    img.style.opacity = "0";

    setTimeout(() => {
        img.src = src;
        img.style.opacity = "1";
    }, 300);
}
