
function showASectionById(id) {
    document.getElementById('donate-section').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');


    document.getElementById(id).classList.remove('hidden');
}