const textArea = document.querySelector('#textArea');
const result = document.querySelector('#counterResult');
const btnAction = document.querySelector('#btnAction');


window.addEventListener('DOMContentLoaded', () => { 
    console.log('loaded...');

    btnAction.addEventListener('click', () => {
        let words;
        if (textArea.value.trim() == '') {
            words = [];
        } else {
            words = textArea.value.trim().split(" ");
        }
        result.innerHTML = `Total words: ${new Intl.NumberFormat('en-US').format(words.length)}`;
    });

});