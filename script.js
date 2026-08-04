const photos = {
    standard: ["stk1.jpg", "stk2.jpg", "stk3.jpg", "stk4.jpg"],
    twin: ["tw1.jpg", "tw2.jpg", "tw3.jpg", "tw4.jpg"],
    twindeluxe: ["dl1.jpg", "dl2.jpg", "dl3.jpg", "dl4.jpg"],
    luxe: ["l1.jpg", "l2.jpg", "l3.jpg", "l4.jpg"]
};

const index = {
    standard: 0,
    twin: 0,
    twindeluxe: 0,
    luxe: 0
};

function nextImage(room){
    index[room] = (index[room] + 1) % photos[room].length;
    document.getElementById(room).src = photos[room][index[room]];
}

function prevImage(room){
    index[room]--;
    if(index[room] < 0){
        index[room] = photos[room].length - 1;
    }
    document.getElementById(room).src = photos[room][index[room]];
}
