<template>
<div class="backgroundfoooter">  
<section class="section">
    
    <div class="columns">
        <div class="column is-3 has-text-centered">

                <img src="../../assets/logotipo.png">
          
            <h2 class="title is-2 fontGoogle"> {{title}}</h2>
        </div>
        <div class="column is-3">
                <p class="title is-4 has-text-centered"> {{subtitle}} </p>
                <p class="has-text-justified fontWhite"> {{direccion}}</p> 
        </div>
        <div class="column is-3">
          <div class="has-text-centered">
            <p class="title is-4 has-text-centered"> Proximos eventos </p>
              <p class="fontWhite">
                <span class="icon">
                  <i class="fa fa-calendar"></i>
                </span>
                24 Diciembre: <br>
                Servicio de Navidad <br>
                <span class="icon">
                  <i class="fa fa-clock-o"></i>
                </span> Hora: <br> 9:00am hora Vzla.
              </p>
            <!--
              <div class="calendar">
                <div class="calendar-nav">
                  <div class="calendar-nav-left">
                    <button class="button is-text">
                      <i class="fa fa-chevron-left"></i>
                    </button>
                  </div>
                  <div>March 2017</div>
                  <div class="calendar-nav-right">
                    <button class="button is-text">
                      <i class="fa fa-chevron-right"></i>
                    </button>
                  </div>
                </div>
                <div class="calendar-container">
                  <div class="calendar-header">
                    <div class="calendar-date">Sun</div>
                    <div class="calendar-date">Mon</div>
                    <div class="calendar-date">Tue</div>
                    <div class="calendar-date">Wed</div>
                    <div class="calendar-date">Thu</div>
                    <div class="calendar-date">Fri</div>
                    <div class="calendar-date">Sat</div>
                  </div>
                  <div class="calendar-body">
                    <div class="calendar-date is-disabled"><button class="date-item">26</button></div>
                    <div class="calendar-date is-disabled"><button class="date-item">27</button></div>
                    <div class="calendar-date is-disabled"><button class="date-item">28</button></div>
                    <div class="calendar-date"><button class="date-item">1</button></div>
                    <div class="calendar-date"><button class="date-item">2</button></div>
                    <div class="calendar-date"><button class="date-item">3</button></div>
                    <div class="calendar-date tooltip" data-tooltip="Today"><button class="date-item is-today">4</button></div>
                    <div class="calendar-date tooltip" data-tooltip="Not available" disabled=""><button class="date-item">5</button></div>
                    <div class="calendar-date"><button class="date-item">6</button></div>
                    <div class="calendar-date"><button class="date-item">7</button></div>
                    <div class="calendar-date tooltip" data-tooltip="You have appointments"><button class="date-item">8</button></div>
                    <div class="calendar-date"><button class="date-item">9</button></div>
                    <div class="calendar-date"><button class="date-item">10</button></div>
                    <div class="calendar-date"><button class="date-item">11</button></div>
                    <div class="calendar-date"><button class="date-item">12</button></div>
                    <div class="calendar-date"><button class="date-item">13</button></div>
                    <div class="calendar-date"><button class="date-item">14</button></div>
                    <div class="calendar-date"><button class="date-item">15</button></div>
                    <div class="calendar-date calendar-range range-start"><button class="date-item is-active">16</button></div>
                    <div class="calendar-date calendar-range"><button class="date-item">17</button></div>
                    <div class="calendar-date calendar-range"><button class="date-item">18</button></div>
                    <div class="calendar-date calendar-range"><button class="date-item">19</button></div>
                    <div class="calendar-date calendar-range range-end"><button class="date-item is-active">20</button></div>
                    <div class="calendar-date"><button class="date-item">21</button></div>
                    <div class="calendar-date"><button class="date-item">22</button></div>
                    <div class="calendar-date"><button class="date-item">23</button></div>
                    <div class="calendar-date"><button class="date-item">24</button></div>
                    <div class="calendar-date"><button class="date-item">25</button></div>
                    <div class="calendar-date"><button class="date-item">26</button></div>
                    <div class="calendar-date"><button class="date-item">27</button></div>
                    <div class="calendar-date"><button class="date-item">28</button></div>
                    <div class="calendar-date"><button class="date-item">29</button></div>
                    <div class="calendar-date"><button class="date-item">30</button></div>
                    <div class="calendar-date"><button class="date-item">31</button></div>
                    <div class="calendar-date is-disabled"><button class="date-item">1</button></div>
                  </div>
                </div>
              </div>
              -->

          </div>
        </div>
        <div class="column is-3">
            <div class="has-text-centered">
                <p class="title is-4 has-text-centered"> {{subtitle2}} </p>
                <nav class="level is-mobile has-text-right">
                 
                    <a class="level-item fontWhite">
                        <span class="icon is-large"><i class="fa fa-twitter fa-2x"></i></span>
                    </a>
                    <a class="level-item fontWhite">
                        <span class="icon is-large"><i class="fa fa-instagram fa-2x"></i></span>
                    </a>
                    <a class="level-item fontWhite">
                        <span class="icon is-large"><i class="fa fa-facebook fa-2x"></i></span>
                    </a>
                    <a class="level-item fontWhite">
                        <span class="icon is-large"><i class="fa fa-youtube fa-2x"></i></span>
                    </a>

                  </nav>
            </div>
        </div>
    </div>

    <!--<div class="columns">
        <div class="column is-2"></div>
        <div class="column is-4">
            <div class="box">
                <h3 class="title is-4 has-text-centered"> {{subtitle}} </h3>
                <p class="has-text-justified"> {{direccion}}</p>
            </div>
        </div>
        <div class="column is-4 has-text-centered">
            <div class="box has-text-centered">
                <h3 class="title is-4 has-text-centered"> {{subtitle2}} </h3>
                <nav class="level is-mobile has-text-centered">
                  <div class="level-left">
                    <a class="level-item">
                        <span class="icon is-large"><i class="fa fa-twitter fa-2x"></i></span>
                    </a>
                    <a class="level-item">
                        <span class="icon is-large"><i class="fa fa-instagram fa-2x"></i></span>
                    </a>
                    <a class="level-item">
                        <span class="icon is-large"><i class="fa fa-facebook fa-2x"></i></span>
                    </a>
                    <a class="level-item">
                        <span class="icon is-large"><i class="fa fa-youtube fa-2x"></i></span>
                    </a>
                    </div>
                      <div class="level-right">
                      </div>
                  </nav>
                  <p>¡Pasión por su presencia!</p>
            </div>
        </div>
        <div class="column is-2"></div>
    </div> -->
</section>

</div>
</template>

<script>

export default{
  name: 'footer',
  data () {
    return {
      title: 'Adoración Viva',
      subtitle: 'Ubicanos en:',
      direccion: 'Avenida Henry Ford al lado de la Panadería La Espiga de Oro, segundo nivel, La Isabelica Valencia Edo. Carabobo - Venezuela.',
      subtitle2: 'Nuestras Redes Sociales:'
    }
  }
}
</script>

<style scoped>
  .backgroundfoooter{
    background-image: url('./assets/footer.jpg') !important;
    background-size: cover;
  }
  .fontGoogle{
    font-family: 'Kaushan Script', cursive;
  }
  .fontWhite{
    color: white !important;
  }    
</style>

