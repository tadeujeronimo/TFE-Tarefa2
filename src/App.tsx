import EditalCard from './components/EditalCard';

// Dados dos editais de monitoria
const editais = [
  {
    disciplina: 'Engenharia de Software',
    professor: 'Frederico de Miranda Coelho',
    curso: 'Sistemas de Informação',
    vagas: 2,
    periodoInscricao: '01/06/2026 a 15/06/2026',
    status: 'Aberto' as const,
    destaque: true
  },
  {
    disciplina: 'Programação Web',
    professor: 'Silder Lamas Vecchi',
    curso: 'Sistemas de Informação',
    vagas: 1,
    periodoInscricao: '05/06/2026 a 20/06/2026',
    status: 'Aberto' as const
  },
  {
    disciplina: 'Banco de Dados',
    professor: 'João Paulo Campolina Lamas',
    curso: 'Análise e Desenvolvimento de Sistemas',
    vagas: 2,
    periodoInscricao: '01/05/2026 a 15/05/2026',
    status: 'Encerrado' as const
  },
  {
    disciplina: 'Inteligência Artificial',
    professor: 'Maurício Archanjo Nunes Coelho',
    curso: 'Sistemas de Informação',
    vagas: 2,
    periodoInscricao: '10/06/2026 a 25/06/2026',
    status: 'Aberto' as const
  },
  {
    disciplina: 'Machine Learning',
    professor: 'Lucas Grassano Lattari',
    curso: 'Ciência da Computação',
    vagas: 1,
    periodoInscricao: '08/06/2026 a 22/06/2026',
    status: 'Aberto' as const
  },
  {
    disciplina: 'Redes de Computadores',
    professor: 'Bianca Portes de Castro',
    curso: 'Sistemas de Informação',
    vagas: 2,
    periodoInscricao: '01/04/2026 a 15/04/2026',
    status: 'Encerrado' as const
  }
];

// Componente principal da aplicação
//function App(): JSX.Element {
function App(): React.ReactElement {
  return (
    <>
      <header className="hero text-white py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">
            Sistema de Monitorias
          </h1>
          <p className="lead">
            IF Sudeste MG – Campus Rio Pomba
          </p>
        </div>
      </header>

      <main className="container py-5">
        <div className="row g-4">
          {editais.map((edital) => (
            <div className="col-md-6 col-lg-4" key={edital.disciplina}>
              <EditalCard {...edital} />
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-dark text-white text-center py-4 mt-5">
        <div className="container">
          <p className="mb-1">
            Sistema de Monitorias – IF Sudeste MG
          </p>

          <p className="mb-0 small">
            Desenvolvido para a disciplina Tecnologias Front-End
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
