function calculateLove() {
    const name1 = document.getElementById('name1').value.trim();
    const name2 = document.getElementById('name2').value.trim();

    if (name1 === '' || name2 === '') {
        alert('Masukkan kedua nama!');
        return;
    }

    document.getElementById('input-container').style.display = 'none';

    let lovePercentage;
    if ((name1 === 'Alfie' && name2 === 'Christy') || (name1 === 'Christy' && name2 === 'Alfie')) {
        lovePercentage = 100;
    } else if ((name1 === 'Alfie Lexandra' && name2 === 'Christy Valentina') || (name1 === 'Christy Valentina' && name2 === 'Alfie Lexandra')) {
        lovePercentage = 100;
    } else if ((name1 === 'Alfie Luxiona Lexandra' && name2 === 'Christy Valentina Aurora') || (name1 === 'Christy Valentina Aurora' && name2 === 'Alfie Luxiona Lexandra')) {
        lovePercentage = 100;
    } else if ((name1 === 'Alfie Luxiona' && name2 === 'Christy Aurora') || (name1 === 'Christy Aurora' && name2 === 'Alfie Luxiona')) {
        lovePercentage = 100;
    } else if ((name1 === 'alfie' && name2 === 'christy') || (name1 === 'christy' && name2 === 'alfie')) {
        lovePercentage = 100;
    } else if ((name1 === 'alfie lexandra' && name2 === 'christy valentina') || (name1 === 'christy valentina' && name2 === 'alfie lexandra')) {
        lovePercentage = 100;
    } else if ((name1 === 'alfie luxiona lexandra' && name2 === 'christy valentina aurora') || (name1 === 'christy valentina aurora' && name2 === 'alfie luxiona lexandra')) {
        lovePercentage = 100;
    } else if ((name1 === 'alfie luxiona' && name2 === 'christy aurora') || (name1 === 'christy aurora' && name2 === 'alfie luxiona')) {
        lovePercentage = 100;
    } else if ((name1 === 'raziq' && name2 === 'alby') || (name1 === 'alby' && name2 === 'raziq')) {
    	lovePercentage = 100;
  	} else {
        lovePercentage = Math.floor(Math.random() * 100) + 1;
    }

    document.getElementById('result').innerText = `${name1} dan ${name2} cocok ${lovePercentage}%!`;
}

function showLoading() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerText = 'Loading...';
    resultDiv.style.fontSize = '24px';
    resultDiv.style.fontWeight = 'bold';
}

function hideLoading() {
    calculateLove();
}

function startLoveCalculation() {
    showLoading();

    setTimeout(hideLoading, 3000);
}

document.querySelector('button').onclick = startLoveCalculation;
