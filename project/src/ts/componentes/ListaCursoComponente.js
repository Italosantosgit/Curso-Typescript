import Componente from "./Componente";
class ListaCursoComponente extends Componente {
    constructor(lista) {
        super();
        this.template = document.createElement('div');
        this.template.classList.add('row cursos');
        this.cursos = lista;
    }
    render() {
        this.cursos.forEach(item => {
            this.template.appendChild(item.render());
        });
        return this.template;
    }
}
export default ListaCursoComponente;
