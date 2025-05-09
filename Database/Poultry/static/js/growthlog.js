function toggleForm() {
  const menu = document.getElementById('actionMenu');
  menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
}

function handleAction(action) {
  if (action === 'update') {
    enableEditing();
  } else if (action === 'add') {
    addRow();
  } else if (action === 'delete') {
    deleteRow();
  }
}

function enableEditing() {
  const rows = document.querySelectorAll('#dataTable tbody tr');
  rows.forEach(row => {
    row.querySelectorAll('td').forEach(cell => {
      if (cell.cellIndex !== 0) {  // Skip the Batch ID column (index 0)
        const input = document.createElement('input');
        input.type = 'text';
        input.value = cell.textContent;
        cell.innerHTML = '';
        cell.appendChild(input);
      }
    });
  });

  // save button
  if (!document.getElementById('saveBtn')) {
    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save';
    saveBtn.id = 'saveBtn';
    saveBtn.className = 'save-btn';
    saveBtn.onclick = saveUpdates;
    document.querySelector('.main-content').appendChild(saveBtn);
  }
}

function saveUpdates() {
  const rows = document.querySelectorAll('#dataTable tbody tr');
  rows.forEach(row => {
    row.querySelectorAll('td').forEach(cell => {
      if (cell.firstChild && cell.firstChild.tagName === 'INPUT') {
        cell.textContent = cell.firstChild.value;
      }
    });
  });

  const saveBtn = document.getElementById('saveBtn');
  if (saveBtn) saveBtn.remove();
}

function addRow() {
  const tableBody = document.querySelector('#dataTable tbody');
  const newRow = document.createElement('tr');

  const batchID = document.createElement('td');
  batchID.textContent = `Batch${String(tableBody.rows.length + 1).padStart(3, '0')}`;
  newRow.appendChild(batchID);

  // number ng colums sa baba
  for (let i = 0; i < 2; i++) {
    const td = document.createElement('td');
    const input = document.createElement('input');
    input.type = 'text';
    td.appendChild(input);
    newRow.appendChild(td);
  }

  tableBody.appendChild(newRow);


  if (!document.getElementById('saveBtn')) {
    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save';
    saveBtn.id = 'saveBtn';
    saveBtn.className = 'save-btn';
    saveBtn.onclick = saveUpdates;
    document.querySelector('.main-content').appendChild(saveBtn);
  }
}

function deleteRow() {
  const selectedRow = document.querySelector('.highlight');
  if (selectedRow) selectedRow.remove();
}

document.querySelector('#dataTable').addEventListener('click', function (e) {
  if (e.target.tagName === 'TH') return;

  const rows = document.querySelectorAll('#dataTable tbody tr');
  rows.forEach(row => row.classList.remove('highlight'));

  const clickedRow = e.target.closest('tr');
  if (clickedRow) clickedRow.classList.add('highlight');
});
