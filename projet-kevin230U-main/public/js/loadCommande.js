/* idée du code fourni sur le Tp09*/

const REQUEST_TIMEOUT = 2000; // ms

const commandTable = document.getElementById('first');
const commandTableBody = commandTable.getElementsByTagName('tbody')[0];
const loadingAlert = document.getElementById('loading-alert');
const loadingSpinner = document.getElementById('loading-spinner');
function loadcommand() {
    commandTable.classList.add('d-none');
    loadingAlert.classList.add('d-none');
    loadingSpinner.classList.remove('d-none');
    const abortController = new AbortController();
    const timer = setTimeout(() => {
        abortController.abort();
    }, REQUEST_TIMEOUT);
    fetch('/workersOrder', { signal: abortController.signal })
        .then((response) => response.json())
        .then((json) => {
            commandTableBody.innerHTML = '';
            const newTab = json.newTab;
            newTab.forEach((command) => {
                const row = document.createElement('tr');
                const numeroCol = document.createElement('td');
                numeroCol.textContent = command.numero;
                row.appendChild(numeroCol);
                const datecol = document.createElement('td');
                datecol.textContent = command.date;
                row.appendChild(datecol);
                const heurecol = document.createElement('td');
                heurecol.textContent = command.heure;
                row.appendChild(heurecol);
                const repascol = document.createElement('td');
                repascol.textContent = command.repas;
                row.appendChild(repascol);
                const idcol = document.createElement('td');
                idcol.textContent = command.id;
                row.appendChild(idcol);
                const pretcol = document.createElement('td');
                const btn1 = document.createElement("button");
                btn1.onclick = function affiche() {
                    document.getElementById('').style.display = 'block';
                }
                btn1.name = "cmd"
                btn1.value = command.repas;
                btn1.textContent = "Retirer";
                pretcol.appendChild(btn1);
                row.appendChild(pretcol);
                commandTableBody.appendChild(row);
            });
            commandTable.classList.remove('d-none');
        })
        .catch((error) => {
            loadingAlert.classList.remove('d-none');
        })
        .finally(() => {
            loadingSpinner.classList.add('d-none');
            clearTimeout(timer);
        });
}
loadcommand();
