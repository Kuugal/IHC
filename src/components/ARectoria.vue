<template>
  <v-app id="CoordinacionI">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      class="grey lighten-4"
      app
    >

<v-list>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>home</v-icon>
        </v-list-tile-action>
        <router-link to="/"><v-list-tile-title>Inicio</v-list-tile-title></router-link>
      </v-list-tile>

<v-list-group
        prepend-icon="account_balance"
        
      >
<v-list-tile slot="activator">
          <v-list-tile-title>Edificio A</v-list-tile-title>
        </v-list-tile>
       
          <v-list-tile>
        <v-list-tile-action>
          <v-icon>all_out</v-icon>
        </v-list-tile-action>
        <router-link to="/a-dir-in"><v-list-tile-title>Dirección de Informática</v-list-tile-title></router-link>
      </v-list-tile>

      <v-list-tile>
        <v-list-tile-action>
          <v-icon>all_out</v-icon>
        </v-list-tile-action>
         <router-link to="/a-rec"><v-list-tile-title>Rectoria</v-list-tile-title></router-link>
      </v-list-tile>

      <v-list-tile>
        <v-list-tile-action>
          <v-icon>all_out</v-icon>
        </v-list-tile-action>
        <router-link to="/a-vin"><v-list-tile-title>Vinculación y planeación</v-list-tile-title></router-link>
      </v-list-tile>

      <v-list-tile>
        <v-list-tile-action>
          <v-icon>all_out</v-icon>
        </v-list-tile-action>
        <router-link to="/a-sal-a"><v-list-tile-title>Sala de computo A</v-list-tile-title></router-link>
      </v-list-tile>

      <v-list-tile>
        <v-list-tile-action>
          <v-icon>all_out</v-icon>
        </v-list-tile-action>
        <router-link to="/a-sal-b"><v-list-tile-title>Sala de computo B</v-list-tile-title></router-link>
      </v-list-tile>

      <v-list-tile>
        <v-list-tile-action>
          <v-icon>all_out</v-icon>
        </v-list-tile-action>
        <router-link to="/a-sal-id"><v-list-tile-title>Sala de idiomas</v-list-tile-title></router-link>
      </v-list-tile>

      <v-list-tile>
        <v-list-tile-action>
          <v-icon>all_out</v-icon>
        </v-list-tile-action>
        <router-link to="/a-sal-j"><v-list-tile-title>Sala de juntas</v-list-tile-title></router-link>
      </v-list-tile>

      <v-list-tile>
        <v-list-tile-action>
          <v-icon>all_out</v-icon>
        </v-list-tile-action>
        <router-link to="/a-audi"><v-list-tile-title>Auditoría</v-list-tile-title></router-link>
      </v-list-tile>

      <v-list-tile>
        <v-list-tile-action>
          <v-icon>all_out</v-icon>
        </v-list-tile-action>
        <router-link to="/a-aud-a"><v-list-tile-title >Auditorio A</v-list-tile-title></router-link>
      </v-list-tile>
       
    </v-list-group>
<v-list-group
        prepend-icon="account_balance"
        
      >
<v-list-tile slot="activator">
          <v-list-tile-title>Edificio B</v-list-tile-title>
        </v-list-tile>
       
          <v-list-tile>
        <v-list-tile-action>
          <v-icon>all_out</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Dirección de Mecatrónica</v-list-tile-title>
      </v-list-tile>
      

      <v-list-tile>
        <v-list-tile-action>
          <v-icon>all_out</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Laboratorio C</v-list-tile-title>
      </v-list-tile>

      <v-list-tile>
        <v-list-tile-action>
          <v-icon>all_out</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Salón de actividades</v-list-tile-title>
      </v-list-tile>

      <v-list-tile>
        <v-list-tile-action>
          <v-icon>all_out</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Auditorio B</v-list-tile-title>
      </v-list-tile>
       
    </v-list-group>
