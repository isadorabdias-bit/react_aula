function CardRecomenda({titulo, subtitulo, descricao, img}) {
    return(
        // depois sera modificado no index da pasta ultimoslancamentos, onde esta puxando esta pasta, 
        // ai sera colocado esses nomes e oq estives escrilo la ira aparecer aqui, e a imagem tbm, 
        // ai so vai ser necessario passar os dados la no index da pasta ultimoslancamentos
         <div>
            <h3>{titulo}</h3>
            <h4>{subtitulo}</h4>
            <p>{descricao}</p>
            <img src={img} />
            <button>Saiba mais</button>
        </div>
    )
}

export default CardRecomenda