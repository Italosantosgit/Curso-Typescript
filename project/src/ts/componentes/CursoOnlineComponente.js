import Componente from "./Componente";
class CursoOnlineComponent extends Componente {
    constructor(curso) {
        super();
        this.curso = curso;
        this.template = document.createElement('article');
        this.template.className = 'col-sm-6 col-md-4 curso online';
    }
    render() {
        this.template.innerHTML = `
        <div class="card">
            <img class="responsive-img" src="${this.curso.thumb}">
            <div class="card-block">
                <h4 class="card-title">${this.curso.nome}</h4>
                <p class="card-text">${this.curso.cargaHoraria}h de curso</p>
                <a href="#" class="btn btn-primary"><i class="fas fa-heart"></i> Favoritar</a>
                <a href="${this.curso.link}" class="btn btn-primary">Acessar</a>
            </div>
        </div>`;
        return this.template;
    }
}
export default CursoOnlineComponent;
