const boton = document.getElementById('aprobar');
const citas = document.getElementById('citas');
const citasTexto = document.getElementById('citas-texto');
const estado = document.getElementById('estado');
const demo = document.querySelector('.demo');

let aprobada = false;

boton.addEventListener('click', () => {
  if (aprobada) {
    estado.textContent = 'Reintento detectado. La cita ya existe, así que no se creó otra.';
    return;
  }
  aprobada = true;
  citas.textContent = '1';
  citasTexto.textContent = 'cita en el calendario';
  demo.classList.add('aprobada');
  boton.textContent = 'Aprobar otra vez';
  estado.textContent = 'Cita creada. Ahora intenta aprobarla otra vez.';
});
