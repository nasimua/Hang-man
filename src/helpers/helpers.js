export function showNotification(setter) {
    setter(true);
    setTimeout(() => {
        setter(false)
    }, 3000);
}

export function checkWin(correct, incorrect, word) {
    let status = 'win'

    // check for win
    word.split('').forEach(letter => {
        if (!correct.includes(letter)) {
            status = '';
        }
    })

    // check for loss
    if (incorrect.length === 7) {
        status = 'lose';
    }

    return status;
}