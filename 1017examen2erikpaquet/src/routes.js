
import Accueil from './views/Accueil.vue';
import Contact from './views/Contact.vue';
import Projet from './views/Projet.vue';


const routes = [
  { path: '/', component: Accueil },
  { path: '/accueil', component: Accueil },
  { path: '/contact', component: Contact },
  { path: '/projet', component: Projet },
];

export default routes;