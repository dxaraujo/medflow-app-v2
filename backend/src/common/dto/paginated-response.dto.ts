export class PaginatedResponseDto<T> {
  statusCode: number;
  message: string;
  data: T[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };

  constructor(
    data: T[],
    total: number,
    page: number,
    limit: number,
    message = 'Listagem realizada com sucesso',
  ) {
    this.statusCode = 200;
    this.message = message;
    this.data = data;
    this.meta = {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }
}
