window.addEventListener('online', updateStatus);
window.addEventListener('offline', updateStatus);

function updateStatus(){
    const status = document.getElementById('status');
    const userStatus = document.querySelector('.user-status');
    const content = document.querySelector('.content');
    const msg = document.querySelector('.msg');
    
    if(navigator.onLine){
        status.innerHTML = 'Online';
        userStatus.classList.remove('offline');
        userStatus.classList.add('online');
        content.style.display = 'flex';
        msg.style.display = 'none';
    }else{
        status.innerHTML = 'Offline';
        userStatus.classList.remove('online');
        userStatus.classList.add('offline');
        content.style.display = 'none';
        msg.style.display = 'block';
    }
}

updateStatus();