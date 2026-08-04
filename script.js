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
    ]
};

const current = {
    standard: 0,
    twin: 0,
    twindeluxe: 0,
    luxe: 0
};

function nextImage(room){

    current[room]++;

    if(current[room] >= galleries[room].length){
        current[room] = 0;
    }

    document.getElementById(room).src =
        galleries[room][current[room]];
}

function prevImage(room){

    current[room]--;

    if(current[room] < 0){
        current[room] = galleries[room].length - 1;
    }

    document.getElementById(room).src =
        galleries[room][current[room]];
}
