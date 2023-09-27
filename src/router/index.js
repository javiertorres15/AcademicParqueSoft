import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // Si savedPosition está definido, utiliza esa posición.
    if (savedPosition) {
      return savedPosition;
    } else {
      // De lo contrario, desplaza la página al principio.
      return { x: 0, y: 0 };
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/institucion',
      name: 'institucion',
      component: () => import('../views/institucion.vue')
    },
    {
      path: '/ayuda',
      name: 'ayuda',
      component: () => import('../views/ayuda.vue')
    },
    {
      path: '/mision',
      name: 'mision',
      component: () => import('../views/mision.vue')
    }
    ,
    {
      path: '/pqrs',
      name: 'pqrs',
      component: () => import('../views/pqrs.vue')
    }

    // RUTAS CURSOS DE Programacion
    ,
    {
      path: '/java',
      name: 'java',
      component: () => import('../views/programacion/java.vue')
    }
    ,
    {
      path: '/net',
      name: 'net',
      component: () => import('../views/programacion/net.vue')
    }
    ,
    {
      path: '/javascript',
      name: 'javascript',
      component: () => import('../views/programacion/javascript.vue')
    }
    ,
    {
      path: '/node',
      name: 'node',
      component: () => import('../views/programacion/node.vue')
    }
    ,
    {
      path: '/php',
      name: 'php',
      component: () => import('../views/programacion/php.vue')
    }
    ,
    {
      path: '/python',
      name: 'python',
      component: () => import('../views/programacion/python.vue')
    }

    ,
    // RUTAS CURSOS DE Emprendimiento
    
    {
      path: '/creacion-de-marcas',
      name: 'creacion-de-marcas',
      component: () => import('../views/emprendimiento/creacion-de-marcas.vue')
    }
    ,
    {
      path: '/creacion-tiendas-online',
      name: 'creacion-tiendas-online',
      component: () => import('../views/emprendimiento/creacion-tiendas-online.vue')
    }
    ,
    {
      path: '/economia-domestica',
      name: 'economia-domestica',
      component: () => import('../views/emprendimiento/economia-domestica.vue')
    }
    ,
    {
      path: '/google-ads',
      name: 'google-ads',
      component: () => import('../views/emprendimiento/google-ads.vue')
    }
    ,
    {
      path: '/meta-ads',
      name: 'meta-ads',
      component: () => import('../views/emprendimiento/meta-ads.vue')
    }
    ,
    {
      path: '/maduracion-de-proyectos',
      name: 'maduracion-de-proyectos',
      component: () => import('../views/emprendimiento/maduracion-de-proyectos.vue')
    }
    ,
    {
      path: '/plan-de-negocios',
      name: 'plan-de-negocios',
      component: () => import('../views/emprendimiento/plan-de-negocios.vue')
    }
    ,
    {
      path: '/gestion-procesos',
      name: 'gestion-procesos',
      component: () => import('../views/emprendimiento/gestion-procesos.vue')
    }
    ,
    // RUTAS CURSOS DE Ofimatica
    {
      path: '/excel-basico',
      name: 'excel-basico',
      component: () => import('../views/ofimatica/excel-basico.vue')
    }
    ,
    {
      path: '/excel-intermedio',
      name: 'excel-intermedio',
      component: () => import('../views/ofimatica/excel-intermedio.vue')
    }
    ,
    {
      path: '/excel-avanzado',
      name: 'excel-avanzado',
      component: () => import('../views/ofimatica/excel-avanzado.vue')
    }
    ,
    {
      path: '/word-basico',
      name: 'word-basico',
      component: () => import('../views/ofimatica/word-basico.vue')
    }
    ,
    {
      path: '/word-intermedio',
      name: 'word-intermedio',
      component: () => import('../views/ofimatica/word-intermedio.vue')
    }
    ,
    {
      path: '/word-avanzado',
      name: 'word-avanzado',
      component: () => import('../views/ofimatica/word-avanzado.vue')
    }
    ,
    {
      path: '/power-point-bsc',
      name: 'power-point-bsc',
      component: () => import('../views/ofimatica/power-point-bsc.vue')
    }
    ,
    {
      path: '/power-point-intermedio',
      name: 'power-point-intermedio',
      component: () => import('../views/ofimatica/power-point-intermedio.vue')
    }
    ,
    {
      path: '/power-point-avanzado',
      name: 'power-point-avanzado',
      component: () => import('../views/ofimatica/power-point-avanzado.vue')
    }
    ,
    // RUTAS CURSOS DE TIC
    {
      path: '/ciudadano-digital1',
      name: 'ciudadano-digital1',
      component: () => import('../views/tic/ciudadano-digital1.vue')
    }
    ,
    {
      path: '/ciudadano-digital2',
      name: 'ciudadano-digital2',
      component: () => import('../views/tic/ciudadano-digital2.vue')
    }
    ,
    {
      path: '/alfabetizacion-digital',
      name: 'alfabetizacion-digital',
      component: () => import('../views/tic/alfabetizacion-digital.vue')
    }
    ,
    {
      path: '/herramientas-comunicativas',
      name: 'herramientas-comunicativas',
      component: () => import('../views/tic/herramientas-comunicativas.vue')
    }
    ,
    {
      path: '/competencias-comunicativas',
      name: 'competencias-comunicativas',
      component: () => import('../views/tic/competencias-comunicativas.vue')
    }
    ,
     // RUTAS CURSOS DE TIC
    {
      path: '/metodologia-canvas',
      name: 'metodologia-canvas',
      component: () => import('../views/diseño/metodologia-canvas.vue')
    }
    ,
    {
      path: '/diseno-publicitario',
      name: 'diseno-publicitario',
      component: () => import('../views/diseño/diseno-publicitario.vue')
    }
    ,
    {
      path: '/diseno-UxUis',
      name: 'diseno-UxUis',
      component: () => import('../views/diseño/diseno-UxUis.vue')
    }
    ,
    {
      path: '/diseno-presentaciones',
      name: 'diseno-presentaciones',
      component: () => import('../views/diseño/diseno-presentaciones.vue')
    }
    ,
    {
      path: '/illustrator',
      name: 'illustrator',
      component: () => import('../views/diseño/illustrator.vue')
    }
    ,
    {
      path: '/photoshop',
      name: 'photoshop',
      component: () => import('../views/diseño/photoshop.vue')
    }
    ,
    {
      path: '/afterEffects',
      name: 'afterEffects',
      component: () => import('../views/diseño/afterEffects.vue')
    }
    ,
    // RUTAS CURSOS DE Marketing
    {
      path: '/community-manager',
      name: 'community-manager',
      component: () => import('../views/marketing/community-manager.vue')
    }
    ,
    {
      path: '/marketing-digital',
      name: 'marketing-digital',
      component: () => import('../views/marketing/marketing-digital.vue')
    }
    ,
    {
      path: '/habilidades-sociales',
      name: 'habilidades-sociales',
      component: () => import('../views/marketing/habilidades-sociales.vue')
    }
    ,
    {
      path: '/instagram',
      name: 'instagram',
      component: () => import('../views/marketing/instagram.vue')
    }
    ,
    {
      path: '/posicionamientos-marcas',
      name: 'posicionamientos-marcas',
      component: () => import('../views/marketing/posicionamientos-marcas.vue')
    }
    ,
    {
      path: '/internet-rs-dg',
      name: 'internet-rs-dg',
      component: () => import('../views/marketing/internet-rs-dg.vue')
    }
    ,
    {
      path: '/posicionamiento-buscadores',
      name: 'posicionamiento-buscadores',
      component: () => import('../views/marketing/posicionamiento-buscadores.vue')
    }
  ],
})

export default router


