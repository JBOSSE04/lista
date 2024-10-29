function crearTabla(rows, cols) {
  const table = document.createElement('table');
  for (let i = 0; i < rows; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < cols; j++) {
      const cell = document.createElement('td');
      cell.addEventListener('mousemove', function(event) {
        paintCell(event, cell);
      });
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  return table;
}

function paintCell(event, cell) {
  if (event.ctrlKey) {
    cell.style.backgroundColor = 'red';
  } else if (event.shiftKey) {
    cell.style.backgroundColor = 'blue';
  } else {
    cell.style.backgroundColor = 'white';
  }
}

function borrar() {
  const cells = document.querySelectorAll('td');
  cells.forEach(cell => cell.style.backgroundColor = 'white');
}
function azul() {
  const cells = document.querySelectorAll('td');
  cells.forEach(cell => cell.style.backgroundColor = 'blue');
}
function red() {
  const cells = document.querySelectorAll('td');
  cells.forEach(cell => cell.style.backgroundColor = 'red');
}

window.onload = function() {
  const canvasContainer = document.getElementById('contenedor');
  const table = crearTabla(100, 100);
  canvasContainer.appendChild(table);
};
