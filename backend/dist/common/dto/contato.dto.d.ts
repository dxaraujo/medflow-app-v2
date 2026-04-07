export declare class ContatoEmergenciaDto {
    nome: string;
    parentesco?: string;
    telefone: string;
}
export declare class CreateContatoDto {
    telefone_principal: string;
    telefone_secundario?: string;
    email?: string;
    contato_emergencia?: ContatoEmergenciaDto;
}
