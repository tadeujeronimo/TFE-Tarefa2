// Definição do tipo para as propriedades do componente EditalCard
interface EditalCardProps {
  disciplina: string;
  professor: string;
  curso: string;
  vagas: number;
  periodoInscricao: string;
  status: 'Aberto' | 'Encerrado';
  destaque?: boolean;
}

// Componente para exibir as informações de um edital de monitoria
//export default function EditalCard(props: EditalCardProps): JSX.Element {
export default function EditalCard(props: EditalCardProps): React.ReactElement {
  return (
    <div className="card h-100 shadow-sm">
      {props.destaque && (
        <div className="bg-warning text-dark text-center fw-bold py-2">
          EDITAL EM DESTAQUE
        </div>
      )}

      <div className="card-body bg-success-subtle">
        <h5>{props.disciplina}</h5>

        <p><strong>Professor:</strong> {props.professor}</p>
        <p><strong>Curso:</strong> {props.curso}</p>
        <p><strong>Vagas:</strong> {props.vagas}</p>
        <p><strong>Período:</strong> {props.periodoInscricao}</p>

        {props.status === 'Aberto' ? (
          <span className="badge bg-success">Inscrições Abertas</span>
        ) : (
          <span className="badge bg-danger">Edital Encerrado</span>
        )}
      </div>
    </div>
  );
}
