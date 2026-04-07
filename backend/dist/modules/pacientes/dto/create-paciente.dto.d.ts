import { CreateDataInfoDto } from '../../../common/dto/data-info.dto';
import { CreateContatoDto } from '../../../common/dto/contato.dto';
import { CreateEnderecoDto } from '../../../common/dto/endereco.dto';
export declare class ConvenioPacienteDto {
    convenio_id: string;
    numero_carteirinha: string;
    validade?: CreateDataInfoDto;
    plano?: string;
}
export declare class CreatePacienteDto {
    nome_completo: string;
    data_nascimento: CreateDataInfoDto;
    sexo: string;
    cpf: string;
    rg?: string;
    nome_mae?: string;
    naturalidade?: string;
    contato: CreateContatoDto;
    endereco: CreateEnderecoDto;
    convenios?: ConvenioPacienteDto[];
    ativo?: boolean;
}
