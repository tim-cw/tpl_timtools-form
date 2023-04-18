import Icons from './utils/Icons';

class Main {
  constructor() {
    this.init();
  }

  init() {
    // On ajoute une classe sur le html
    // pour qu'on puisse savoir si le JavaScript est
    // supporté dans notre css
    document.documentElement.classList.add('has-js');

    //new ComponentFactory(); N'oublie pas de l'importer

    Icons.load();
  }
}
new Main();
