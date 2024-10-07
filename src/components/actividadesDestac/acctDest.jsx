import Footer from '../home/footer/footer';
import Header from '../home/header/header';
import Menu from '../home/main/menu/menu';
import Modal from '../home/main/menu/modal';
import MainAct from './mainAct/mainAct';

const Actividades = ()=>{

    const datosActiv = [
        {
            img: 'https://principal.url.edu.gt/wp-content/uploads/2022/02/agrupClubes_home-400x300.jpg',
            title: 'CENTRO DE RESPONSABILIDAD SOCIAL UNIVERSITARIA​',
            descripcion: 'En la Universidad Rafael Landívar se entiende como responsabilidad social universitaria (RSU) la habilidad y efectividad para responder a las necesidades urgentes de transformación de la sociedad.',
        },{
            img: "https://principal.url.edu.gt/wp-content/uploads/2020/06/becas_home-400x300.jpg",
            title: 'CENTRO DE PENSAMIENTO IGNACIANO',
            descripcion: 'Fortalece integralmente el pensamiento sobre la identidad institucional de inspiración cristiana, ignaciana y landivariana. Favorece el apostolado intelectual mediante la promoción de actividades intelectuales dirigidas en favor de la identidad y misión de la Universidad.',
        },{
            img: 'https://principal.url.edu.gt/wp-content/uploads/2022/10/deportes_home-400x300.jpg',
            title: 'DIRECCIÓN DE CONVIVENCIA Y AMBIENTES SEGUROS',
            descripcion: 'Brinda seguimiento a los procesos relacionados con las políticas, protocolos normas e instrumentos institucionales en materia de convivencia y ambientes seguros; procura la salvaguarda de la dignidad e integridad de la comunidad universitaria.',
        },{
            img: 'https://principal.url.edu.gt/wp-content/uploads/2022/02/rsu_home-400x300.jpg',
            title:'CENTRO DE ARTES LANDÍVAR', 
            descripcion: 'Lugar de encuentro estudiantil para la expresión y experimentación de diversas disciplinas artísticas. Dedicado a la investigación, creación y promoción de teatro contemporáneo, danza contemporánea y música, así como a la documentación virtual del patrimonio cultural, artístico e histórico de la URL y la Compañía de Jesús en Guatemala.',
        },{
            img: 'https://principal.url.edu.gt/wp-content/uploads/2022/10/pensamientoIgn_home-400x300.jpg',
            title: 'CENTRO LANDIVARIANO DE ENLACE Y VINCULACIÓN',
            descripcion: 'Sistematiza y mejora la eficiencia y eficacia en la oferta de cooperación para la Universidad en la identificación, recaudación y gestión de recursos que fortalezcan las funciones sustantivas de la misma, así como el acceso de estudiantes interesados, que tienen restricciones económicas para acceder a ella.'
        },{
            img: 'https://principal.url.edu.gt/wp-content/uploads/2022/10/convivencia_home.jpg',
            title: 'CENTRO PASTORAL UNIVERSITARIO LANDIVARIANO',
            descripcion: 'Busca acompañar a la Comunidad Landivariana en el encuentro con el Dios de Jesús, desde la espiritualidad ignaciana y, favorecer así, el desarrollo integral (humano/espiritual) de la persona, de manera que la lleve al compromiso consigo mismo, con la sociedad y con la creación.'
        }
    ];

    return <div className="App">
        <Modal/>
        <Menu/>
        <Header/>
        <MainAct datosActiv={datosActiv}/>
        <Footer/>
    </div>
}

export default Actividades;