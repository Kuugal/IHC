<template>
  <v-app id="keep">
  

<!------- NAV   ------->
<nav></nav>


    
    <v-toolbar color="green" app absolute clipped-left class="white--text">
      <v-toolbar-side-icon @click="drawer = !drawer" class="white--text"></v-toolbar-side-icon>
      <span class="title ml-3 mr-5 ">¿A dónde quieres ir?&nbsp;<span class="font-weight-light">UPVT</span></span>      
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height class="grey lighten-4">
        <v-layout align-center justify-center column fill-height>
      <v-flex xs8  md4>
        <!--<v-card dark color="orange">
          <v-card-text class="px-0">12</v-card-text>
        </v-card>-->
        <img alt="Vue logo" src='@/assets/toluca.png' height="300">
        

         <!--<v-img
                  :src="'http://interpolitecnicas.upsin.edu.mx/administracion/assets/img/logos_politecnicas/toluca.png'"
                  aspect-ratio="1"
                   
                >
                  <v-layout
                    slot="placeholder"
                    fill-height
                    align-center
                    justify-center
                    ma-0
                  >
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-layout>
                </v-img>
-->


      </v-flex>


      <v-flex xs12>
 <p>Este sitio es un prototipo para una aplicación de funcionalidad localizada surgida a partir de necesidades específicas de usuarios de la universidad.</p>
 
<strong>El principal objetivo de la página es:</strong>

    <p>El brindar a todos los interesados la información que sea requerida acerca de las ubicaciones de los puntos de interes de la institución.
    Que el servicio brindado sea rápido y de fácil acceso.    
    Solucionar problemas focalizados en cuanto a la distribución geográfica de la infraestructura de la universidad.</p>

<strong>Lenguaje ciudadano</strong>
 
<p>Este sitio de la UPVT esta construido de tal manera que cualquier persona que acceda a él pueda entender la información, que ahí se presenta de una manera fácil y digerible.</p>
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