<v-list-group
        prepend-icon="account_balance"
        
      >
<v-list-tile slot="activator">
          <v-list-tile-title>Edificio C</v-list-tile-title>
        </v-list-tile>
       
          <v-list-tile>
        <v-list-tile-action>
          <v-icon>all_out</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Cafetería</v-list-tile-title>
      </v-list-tile>
       
    </v-list-group>
    <v-list-group
        prepend-icon="account_balance"
        
      >
<v-list-tile slot="activator">
          <v-list-tile-title>Edificio D</v-list-tile-title>
        </v-list-tile>
       
          <v-list-tile>
        <v-list-tile-action>
          <v-icon>all_out</v-icon>
        </v-list-tile-action>
        <router-link to="/d-coo-i"><v-list-tile-title>Coordinación de inglés</v-list-tile-title></router-link>
      </v-list-tile>
      

      <v-list-tile>
        <v-list-tile-action>
          <v-icon>all_out</v-icon>
        </v-list-tile-action>
        <router-link to="/d-dir-ind"><v-list-tile-title>Dirección de ingeniería industrial</v-list-tile-title></router-link>
      </v-list-tile>


      <v-list-tile>
        <v-list-tile-action>
          <v-icon>all_out</v-icon>
        </v-list-tile-action>
        <router-link to="/d-lab-q"><v-list-tile-title >Laboratorio de química</v-list-tile-title></router-link>
      </v-list-tile>

      <v-list-tile>
        <v-list-tile-action>
          <v-icon>all_out</v-icon>
        </v-list-tile-action>
        <router-link to="/d-lab-man"><v-list-tile-title >Laboratorio de manufactura</v-list-tile-title></router-link>
      </v-list-tile>

      <v-list-tile>
        <v-list-tile-action>
          <v-icon>all_out</v-icon>
        </v-list-tile-action>
        <router-link to="/d-lab-hyn"><v-list-tile-title >Laboratorio de hidráulica y neumática</v-list-tile-title></router-link>
      </v-list-tile>

      <v-list-tile>
        <v-list-tile-action>
          <v-icon>all_out</v-icon>
        </v-list-tile-action>
        <router-link to="/d-lab-s"><v-list-tile-title >Laboratorio de simulación</v-list-tile-title></router-link>
      </v-list-tile>

      <v-list-tile>
        <v-list-tile-action>
          <v-icon>all_out</v-icon>
        </v-list-tile-action>
        <router-link to="/d-lab-mic"><v-list-tile-title >Laboratorio de microbiología</v-list-tile-title></router-link>
      </v-list-tile>

     
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>all_out</v-icon>
        </v-list-tile-action>
        <router-link to="/d-lab-fym"><v-list-tile-title >Laboratorio de física y metrología</v-list-tile-title></router-link>
      </v-list-tile>

      <v-list-tile>
        <v-list-tile-action>
          <v-icon>all_out</v-icon>
        </v-list-tile-action>
        <router-link to="/d-lab-ene"><v-list-tile-title >Laboratorio de energía</v-list-tile-title></router-link>
      </v-list-tile>

      <v-list-tile>
        <v-list-tile-action>
          <v-icon>all_out</v-icon>
        </v-list-tile-action>
        <router-link to="/d-lab-com"><v-list-tile-title >Laboratorio de cómputo</v-list-tile-title></router-link>
      </v-list-tile>

      <v-list-tile>
        <v-list-tile-action>
          <v-icon>all_out</v-icon>
        </v-list-tile-action>
        <router-link to="/d-lab-rob"><v-list-tile-title >Laboratorio de robótica</v-list-tile-title></router-link>
      </v-list-tile>

      <v-list-tile>
        <v-list-tile-action>
          <v-icon>all_out</v-icon>
        </v-list-tile-action>
        <router-link to="/d-lab-eye"><v-list-tile-title >Laboratorio de electrónica y electricidad</v-list-tile-title></router-link>
      </v-list-tile>

      <v-list-tile>
        <v-list-tile-action>
          <v-icon>all_out</v-icon>
        </v-list-tile-action>
        <router-link to="/d-alm-mat"><v-list-tile-title >Almacén de materiales</v-list-tile-title></router-link>
      </v-list-tile>
       
    </v-list-group>
    <v-list-group prepend-icon="account_balance">
