const ul = document.getElementById('bands');
const bands = [
    'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil',
    'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State',
    'We Came as Romans', 'Counterparts', 'Oh, Sleeper',
    'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

bands.sort((a, b) => {
    aFixed = a.replace(/^(the |an |a )/i, '');
    bFixed = b.replace(/^(the |an |a )/i, '');
    return (aFixed > bFixed) ? 1 : ((bFixed > aFixed) ? -1 : 0);
});

bands.forEach(band => ul.innerHTML += `<li>${band}</li>`);