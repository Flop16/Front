class Variedad extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            mostrar: true
        };

        this.cambiarMostrar = this.cambiarMostrar.bind(this);
    }

    cambiarMostrar() {
        var mostrarActual = this.state.mostrar;
        this.setState({
            mostrar: !mostrarActual
        });
    }

    render() {
        var clase = "";
        var texto = "";
        if (this.state.mostrar){
            clase = " d-block";
            texto = "Mostrar menos"
        } else {
            clase = " d-none";
            texto = "Mostrar más"
        }
        return(
            <React.Fragment>
                <img src={"img html/" + this.props.imagen} alt="Tortas" height="120px" class="d-none d-md-block mr-5" />
                <div>
                    <h4>{this.props.titulo}</h4>
                    <button class="btn btn-info" onClick={this.cambiarMostrar}>{texto}</button>
                    <p class={clase}>{this.props.descripcion}</p>
                </div>
            </React.Fragment>
        );
    }
}


ReactDOM.render(
    <Variedad titulo="Cheesecakes" descripcion="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut ab quam atque asperiores quisquam eveniet quas excepturi, ipsa debitis quaerat corporis totam facere nam quod cupiditate, dolores sunt odio non!" imagen="cheesecake ddl_2.png" />, 
    document.getElementById("proyecto-cheesecake")
);

ReactDOM.render(
    <Variedad titulo="Chocolate" descripcion="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut ab quam atque asperiores quisquam eveniet quas excepturi, ipsa debitis quaerat corporis totam facere nam quod cupiditate, dolores sunt odio non!" imagen="torta choco.png" />, 
    document.getElementById("proyecto-chocolate")
);

ReactDOM.render(
    <Variedad titulo="Key Lime Pie" descripcion="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut ab quam atque asperiores quisquam eveniet quas excepturi, ipsa debitis quaerat corporis totam facere nam quod cupiditate, dolores sunt odio non!" imagen="Key Lime Pie_2.png" />, 
    document.getElementById("proyecto-key")
);