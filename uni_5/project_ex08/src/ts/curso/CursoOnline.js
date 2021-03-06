import Curso from './Curso';
class CursoOnline extends Curso {
    constructor(nome, cargaHoraria, categoria, link = 'http://www.imediabrasil.com.br') {
        super(nome, cargaHoraria, categoria);
        this.link = link;
    }
    render() {
        return `<article class="col-sm-6 col-md-4 curso online ${this.categoria}">
        <div class="card">
            <img class="responsive-img" src="assets/img/javascript.jpg">
            <div class="card-block">
                <h4 class="card-title">${this.nome}</h4>
                <p class="card-text">${this.cargaHoraria}h de curso</p>
                <a href="#" class="btn btn-primary"><i class="fas fa-heart"></i> Favoritar</a>
                <a href="${this.link}" class="btn btn-primary">Acessar</a>
            </div>
        </div>
    </article>`;
    }
}
export default CursoOnline;