<v-list-tile slot="activator">
          <v-list-tile-title>Edificio E*</v-list-tile-title>
        </v-list-tile>

         <v-list-tile>
        <v-list-tile-action>
          <v-icon>all_out</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Control escolar</v-list-tile-title>
      </v-list-tile>

       <v-list-tile>
        <v-list-tile-action>
          <v-icon>all_out</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Servicio médico</v-list-tile-title>
      </v-list-tile>

       <v-list-tile>
        <v-list-tile-action>
          <v-icon>all_out</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Finanzas</v-list-tile-title>
      </v-list-tile>

       <v-list-tile>
        <v-list-tile-action>
          <v-icon>all_out</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Incubadora de proyectos</v-list-tile-title>
      </v-list-tile>

    </v-list-group>

    <v-list-group prepend-icon="account_balance">
<v-list-tile slot="activator">
          <v-list-tile-title>Edificio F***</v-list-tile-title>
        </v-list-tile>
    </v-list-group>

    <v-list-group
        prepend-icon="account_balance"
        value="true"
      >
<v-list-tile slot="activator">
          <v-list-tile-title>Edificio G***</v-list-tile-title>
        </v-list-tile>
       
            <v-list-tile>
        <v-list-tile-action>
          <v-icon>all_out</v-icon>
        </v-list-tile-action>
         <router-link to="/coordinacion-i"><v-list-tile-title>Coordinación de inglés</v-list-tile-title></router-link>
      </v-list-tile>
      

      <v-list-tile>
        <v-list-tile-action>
          <v-icon>all_out</v-icon>
        </v-list-tile-action>
         <router-link to="/dir-er"><v-list-tile-title>Dirección de energías renovables</v-list-tile-title></router-link>
      </v-list-tile>
       
    </v-list-group>
     <v-list-group
        prepend-icon="account_balance"
        
      >
<v-list-tile slot="activator">
          <v-list-tile-title>Edificio H</v-list-tile-title>
        </v-list-tile>
       
       

<v-list-tile>
        <v-list-tile-action>
          <v-icon>all_out</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Laboratorio camión</v-list-tile-title>
      </v-list-tile>

      <v-list-tile>
        <v-list-tile-action>
          <v-icon >all_out</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Laboratorios no usados</v-list-tile-title>
      </v-list-tile>

       <v-list-tile>
        <v-list-tile-action>
          <v-icon >all_out</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Laboratorios no usados</v-list-tile-title>
      </v-list-tile>

       <v-list-tile>
        <v-list-tile-action>
          <v-icon >all_out</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Bodegas</v-list-tile-title>
      </v-list-tile>      
       
    </v-list-group>

 <v-list-group prepend-icon="account_balance">
<v-list-tile slot="activator">
          <v-list-tile-title>Casetas de vigilancia</v-list-tile-title>
        </v-list-tile>

<v-list-tile>
        <v-list-tile-action>
          <v-icon >all_out</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Entrada principla</v-list-tile-title>
      </v-list-tile>  

      <v-list-tile>
        <v-list-tile-action>
          <v-icon >all_out</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Entrada de vehiculos</v-list-tile-title>
      </v-list-tile>  

    </v-list-group>


