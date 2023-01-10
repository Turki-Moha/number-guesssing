const img = [
    'assets/0.png',
    'assets/1.png',
    'assets/2.png',
    'assets/3.png',
    'assets/4.png',
    'assets/5.png',
    'assets/6.png',
    'assets/7.png',
    'assets/8.png',
    'assets/9.png'
];

function randomize(){
    let rand = Math.floor(Math.random()*img.length);
    let user = document.getElementById('num').value;
    document.getElementById('img').src = img[rand];
    document.getElementById('img').style.width = '80px';
    document.getElementById('img').style.height = '150px';
    if( user == rand){
        document.getElementById('result').textContent = 'Great Job';
        document.getElementById('result').style.color = 'green';
    }else{
        document.getElementById('result').textContent = 'Try again';
        document.getElementById('result').style.color = 'red';
    }
}