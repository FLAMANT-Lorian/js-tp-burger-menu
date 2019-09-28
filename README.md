# JS-burger-menu

Navigation mobile-first _Push Left_ librement inspiré du code du livre Responsive Design Patterns de Ethan Marcotte.

 * JavaScript pour le comportement _touch_ et la génération du bouton de menu
 * CSS pour les styles et les transitions

Le principe général est celui-ci :

 * Si JavaScript n'est pas activé ou si le navigateur est ancien, la navigation s'affiche simplement dans le flux, de façon accessible. *
 * Sur petit écran (maxi 544px), `main` s'affiche par dessus _navigation_ et le bouton de navigation `nav-button` apparaît. 
 * JavaScript s'occupe de l'action _touch_ en ajoutant/retirant la classe `.is-opened` sur `main`.
 * Sur grand écran (mini 545px), _navigation_ est simplement placée dans le flux en haut de `main`.

\* Dans 1 premier temps, nous vous demandons de vérifier la présence des méthodes `querySelector` et `addEventListener`. Dans un deuxième temps, je vous invite à lire ceci : [polyfill.io](https://polyfill.io/v3/). 

![readme](./readme.gif)