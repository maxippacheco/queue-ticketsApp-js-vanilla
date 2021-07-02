'use strict'


class Queue{

	constructor() {
		this.items = [];
	}
	
	enqueue(value){
		this.items.push(value);
	}

	dequeue(){
		return this.items.shift();
	}

	front(){
		return this.items[0];
	}

	isEmpty(){
		return this.items.length === 0;
	}

	size(){
		return this.items.length;
	}

	print(){
		return console.log(this.items.join(', '));
	}

}


const tickets = new Queue();

const form = document.querySelector('form');
const ticket_input = document.querySelector('#ticket');
const front_ticket = document.querySelector('div');
const next = document.querySelector('button');

const enCola1 = document.querySelector('#ticket_cola1');
const enCola2 = document.querySelector('#ticket_cola2');
const enCola3 = document.querySelector('#ticket_cola3');


form.addEventListener('submit', e => {
	
	e.preventDefault();

	if (ticket_input.value.trim() === '' || ticket_input.value.trim() == undefined) {
		return alert('Yooo');
	}else{
		tickets.enqueue(ticket_input.value);
		console.log('Enqueue!');
	}

	if (!tickets.isEmpty()) {	

		const first_ticket = tickets.front();
		front_ticket.innerHTML = `<div>${first_ticket}</div>`;

		if (tickets.size() > 1) {
			enCola1.innerHTML = `${tickets.items[1]}`
		}
		
		if (tickets.size() > 2) {
			enCola2.innerHTML = `${tickets.items[2]}`
			console.log(enCola2);
		}
		
		if(tickets.size() > 3){
			enCola3.innerHTML = `${tickets.items[3]}`
		}
	}

	tickets.print();
});

next.addEventListener('click', () => {
	if (!tickets.isEmpty()) {
		
		tickets.dequeue();

		const first_ticket = tickets.front();
		front_ticket.innerHTML=`<div>${first_ticket}</div>`;

		if (tickets.size() > 1) {
			enCola1.innerHTML = `${tickets.items[1]}`;
		}else{
			enCola1.innerHTML = ``;
		}
		
		if (tickets.size() > 2) {
			enCola2.innerHTML = `${tickets.items[2]}`;
		}else{
			enCola2.innerHTML = ``;
		}
		
		if(tickets.size() > 3){
			enCola3.innerHTML = `${tickets.items[3]}`;
		}else{
			enCola3.innerHTML = ``;
		}

		if (first_ticket === undefined) {
			front_ticket.innerHTML = `<div>All the tickets were taken care of</div>`;
		}

		tickets.print();
	}
})


