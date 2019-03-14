<template>
  <v-app id="CoordinacionI">
   
<!-- START NAV-SIDEBAR -->
   
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
        <router-link to="/b-dir-ni"><v-list-tile-title>Dirección de Negocios Internacionales</v-list-tile-title></router-link>
      </v-list-tile>
      

      <v-list-tile>
        <v-list-tile-action>
          <v-icon>all_out</v-icon>
        </v-list-tile-action>
        <router-link to="/b-lab-c"><v-list-tile-title>Laboratorios de computo</v-list-tile-title></router-link>
      </v-list-tile>

      <v-list-tile>
        <v-list-tile-action>
          <v-icon>all_out</v-icon>
        </v-list-tile-action>
        <router-link to="/b-dir-b"><v-list-tile-title>Dirección de biotecnología</v-list-tile-title></router-link>
      </v-list-tile>

      <v-list-tile>
        <v-list-tile-action>
          <v-icon>all_out</v-icon>
        </v-list-tile-action>
        <router-link to="/b-aud-b"><v-list-tile-title>Auditorio B</v-list-tile-title></router-link>
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
        <router-link to="/c-caf"><v-list-tile-title>Cafetería</v-list-tile-title></router-link>
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
          <v-list-tile-title>Edificio E</v-list-tile-title>
        </v-list-tile>

         <v-list-tile>
        <v-list-tile-action>
          <v-icon>all_out</v-icon>
        </v-list-tile-action>
         <router-link to="/e-con"><v-list-tile-title>Control escolar</v-list-tile-title></router-link>
      </v-list-tile>

       <v-list-tile>
        <v-list-tile-action>
          <v-icon>all_out</v-icon>
        </v-list-tile-action>
         <router-link to="/e-ser"><v-list-tile-title>Servicio médico</v-list-tile-title></router-link>
      </v-list-tile>

       <v-list-tile>
        <v-list-tile-action>
          <v-icon>all_out</v-icon>
        </v-list-tile-action>
         <router-link to="/e-fin"><v-list-tile-title>Finanzas</v-list-tile-title></router-link>
      </v-list-tile>

       <v-list-tile>
        <v-list-tile-action>
          <v-icon>all_out</v-icon>
        </v-list-tile-action>
         <router-link to="/e-inc"><v-list-tile-title>Incubadora de proyectos</v-list-tile-title></router-link>
      </v-list-tile>

    </v-list-group>
    
    <v-list-tile>
        <v-list-tile-action>
          <v-icon>account_balance</v-icon>
        </v-list-tile-action>
        <router-link to="/f-sal"><v-list-tile-title>Edificio F</v-list-tile-title></router-link>
      </v-list-tile>

       <v-list-tile>
        <v-list-tile-action>
          <v-icon>account_balance</v-icon>
        </v-list-tile-action>
        <router-link to="/g-can"><v-list-tile-title>Edificio G</v-list-tile-title></router-link>
      </v-list-tile>

 <v-list-tile>
        <v-list-tile-action>
          <v-icon>account_balance</v-icon>
        </v-list-tile-action>
        <router-link to="/h-lab"><v-list-tile-title>Edificio H</v-list-tile-title></router-link>
      </v-list-tile>
    
     <v-list-tile>
        <v-list-tile-action>
          <v-icon>account_balance</v-icon>
        </v-list-tile-action>
        <router-link to="/i-sal"><v-list-tile-title>Edificio I</v-list-tile-title></router-link>
      </v-list-tile>

<!--
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

    </v-list-group>-->


</v-list>

</v-navigation-drawer>

<v-toolbar color="green" app absolute clipped-left class="white--text">
      <v-toolbar-side-icon @click="drawer = !drawer" class="white--text"></v-toolbar-side-icon>
      <span class="title ml-3 mr-5 ">¿A dónde quieres ir?&nbsp;<span class="font-weight-light">UPVT</span></span>      
      <v-spacer></v-spacer>
    </v-toolbar>

<!-- END NAV-SIDEBAR -->

    <v-content>
      <v-container fluid fill-height class="grey lighten-4">
        <v-layout align-center justify-center column fill-height>
      <v-flex xs10>
        <!--<v-card dark color="orange">
          <v-card-text class="px-0">12</v-card-text>
        </v-card>-->
      <img alt="Vue logo" src='@/assets/edificio-d.jpeg' class="flex xs10 offset-xs1">        
      <br>
<h3>Laboratorio de hidráulica y neumática</h3>
<br>
<img alt="Vue logo" src='@/assets/hidraulica y neumatica.png' class="flex xs12">        
<br>
      </v-flex>


      <v-flex xs12>
        <br>
 
 <p>
 Es el encargado de adquirir conocimientos fundamentales, conocer ventajas e inconvenientes, así como realizar proyectos con la capacidad de determinar los métodos más adecuados (hidráulico y neumático) para una maquina o proceso completo.
</p>
<strong>Horario de atención</strong>
<p>
   7:00 a 21:00 hrs
</p>
<strong>Responsable</strong>
<p>
  ING. JUAN GARCÍA CONTRERAS
</p>
<p>
ING. JOSÉ ANACLETO DE JESÚS
</p>
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