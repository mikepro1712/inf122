import logo from './logo.svg';
import './App.css';
import Evento from './components/Evento.js'
import EventoB from './components/EventoB.js'

function App() {
  return (
    <div className="App">
      <EventoB title="Py Pizza 03 - PyPuzzle"
        image="evento1"
        dateLiteral="09 de Diciembre de 2023 - 13:30 GMT-4"
        placeLiteral="Mr Pizza, 20 de Octubre Frente a la Plaza Abaroa, La Paz, Bolivia"
        description="
        ¡Hola Pythonista!
        Participa en este Evento Presencial de la comunidad Python La Paz
        ¿Cuánto conoces de Python?
        Aprende a trabajar en equipo resolviendo increíbles acertijo
        ¡Anímate a ser parte de esta actividad!
        "
      />
      <EventoB title="MeetUp 11 - 3 Pitfalls de la Ingeniería de datos (donde no meter la pata)"
        image="evento2"
        dateLiteral="25 de Noviembre de 2023"
        placeLiteral="Online"
        description="
        ¡Hola Pythonista!
        Acompáñanos al MeetUp mensual de la comunidad Python La Paz

        En este MeetUp tendremos la participación de Valery Calderon Briz, Ingeniera en Telecomunicaciones actualmente trabajando como Ingeniera de datos Senior en One.Five
        Anteriormente Co-organizadora de Pyladies MX y Líder de la comunidad Python Guatemala
        ha impartido conferencias y talleres en diversas PyCon en múltiples países.
        "
      />
      <EventoB title="¡Ven a conocer a la comunidad!"
        image="evento3"
        dateLiteral="13 Noviembre de 2023 - 27 de Noviembre de 2023"
        placeLiteral="La Paz - Bolivia
        "
        description="
        Hola Pythonista!

Participa en este Evento Presencial de la comunidad Python La Paz

¿Sabías que existe una comunidad de Python en la ciudad de La Paz?

Entérate de todas las actividades y proyectos que realiza la comunidad Python La Paz

¡Descubre cómo participar!

Completa el formulario de registro y participa del sorteo de asombrosos premios el día de la presentación

Fechas

Aula 105 - Carrera de Estadística - UMSA - Lunes 13 de Noviembre de 12:00 - 14:00
Campus Achocalla - Universidad Privada de Bolivia - Miércoles 15 de Noviembre de 12:00 - 14:00
Paraninfo - Universidad del Valle Sede La Paz - Martes 21 de Noviembre de 16:00 - 18:00
Sala Audiovisual - Carrera de Informática - UMSA - Jueves 23 de Noviembre de 16:00 - 18:00
Auditorio 4 - Universidad Católica Boliviana - Lunes 27 de Noviembre de 18:30 - 20:30
        "
      />
    </div>
  );
}

export default App;