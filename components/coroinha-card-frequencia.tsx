import {Button} from './ui/button'

type Props = {
    nome: string;
    key: string;
    statusSelecionado: string;
    onChangeStatus: (status: string) => void;
}

export function CoroinhaCardFrequencia({nome, statusSelecionado, onChangeStatus}: Props){
    const options = [
        {value: 'P', label: 'Presente'},
        {value: 'FJ', label: 'Falta Justificada'},
        {value: 'FNJ', label: 'Falta Não Justificada'}
    ]

    return (
        <div className='w-full my-4 p-4 gap-4 border rounded-md flex flex-col md:flex-row items-center justify-between'>
            <span className='font-medium'>{nome}</span>
            <div className=' flex flex-col w-full md:flex-row gap-2 justify-end'>
                {options.map((option) => (
                    <Button key={option.value} variant ={statusSelecionado === option.value ? 'default' : 'outline'} onClick={() => onChangeStatus(option.value)} type='button' >
                        {option.label}
                    </Button>
                ))}
            </div>
        </div>
    )
}