let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: `"There are two ways of spreading light: to be the candle or the mirror that reflects it."`,
        person: `Edith Wharton`
    },

    {
        quote: `"It is often the small steps, not the giant leaps, that bring about the most lasting change."`,
        person: `Queen Elizabeth II`
    },

    {
        quote: `"Education is the most powerful weapon which you can use to change the world."`,
        person: `Nelson Mandela`
    },
    {
        quote: `"There is always light. If only we're brave enough to see it. If only we're brave enough to be it."`,
        person: `Amanda Gorman`
    },
    {
        quote: `"It took me quite a long time to develop a voice, and now that I have it, I am not going to be silent."`,
        person: `Madeleine Albright`
    },
    {
        quote: `"You can't rely on how you look to sustain you, what sustains us, what is fundamentally beautiful is compassion; for yourself and your those around you."`,
        person: `Lupita Nyong O`
    },
    {
        quote: `"We do not fall in love with the package of the person; we fall in love with the inside of a person."`,
        person: `Anne Heche`
    },
    {
        quote: `"Don't save your best for when you think the material calls for it. Always bring your full potential to every take, and be on top of your job, or they will replace you."`,
        person: `Gabrielle Union`
    },

];

btn.addEventListener("click",function() {
    let random = Math.floor(Math.random()* quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})