</v-list>

    </v-navigation-drawer>
    <v-toolbar color="green" app absolute clipped-left class="white--text">
      <v-toolbar-side-icon @click="drawer = !drawer" class="white--text"></v-toolbar-side-icon>
      <span class="title ml-3 mr-5 ">¿A dónde quieres ir?&nbsp;<span class="font-weight-light">UPVT</span></span>      
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height class="grey lighten-4">
        <v-layout align-center justify-center column fill-height>
      <v-flex xs10 offset-xs1>
        <!--<v-card dark color="orange">
          <v-card-text class="px-0">12</v-card-text>
        </v-card>-->
      <img alt="Vue logo" src='@/assets/EdificioG.png' class="flex xs4 offset-xs4">        
      <br>
<h3>Rectoría</h3>
<br>
<img alt="Vue logo" src='@/assets/GMap.jpeg' class="flex xs12">        
<br>
      </v-flex>


      <v-flex xs12>
        <br>
 <strong>Objetivo General</strong>
 <p>
El objetivo general de la enseñanza del inglés es que los estudiantes obtengan los conocimientos necesarios para participar en prácticas sociales del lenguaje de manera oral y escrita, con hablantes nativos y no nativos del inglés, a través de actividades que conllevan la producción e interpretación de diversos textos escritos y orales de naturaleza cotidiana, académica y literaria.
</p>
<strong>Objetivos Específicos</strong>
<p>
    Sensibilizar a los estudiantes sobre la existencia de una lengua distinta de la materna, y se familiaricen con ella.
    Que los estudiantes obtengan los conocimientos necesarios para comprender y utilizar la lengua inglesa de manera que puedan reconocer, entender y emplear expresiones ampliamente utilizadas.
    Comprender y usar el inglés para desarrollar tareas comunicativas simples y cotidianas sobre temas conocidos o habituales relacionados con los ambientes familiar y comunitario, académico y de formación, o el literario y lúdico.
    Que los estudiantes consoliden su dominio del inglés en situaciones comunicativas básicas y sean capaces de participar en actividades con el lenguaje, propias de prácticas sociales del lenguaje.
</p>
<strong>Misión</strong>
<p>Proporcionar a los alumnos de las condiciones que les permitan formarse a través de una educación integral de calidad, incluyente, pertinente e innovadora para el desarrollo y fortalecimiento de las competencias afectivas, sociales y cognoscitivas que favorezcan las funciones mentales de razonamiento lógico, reflexión, integración de juicios, asi como el desarrollo de su creatividad.

Establecer las estructuras dinámicas que propicien un ambiente democrático, que permita a los alumnos cultivar una actitud que responda a la práctica de los valores y al desenvolvimiento de sus capacidades, aprovechar conscientemente su potencial e interactuar productivamente con su entorno.</p>

<strong>Visión</strong>
<p>Ofrecer una educación de calidad que permita a los alumnos desarrollar las competencias y adquirir los aprendizajes esperados establecidos en el Plan de Estudios para Educación Básica 2011.

Desarrollar Las Actividades didácticas centradas en el alumno y su aprendizaje, así como formar ciudadanos que aprecien y practiquen los valores para convivir armónicamente en sociedad.</p>
        </v-flex>
        </v-layout>
        <v-layout row>
      
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      items: [
       { text: 'Edificio A' },
       { divider: true },
        { icon: 'lightbulb_outline', text: 'Dirección de informática' },
        { icon: 'touch_app', text: 'Rectoría' },
        { divider: true },
        { heading: 'Labels' },
        { icon: 'add', text: 'Create new label' },
        { divider: true },
        { icon: 'archive', text: 'Archive' },
        { icon: 'delete', text: 'Trash' },
        { divider: true },
        { icon: 'settings', text: 'Settings' },
        { icon: 'chat_bubble', text: 'Trash' },
        { icon: 'help', text: 'Help' },
        { icon: 'phonelink', text: 'App downloads' },
        { icon: 'keyboard', text: 'Keyboard shortcuts' }
      ]
    }),
    props: {
      source: String
    }
  }
</script>

<style lang="stylus">
  #keep
    .v-navigation-drawer__border
      display: none
</style>