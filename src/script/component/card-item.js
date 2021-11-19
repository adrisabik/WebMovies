
class CardItem extends HTMLElement{
    connectedCallback(){
        this.src = this.getAttribute("src") || null;
        this.title = this.getAttribute("title") || null;
        this.release = this.getAttribute("release") || null;
        this.movieId = this.getAttribute("movie-id") || null;

        this.innerHTML= `
        <div class="card m-1">
        <img src="${this.src}" class="card-img-top" alt="poster">
        <div class="card-body">
            <h6 class="card-title">${this.title}</h6>
            <p class="card-text"><small class="text-muted">${this.release}</small></p>
            <button type="button" class="btn btn-primary btn-sm modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieModal" data-id="${this.movieId}">Get Details</button>
        </div>
        </div>
        `;
    }

}

customElements.define("card-item", CardItem);