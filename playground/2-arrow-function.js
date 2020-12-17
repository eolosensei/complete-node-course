// const square = function (x) {
//     return x * x;
// }

// const square = (x) => {
//     return x * x
// };

// const square = (x) => x * x;

// console.log(square(3));

const evento = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
        console.log('Guest List for ' + this.name);
        console.log('-----------------------------')
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name);
        })
    }
}

evento.printGuestList();
